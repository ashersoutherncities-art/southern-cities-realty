import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

// "Build your dream home" wishlist — captures a buyer lead from the homepage
// dream-home builder (email + what they're looking for). Logged to the Vercel
// function logs for now, same as the home-value lead capture; forward to CRM later.
export async function POST(req: NextRequest) {
  let body: {
    email?: string
    beds?: number
    style?: string
    budget?: number
    area?: string
    features?: string[]
    summary?: string
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'bad_json' }, { status: 400 })
  }

  const email = (body.email || '').trim()
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'missing_email' }, { status: 400 })
  }

  const lead = {
    email,
    beds: body.beds ?? null,
    style: body.style ?? null,
    budget: body.budget ?? null,
    area: body.area ?? null,
    features: Array.isArray(body.features) ? body.features : [],
    summary: (body.summary || '').trim(),
    ts: new Date().toISOString(),
  }

  console.log('[wishlist lead]', JSON.stringify(lead))

  return NextResponse.json({ ok: true })
}
