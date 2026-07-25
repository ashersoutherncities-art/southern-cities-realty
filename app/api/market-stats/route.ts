import { NextResponse } from 'next/server'

// Live for-sale market statistics by ZIP via RentCast. Never fabricated:
// with no API key (or on any error) we return { available: false } and the UI
// shows a graceful "ask a broker" state instead of made-up numbers.
export const runtime = 'nodejs'

export async function GET(request: Request) {
  const zip = new URL(request.url).searchParams.get('zip') || ''
  if (!/^\d{5}$/.test(zip)) {
    return NextResponse.json({ available: false, reason: 'invalid-zip' })
  }

  const key = process.env.RENTCAST_API_KEY
  if (!key) {
    return NextResponse.json({ available: false, reason: 'no-key' })
  }

  try {
    const res = await fetch(
      `https://api.rentcast.io/v1/markets?zipCode=${zip}&dataType=Sale`,
      {
        headers: { 'X-Api-Key': key, Accept: 'application/json' },
        // Cache each ZIP for 7 days to stay well within RentCast request limits.
        next: { revalidate: 604800 },
      },
    )
    if (!res.ok) {
      return NextResponse.json({ available: false, reason: `status-${res.status}` })
    }
    const data = await res.json()
    const s = data?.saleData || {}
    const hasData = s.medianPrice != null || s.averagePrice != null
    return NextResponse.json({
      available: hasData,
      zip,
      medianPrice: s.medianPrice ?? null,
      averagePrice: s.averagePrice ?? null,
      medianPricePerSqft: s.medianPricePerSquareFoot ?? null,
      medianDaysOnMarket: s.medianDaysOnMarket ?? null,
      totalListings: s.totalListings ?? null,
      newListings: s.newListings ?? null,
      lastUpdated: s.lastUpdatedDate ?? null,
    })
  } catch {
    return NextResponse.json({ available: false, reason: 'fetch-error' })
  }
}
