import { NextResponse } from 'next/server'
import { upsertGhlContact } from '@/lib/ghl'

export const runtime = 'nodejs'

// Investor lead capture. Delivers to GoHighLevel via a direct contact upsert
// (lib/ghl.ts), falling back to an email notification via Resend. Tags the
// lead for the investor pipeline.

type Lead = {
  name?: string
  email?: string
  phone?: string
  market?: string
  budget?: string
  strategy?: string
  message?: string
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
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'missing-fields' }, { status: 400 })
  }

  const lead = {
    name,
    email,
    phone: (body.phone || '').trim(),
    market: (body.market || '').trim(),
    budget: (body.budget || '').trim(),
    strategy: (body.strategy || '').trim(),
    message: (body.message || '').trim(),
    smsConsent: !!body.smsConsent,
    audience: 'Investor',
    source: 'src-web-investor',
    tags: ['investor-lead', 'src-web-investor'],
    submittedAt: new Date().toISOString(),
    site: 'southerncitiesrealty.com',
  }

  let delivered = false

  // 1) GoHighLevel contact upsert (preferred)
  const ghlResult = await upsertGhlContact({
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    source: lead.source,
    tags: lead.tags,
    message: lead.message,
    audience: lead.audience,
  })
  if (ghlResult.ok) delivered = true

  // 2) Email notification fallback via Resend
  const resendKey = process.env.RESEND_API_KEY_SCR || process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const lines = [
        `Name: ${lead.name}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone || '—'}`,
        `Target market: ${lead.market || '—'}`,
        `Budget: ${lead.budget || '—'}`,
        `Strategy: ${lead.strategy || '—'}`,
        `SMS consent: ${lead.smsConsent ? 'Yes' : 'No'}`,
        '',
        lead.message || '(no message)',
      ].join('\n')
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
          // Cloudflare on this network 403s the Resend API without a browser UA.
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15',
        },
        body: JSON.stringify({
          from: process.env.INVESTOR_LEAD_FROM || 'Southern Cities Realty <onboarding@resend.dev>',
          to: [process.env.INVESTOR_LEAD_TO || 'admin@southerncitiesrealty.com'],
          reply_to: lead.email,
          subject: `New investor lead: ${lead.name}`,
          text: lines,
        }),
      })
      if (r.ok) delivered = true
    } catch {
      /* ignore */
    }
  }

  // Never lose the lead silently in logs, even if no channel is configured yet.
  if (!delivered) {
    console.log('[investor-lead] (no delivery channel configured)', JSON.stringify(lead))
  }

  return NextResponse.json({ ok: true, delivered })
}
