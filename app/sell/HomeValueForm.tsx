'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, Home, Loader2, PhoneCall } from 'lucide-react'

type Estimate = {
  value: number
  low: number
  high: number
  confidence: 'high' | 'moderate' | 'low'
  sources: string[]
}

type LeadStatus = 'idle' | 'sending' | 'done' | 'error'

const money = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

export function HomeValueForm() {
  const [address, setAddress] = useState('')
  const [stage, setStage] = useState<'address' | 'loading' | 'result' | 'no-estimate'>('address')
  const [estimate, setEstimate] = useState<Estimate | null>(null)
  const [leadStatus, setLeadStatus] = useState<LeadStatus>('idle')

  async function handleAddressSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!address.trim()) return
    setStage('loading')
    try {
      const res = await fetch(`/api/home-value?address=${encodeURIComponent(address.trim())}`)
      const data = await res.json()
      if (data?.estimate) {
        setEstimate(data.estimate)
        setStage('result')
      } else {
        setStage('no-estimate')
      }
    } catch {
      setStage('no-estimate')
    }
  }

  async function handleLeadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      address,
      smsConsent: fd.get('smsConsent') === 'on',
    }
    setLeadStatus('sending')
    try {
      const res = await fetch('/api/home-value', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setLeadStatus(data?.ok ? 'done' : 'error')
    } catch {
      setLeadStatus('error')
    }
  }

  if (leadStatus === 'done') {
    return (
      <div className="rounded-[26px] border border-emerald-200 bg-emerald-50 p-8 md:p-10">
        <CheckCircle2 className="h-9 w-9 text-emerald-600" />
        <h3 className="mt-4 font-display text-2xl text-emerald-900">We&rsquo;ve got it.</h3>
        <p className="mt-2 text-sm leading-7 text-emerald-800">
          A broker will follow up with a full CMA on {address || 'your home'} — usually the same day.
          For anything urgent, call (980) 944-8961.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-9">
      {stage === 'address' || stage === 'loading' ? (
        <form onSubmit={handleAddressSubmit}>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-slate-700">Property address</span>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              required
              placeholder="123 Main St, Charlotte, NC 28202"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-navy-950 outline-none transition focus:border-brand-400"
            />
          </label>
          <button
            type="submit"
            disabled={stage === 'loading'}
            className="cta-primary mt-5 w-full justify-center disabled:opacity-60"
          >
            {stage === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Checking comps…
              </>
            ) : (
              <>
                <Home className="h-4 w-4" /> Get My Free Estimate
              </>
            )}
          </button>
          <p className="mt-4 text-xs leading-6 text-slate-500">
            Instant estimate from live market data. Not an appraisal — for an exact number, get a free
            CMA from a licensed broker.
          </p>
        </form>
      ) : stage === 'no-estimate' ? (
        <div>
          <p className="text-sm leading-7 text-slate-600">
            We couldn&rsquo;t pull an instant number for that address — it happens for rural parcels,
            new construction, or thin listing data. A broker can still get you a real number by hand.
            Leave your info and we&rsquo;ll follow up with a free CMA.
          </p>
          <button
            type="button"
            onClick={() => setStage('address')}
            className="mt-3 text-sm font-semibold text-brand-500 hover:underline"
          >
            Try a different address
          </button>
          <div className="mt-6 border-t border-slate-200 pt-6">
            <LeadFields onSubmit={handleLeadSubmit} status={leadStatus} />
          </div>
        </div>
      ) : (
        estimate && (
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-500">
              Estimated value
            </p>
            <p className="mt-2 font-display text-5xl text-navy-950">{money(estimate.value)}</p>
            <p className="mt-1 text-sm text-slate-500">
              Range {money(estimate.low)} – {money(estimate.high)} ·{' '}
              {estimate.confidence === 'high'
                ? 'Two independent models agree'
                : estimate.confidence === 'moderate'
                ? 'Based on available market data'
                : 'Rough estimate — limited data for this address'}
            </p>
            <button
              type="button"
              onClick={() => {
                setStage('address')
                setEstimate(null)
              }}
              className="mt-3 text-sm font-semibold text-brand-500 hover:underline"
            >
              Check another address
            </button>

            <div className="mt-6 rounded-2xl bg-navy-950 p-6 text-white">
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-300">
                <PhoneCall className="h-4 w-4" /> Want the real number?
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Algorithms miss what&rsquo;s inside the walls. Get a free, no-obligation CMA from a
                licensed broker backed by a licensed general contractor.
              </p>
              <div className="mt-5">
                <LeadFields onSubmit={handleLeadSubmit} status={leadStatus} dark />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

function LeadFields({
  onSubmit,
  status,
  dark,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  status: LeadStatus
  dark?: boolean
}) {
  const inputCls = dark
    ? 'w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-brand-300'
    : 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-navy-950 outline-none transition focus:border-brand-400'
  const labelCls = dark
    ? 'mb-1.5 block text-sm font-semibold text-white/85'
    : 'mb-1.5 block text-sm font-semibold text-slate-700'

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelCls}>Name</span>
          <input name="name" type="text" required placeholder="Your full name" className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Email</span>
          <input name="email" type="email" required placeholder="you@email.com" className={inputCls} />
        </label>
      </div>
      <label className="block">
        <span className={labelCls}>Phone (optional)</span>
        <input name="phone" type="tel" placeholder="(555) 555-5555" className={inputCls} />
      </label>
      <label className={`flex items-start gap-2 text-xs leading-5 ${dark ? 'text-white/70' : 'text-slate-500'}`}>
        <input name="smsConsent" type="checkbox" className="mt-0.5" />
        <span>
          It&rsquo;s OK to text me at the number above about my home&rsquo;s value (message and data
          rates may apply; reply STOP to opt out).
        </span>
      </label>
      {status === 'error' && (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          Something went wrong. Please call (980) 944-8961 or email admin@southerncitiesrealty.com.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="cta-primary w-full justify-center disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Get My Free CMA'}
      </button>
    </form>
  )
}
