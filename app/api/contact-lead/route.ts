import { NextResponse } from 'next/server'
import { upsertGhlContact } from '@/lib/ghl'

export const runtime = 'nodejs'

// General buyer/seller contact lead. Same delivery path as the investor form:
// GoHighLevel contact upsert (lib/ghl.ts) with an email fallback via Resend.
// Tagged for the general web-lead pipeline (the investor form uses its own tag).

type Lead = {
  name?: string
  email?: string
  phone?: string
  interest?: string
  areas?: string
  timeline?: string
  message?: string
  smsConsent?: boolean
}

function audienceFrom(interest: string): string {
  const i = interest.toLowerCase()
  if (i.includes('buying') && i.includes('selling')) return 'Buyer & Seller'
  if (i.includes('selling')) return 'Seller'
  if (i.includes('buying') || i.includes('relocat')) return 'Buyer'
  return 'General'
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

  const interest = (body.interest || '').trim()
  const lead = {
    name,
    email,
    phone: (body.phone || '').trim(),
    interest,
    areas: (body.areas || '').trim(),
    timeline: (body.timeline || '').trim(),
    message: (body.message || '').trim(),
    smsConsent: !!body.smsConsent,
    audience: audienceFrom(interest),
    source: 'src-web-contact',
    tags: ['web-lead', 'src-web-contact'],
    submittedAt: new Date().toISOString(),
    site: 'southerncitiesrealty.com',
  }

  let delivered = false

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

  const resendKey = process.env.RESEND_API_KEY_SCR || process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const lines = [
        `Name: ${lead.name}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone || '—'}`,
        `Interested in: ${lead.interest || '—'}`,
        `Areas: ${lead.areas || '—'}`,
        `Timeline: ${lead.timeline || '—'}`,
        `SMS consent: ${lead.smsConsent ? 'Yes' : 'No'}`,
        '',
        lead.message || '(no message)',
      ].join('\n')
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15',
        },
        body: JSON.stringify({
          from: process.env.CONTACT_LEAD_FROM || process.env.INVESTOR_LEAD_FROM || 'Southern Cities Realty <onboarding@resend.dev>',
          to: [process.env.CONTACT_LEAD_TO || process.env.INVESTOR_LEAD_TO || 'admin@southerncitiesrealty.com'],
          reply_to: lead.email,
          subject: `New website lead: ${lead.name}${interest ? ` (${interest})` : ''}`,
          text: lines,
        }),
      })
      if (r.ok) delivered = true
    } catch {
      /* ignore */
    }
  }

  if (!delivered) {
    console.log('[contact-lead] (no delivery channel configured)', JSON.stringify(lead))
  }

  return NextResponse.json({ ok: true, delivered })
}
