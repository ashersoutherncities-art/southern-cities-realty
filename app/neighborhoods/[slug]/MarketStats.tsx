'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Banknote, Clock, DollarSign, Home, Ruler, TrendingUp } from 'lucide-react'

type Stats = {
  available: boolean
  medianPrice?: number | null
  medianPricePerSqft?: number | null
  medianDaysOnMarket?: number | null
  totalListings?: number | null
  medianRent?: number | null
  lastUpdated?: string | null
}

const money = (n?: number | null) =>
  n == null ? '—' : '$' + Math.round(n).toLocaleString('en-US')

export function MarketStats({ zip, name }: { zip: string; name: string }) {
  const [data, setData] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let live = true
    fetch(`/api/market-stats?zip=${zip}`)
      .then((r) => r.json())
      .then((d) => live && setData(d))
      .catch(() => live && setData({ available: false }))
      .finally(() => live && setLoading(false))
    return () => {
      live = false
    }
  }, [zip])

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-28 animate-pulse rounded-2xl border border-slate-200 bg-slate-100/70" />
        ))}
      </div>
    )
  }

  if (!data?.available) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <p className="text-[15px] leading-7 text-slate-600">
          We&rsquo;re connecting live {name} market data (median price, price per square foot, days on
          market, and active listings). Want today&rsquo;s numbers for {name}?{' '}
          <Link href="/contact" className="font-semibold text-brand-500 underline underline-offset-2">
            Ask a local broker
          </Link>{' '}
          and we&rsquo;ll pull a current market report.
        </p>
      </div>
    )
  }

  const cards = [
    { label: 'Median list price', value: money(data.medianPrice), icon: DollarSign },
    { label: 'Median rent', value: data.medianRent != null ? money(data.medianRent) + '/mo' : '—', icon: Banknote },
    { label: 'Median $ / sq ft', value: money(data.medianPricePerSqft), icon: Ruler },
    { label: 'Median days on market', value: data.medianDaysOnMarket ?? '—', icon: Clock },
    { label: 'Active listings', value: data.totalListings ?? '—', icon: Home },
  ]

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {cards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
            <Icon className="h-5 w-5 text-brand-500" />
            <p className="mt-3 font-display text-2xl text-navy-950">{value}</p>
            <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
        <TrendingUp className="h-3.5 w-3.5" /> For-sale market data via RentCast, ZIP {zip}
        {data.lastUpdated ? ` · updated ${new Date(data.lastUpdated).toLocaleDateString('en-US')}` : ''}
      </p>
    </div>
  )
}
