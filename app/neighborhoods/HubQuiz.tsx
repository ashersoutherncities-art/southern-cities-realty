'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, RotateCcw } from 'lucide-react'
import { BY_SLUG } from './data'

export type HubQ = { q: string; a: { t: string; s: string[] }[] }

export function HubQuiz({ questions, hubName }: { questions: HubQ[]; hubName: string }) {
  const [qi, setQi] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [done, setDone] = useState(false)

  function pick(i: number) {
    const next = [...answers]
    next[qi] = i
    setAnswers(next)
    if (qi < questions.length - 1) setQi(qi + 1)
    else setDone(true)
  }
  function retake() {
    setQi(0)
    setAnswers([])
    setDone(false)
  }

  if (done) {
    const scores: Record<string, number> = {}
    answers.forEach((ai, i) => questions[i].a[ai]?.s.forEach((k) => (scores[k] = (scores[k] || 0) + 1)))
    const ranked = Object.keys(scores).sort((a, b) => scores[b] - scores[a])
    const top = BY_SLUG[ranked[0]]
    const runners = ranked.slice(1, 3).map((k) => BY_SLUG[k]).filter(Boolean)
    return (
      <div className="rounded-[26px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
        <p className="section-label">Your best match</p>
        <h3 className="mt-2 font-display text-4xl text-navy-950 md:text-5xl">{top?.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{top?.subtitle}</p>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">{top?.about}</p>
        {runners.length > 0 && (
          <p className="mt-4 text-sm text-slate-500">Also worth a look: {runners.map((r) => r.name).join(' · ')}</p>
        )}
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href={`/neighborhoods/${top?.slug}`} className="cta-primary">
            Explore {top?.name} <ArrowRight className="h-4 w-4" />
          </Link>
          <button onClick={retake} className="cta-ghost">
            <RotateCcw className="h-4 w-4" /> Retake
          </button>
        </div>
      </div>
    )
  }

  const q = questions[qi]
  return (
    <div className="rounded-[26px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
      <div className="flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${(qi / questions.length) * 100}%` }} />
        </div>
        <span className="text-xs font-medium text-slate-400">
          {qi + 1} / {questions.length}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl text-navy-950 md:text-3xl">{q.q}</h3>
      <div className="mt-6 grid gap-3">
        {q.a.map((o, i) => (
          <button
            key={i}
            onClick={() => pick(i)}
            className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left text-[15px] font-medium text-navy-950 transition hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50"
          >
            {o.t}
            <ArrowRight className="h-4 w-4 flex-none text-slate-300 transition group-hover:text-brand-500" />
          </button>
        ))}
      </div>
      {qi > 0 && (
        <button onClick={() => setQi(qi - 1)} className="mt-5 text-sm font-medium text-slate-500 hover:text-brand-500">
          ← Back
        </button>
      )}
    </div>
  )
}
