import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

// "What's My Home Worth?" — returns the current market-value estimate + range
// for an existing home via RentCast's AVM. Captures the lead (address + email)
// behind the email gate. Needs RENTCAST_API_KEY set on this project; without it,
// it degrades to lead capture only (a broker follows up with the value).
export async function POST(req: NextRequest) {
  let body: { address?: string; email?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'bad_json' }, { status: 400 })
  }

  const address = (body.address || '').trim()
  const email = (body.email || '').trim()
  if (!address) return NextResponse.json({ error: 'missing_address' }, { status: 400 })

  // Lead capture (Vercel function logs for now; forward to CRM later).
  console.log('[home-value lead]', JSON.stringify({ email, address, ts: new Date().toISOString() }))

  const key = process.env.RENTCAST_API_KEY
  if (!key) return NextResponse.json({ value: null })

  try {
    const url = 'https://api.rentcast.io/v1/avm/value?' + new URLSearchParams({ address })
    const r = await fetch(url, {
      headers: { 'X-Api-Key': key, Accept: 'application/json' },
      signal: AbortSignal.timeout(9000),
    })
    if (!r.ok) return NextResponse.json({ value: null })
    const j: { price?: number; priceRangeLow?: number; priceRangeHigh?: number } = await r.json()
    const value = Number(j?.price)
    if (!value || Number.isNaN(value)) return NextResponse.json({ value: null })
    return NextResponse.json({
      value,
      low: j?.priceRangeLow != null ? Number(j.priceRangeLow) : Math.round(value * 0.95),
      high: j?.priceRangeHigh != null ? Number(j.priceRangeHigh) : Math.round(value * 1.05),
    })
  } catch {
    return NextResponse.json({ value: null })
  }
}
