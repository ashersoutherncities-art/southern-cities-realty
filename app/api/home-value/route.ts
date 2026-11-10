import { NextRequest, NextResponse } from 'next/server'
import { upsertGhlContact } from '@/lib/ghl'
import { getHomeValueEstimate } from '@/lib/avm'

export const runtime = 'nodejs'

// "What's My Home Worth?" seller tool, in two steps:
//   GET  — anonymous instant estimate (RentCast + HouseCanary, blended). No
//          lead data required, so a visitor gets a number before we ask for
//          anything. Degrades to { estimate: null } if AVM is off or no
//          source returns a value — never fabricates a number.
//   POST — lead capture once they want the broker-run CMA. Delivers to GHL
//          (lib/ghl.ts), falling back to Resend, same pattern as
//          investor-lead and contact-lead.

export async function GET(req: NextRequest) {
  const address = (req.nextUrl.searchParams.get('address') || '').trim()
  if (!address) return NextResponse.json({ error: 'missing_address' }, { status: 400 })

  const estimate = await getHomeValueEstimate(address)
  return NextResponse.json({
    estimate: estimate
      ? {
          value: estimate.value,
          low: estimate.low,
          high: estimate.high,
          confidence: estimate.confidence,
          sources: estimate.sources.map((s) => s.source),
        }
      : null,
  })
}

type Lead = {
  name?: string
  email?: string
  phone?: string
  address?: string
  smsConsent?: boolean
}

export async function POST(request: Request) {
  let body: Lead
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'bad-request' }, { status: 400 })
  }

  const name = (body.name || '').trim()
  const email = (body.email || '').trim()
  const address = (body.address || '').trim()
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !address) {
    return NextResponse.json({ ok: false, error: 'missing-fields' }, { status: 400 })
  }

  const lead = {
    name,
    email,
    phone: (body.phone || '').trim(),
    address,
    smsConsent: !!body.smsConsent,
    source: 'src-web-home-value',
    tags: ['seller-lead', 'src-web-home-value'],
    submittedAt: new Date().toISOString(),
    site: 'southerncitiesrealty.com',
  }

  // Re-run the estimate server-side so the note reflects a trusted number,
  // not whatever the client happened to display.
  const estimate = await getHomeValueEstimate(address)

  const lines = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || '—'}`,
    `Address: ${lead.address}`,
    `SMS consent: ${lead.smsConsent ? 'Yes' : 'No'}`,
    '',
    estimate
      ? `Instant estimate shown: $${estimate.value.toLocaleString('en-US')} (range $${estimate.low.toLocaleString('en-US')}–$${estimate.high.toLocaleString('en-US')}, ${estimate.confidence} confidence, sources: ${estimate.sources.map((s) => s.source).join(' + ')})`
      : 'No instant estimate returned for this address — follow up with a CMA.',
  ].join('\n')

  let delivered = false

  const ghlResult = await upsertGhlContact({
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    source: 'Southern Cities Realty — Website',
    tags: lead.tags,
    leadType: 'Seller',
    areas: lead.address,
    smsConsent: lead.smsConsent,
    note: lines,
  })
  if (ghlResult.ok) delivered = true

  const resendKey = process.env.RESEND_API_KEY_SCR || process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
          // Cloudflare on this network 403s the Resend API without a browser UA.
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15',
        },
        body: JSON.stringify({
          from: process.env.CONTACT_LEAD_FROM || process.env.INVESTOR_LEAD_FROM || 'Southern Cities Realty <onboarding@resend.dev>',
          to: [process.env.CONTACT_LEAD_TO || process.env.INVESTOR_LEAD_TO || 'admin@southerncitiesrealty.com'],
          reply_to: lead.email,
          subject: `New seller lead (home value): ${lead.name}`,
          text: lines,
        }),
      })
      if (r.ok) delivered = true
    } catch {
      /* ignore */
    }
  }

  if (!delivered) {
    console.log('[home-value] (no delivery channel configured)', JSON.stringify(lead))
  }

  return NextResponse.json({
    ok: true,
    delivered,
    estimate: estimate
      ? { value: estimate.value, low: estimate.low, high: estimate.high, confidence: estimate.confidence }
      : null,
  })
}
