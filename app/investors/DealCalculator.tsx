'use client'

import { useState } from 'react'
import { Calculator } from 'lucide-react'

const money = (n: number) => '$' + Math.max(0, Math.round(n)).toLocaleString('en-US')

export function DealCalculator() {
  const [arv, setArv] = useState(300000)
  const [rehab, setRehab] = useState(50000)
  const [rule, setRule] = useState(70) // classic 70% rule
  const [selling, setSelling] = useState(8) // selling + closing costs, % of ARV

  const mao = arv * (rule / 100) - rehab
  const allIn = Math.max(0, mao) + rehab
  const sellingCost = arv * (selling / 100)
  const profit = arv - allIn - sellingCost

  const field = (label: string, value: number, set: (n: number) => void, prefix?: string, suffix?: string) => (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</span>
      <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-4 transition focus-within:border-brand-400">
        {prefix && <span className="text-slate-400">{prefix}</span>}
        <input
          type="number"
          value={Number.isFinite(value) ? value : ''}
          onChange={(e) => set(parseFloat(e.target.value) || 0)}
          className="w-full bg-transparent py-3 pl-1 text-navy-950 outline-none"
        />
        {suffix && <span className="text-slate-400">{suffix}</span>}
      </div>
    </label>
  )

  return (
    <div className="grid gap-6 rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-[1fr_1fr] md:p-9">
      <div>
        <div className="flex items-center gap-2 text-brand-500">
          <Calculator className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-[0.16em]">Deal calculator</span>
        </div>
        <h3 className="mt-3 font-display text-2xl text-navy-950">Run the numbers.</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Estimate your Maximum Allowable Offer with the classic 70% rule (adjust any input). A quick sanity
          check — not an appraisal or an offer.
        </p>
        <div className="mt-5 grid gap-4">
          {field('After-repair value (ARV)', arv, setArv, '$')}
          {field('Estimated rehab', rehab, setRehab, '$')}
          <div className="grid grid-cols-2 gap-4">
            {field('Rule %', rule, setRule, '', '%')}
            {field('Selling/closing %', selling, setSelling, '', '%')}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center rounded-2xl bg-navy-950 p-7 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">Your max offer (MAO)</p>
        <p className="mt-2 font-display text-5xl text-white">{money(mao)}</p>
        <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-white/60">All-in cost (offer + rehab)</span>
            <span className="font-semibold tabular-nums">{money(allIn)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/60">Est. selling &amp; closing costs</span>
            <span className="font-semibold tabular-nums">{money(sellingCost)}</span>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-brand-300">Projected profit</span>
            <span className={`font-display text-2xl ${profit >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>{money(profit)}</span>
          </div>
        </div>
        <p className="mt-5 text-[11px] leading-5 text-white/45">
          Estimate only. We&rsquo;ll verify ARV and rehab in person before you make an offer.
        </p>
      </div>
    </div>
  )
}
