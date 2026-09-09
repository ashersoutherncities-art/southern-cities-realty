'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, HandCoins } from 'lucide-react'

const inputCls =
  'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-navy-950 outline-none transition focus:border-brand-400'

export function InvestorForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      market: String(fd.get('market') || ''),
      budget: String(fd.get('budget') || ''),
      strategy: String(fd.get('strategy') || ''),
      message: String(fd.get('message') || ''),
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/investor-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setStatus(data?.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-[26px] border border-emerald-200 bg-emerald-50 p-8 md:p-10">
        <CheckCircle2 className="h-9 w-9 text-emerald-600" />
        <h3 className="mt-4 font-display text-2xl text-emerald-900">You&rsquo;re on the list.</h3>
        <p className="mt-2 text-sm leading-7 text-emerald-800">
          Thanks — we&rsquo;ve got your buy box. We&rsquo;ll start sending matching distressed and value-add deals,
          usually within a day. For anything urgent, call (980) 944-8961.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-9">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Name</span>
          <input name="name" type="text" required placeholder="Your full name" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Email</span>
          <input name="email" type="email" required placeholder="you@email.com" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Target market / areas</span>
          <input name="market" type="text" placeholder="Charlotte, Triangle, statewide…" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Budget</span>
          <select name="budget" className={inputCls} defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>Under $150K</option>
            <option>$150K–$300K</option>
            <option>$300K–$500K</option>
            <option>$500K+</option>
            <option>All cash / flexible</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Strategy</span>
          <select name="strategy" className={inputCls} defaultValue="">
            <option value="" disabled>Select a strategy</option>
            <option>Fix &amp; Flip</option>
            <option>BRRRR</option>
            <option>Buy &amp; Hold / Rental</option>
            <option>Wholesale</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-semibold text-slate-700">Anything else?</span>
        <textarea name="message" rows={3} placeholder="Deal criteria, timeline, questions…" className={inputCls} />
      </label>

      <p className="mt-4 text-xs leading-6 text-slate-500">
        Prefer to talk or text? Use the chat on any page of this site. By sending this message you
        agree to our{' '}
        <a href="/privacy" className="font-semibold text-brand-500 hover:underline">Privacy Policy</a>
        {' '}and{' '}
        <a href="/terms" className="font-semibold text-brand-500 hover:underline">Terms of Service</a>.
      </p>

      {status === 'error' && (
        <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          Something went wrong. Please call (980) 944-8961 or email admin@southerncitiesrealty.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="cta-primary mt-6 w-full justify-center disabled:opacity-60"
      >
        <HandCoins className="h-4 w-4" />
        {status === 'sending' ? 'Sending…' : 'Get Investor Deals'}
      </button>
    </form>
  )
}
