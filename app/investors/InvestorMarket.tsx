'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Banknote, Clock, DollarSign, Home, Ruler } from 'lucide-react'
import { money } from '../format'

const MARKETS: { label: string; zip: string }[] = [
  { label: 'Charlotte — South End (28203)', zip: '28203' },
  { label: 'Charlotte — Uptown (28202)', zip: '28202' },
  { label: 'Gastonia (28054)', zip: '28054' },
  { label: 'Concord (28025)', zip: '28025' },
  { label: 'Raleigh (27601)', zip: '27601' },
  { label: 'Durham (27701)', zip: '27701' },
  { label: 'Greensboro (27401)', zip: '27401' },
  { label: 'Winston-Salem (27101)', zip: '27101' },
  { label: 'Asheville (28801)', zip: '28801' },
  { label: 'Wilmington (28401)', zip: '28401' },
]

type Stats = {
  available: boolean
  medianPrice?: number | null
  medianPricePerSqft?: number | null
  medianDaysOnMarket?: number | null
  totalListings?: number | null
  medianRent?: number | null
  zip?: string
}

export function InvestorMarket() {
  const [zip, setZip] = useState(MARKETS[0].zip)
  const [data, setData] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let live = true
    setLoading(true)
    fetch(`/api/market-stats?zip=${zip}`)
      .then((r) => r.json())
      .then((d) => live && setData(d))
      .catch(() => live && setData({ available: false }))
      .finally(() => live && setLoading(false))
    return () => {
      live = false
    }
  }, [zip])

  const cards = [
    { label: 'Median price', value: money(data?.medianPrice), icon: DollarSign },
    { label: 'Median rent', value: data?.medianRent != null ? money(data.medianRent) + '/mo' : '—', icon: Banknote },
    { label: 'Median $/sqft', value: money(data?.medianPricePerSqft), icon: Ruler },
    { label: 'Days on market', value: data?.medianDaysOnMarket ?? '—', icon: Clock },
    { label: 'Active listings', value: data?.totalListings ?? '—', icon: Home },
  ]

  return (
    <div>
      <label className="block max-w-md">
        <span className="mb-1.5 block text-sm font-semibold text-slate-700">Pick a market</span>
        <select
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-navy-950 outline-none transition focus:border-brand-400"
        >
          {MARKETS.map((m) => (
            <option key={m.zip} value={m.zip}>
              {m.label}
            </option>
          ))}
        </select>
      </label>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {cards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
            <Icon className="h-5 w-5 text-brand-500" />
            <p className="mt-3 font-display text-2xl text-navy-950">{loading ? '…' : value}</p>
            <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
          </div>
        ))}
      </div>

      {!loading && !data?.available && (
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
          Live market data is being connected. Want current numbers for this market today?{' '}
          <Link href="#get-deals" className="font-semibold text-brand-500 underline underline-offset-2">
            Ask us
          </Link>{' '}
          and we&rsquo;ll pull a full report.
        </p>
      )}
      {!loading && data?.available && (
        <p className="mt-3 text-xs text-slate-400">For-sale &amp; rental market data via RentCast, ZIP {data.zip}.</p>
      )}
    </div>
  )
}
