import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
// Route stays dynamic; RentCast calls are cached at the fetch layer (7 days)
// so we make at most ~one request per tracked ZIP per week — well inside the
// free tier. RentCast market stats only refresh monthly anyway.
export const dynamic = 'force-dynamic'

const REVALIDATE = 60 * 60 * 24 * 7 // 7 days

// Representative Charlotte-area ZIP codes → the neighborhood we label them with.
// Spread across price points so the "at a glance" figures aren't skewed to one
// pocket, and diverse enough to rank a real "most competitive" list.
const ZIPS: { zip: string; name: string }[] = [
  { zip: '28203', name: 'South End' },
  { zip: '28205', name: 'Plaza Midwood' },
  { zip: '28207', name: 'Myers Park' },
  { zip: '28209', name: 'Madison Park' },
  { zip: '28210', name: 'SouthPark' },
  { zip: '28211', name: 'Cotswold' },
  { zip: '28277', name: 'Ballantyne' },
  { zip: '28078', name: 'Huntersville' },
]

type SaleData = {
  medianPrice?: number
  averageDaysOnMarket?: number
  totalListings?: number
  newListings?: number
  lastUpdatedDate?: string
}

async function fetchZip(zip: string, key: string): Promise<SaleData | null> {
  const url =
    'https://api.rentcast.io/v1/markets?' +
    new URLSearchParams({ zipCode: zip, dataType: 'Sale' })
  try {
    const r = await fetch(url, {
      headers: { 'X-Api-Key': key, Accept: 'application/json' },
      next: { revalidate: REVALIDATE },
      signal: AbortSignal.timeout(9000),
    })
    if (!r.ok) return null
    const j = (await r.json()) as { saleData?: SaleData }
    return j?.saleData ?? null
  } catch {
    return null
  }
}

function median(nums: number[]): number | null {
  const a = nums.filter((n) => Number.isFinite(n)).sort((x, y) => x - y)
  if (!a.length) return null
  const mid = Math.floor(a.length / 2)
  return a.length % 2 ? a[mid] : Math.round((a[mid - 1] + a[mid]) / 2)
}

export async function GET() {
  const key = process.env.RENTCAST_API_KEY
  // No key wired up yet → the dashboard shows an honest "connecting" state
  // rather than any invented numbers.
  if (!key) return NextResponse.json({ available: false })

  const results = await Promise.all(
    ZIPS.map(async (z) => ({ ...z, data: await fetchZip(z.zip, key) }))
  )
  const ok = results.filter((r) => r.data)
  if (!ok.length) return NextResponse.json({ available: false })

  const medianPrice = median(
    ok.map((r) => Number(r.data!.medianPrice)).filter((n) => n > 0)
  )
  const inventory = ok.reduce((s, r) => s + (Number(r.data!.totalListings) || 0), 0)
  const newListings = ok.reduce((s, r) => s + (Number(r.data!.newListings) || 0), 0)

  // Listings-weighted average days on market.
  let domNum = 0
  let domDen = 0
  ok.forEach((r) => {
    const dom = Number(r.data!.averageDaysOnMarket)
    const w = Number(r.data!.totalListings) || 0
    if (dom > 0 && w > 0) {
      domNum += dom * w
      domDen += w
    }
  })
  const avgDom = domDen ? Math.round(domNum / domDen) : null

  // "Most competitive" = fastest-moving. Rank tracked neighborhoods by the
  // shortest average days on market (real RentCast data, honestly derived).
  const competitive = ok
    .map((r) => ({ name: r.name, dom: Math.round(Number(r.data!.averageDaysOnMarket)) }))
    .filter((r) => Number.isFinite(r.dom) && r.dom > 0)
    .sort((a, b) => a.dom - b.dom)
    .slice(0, 4)

  const updated = ok
    .map((r) => r.data!.lastUpdatedDate || '')
    .filter(Boolean)
    .sort()
    .pop() || null

  return NextResponse.json({
    available: true,
    updated,
    coverage: ok.length,
    medianPrice,
    inventory,
    newListings,
    avgDom,
    competitive,
    // RentCast's market endpoint doesn't expose these two; they light up when
    // the Canopy MLS feed connects. Never faked in the meantime.
    unavailable: ['priceReductions', 'newConstruction'],
  })
}
