'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, RotateCcw, Sparkles, Check, MapPin, Compass } from 'lucide-react'
import { BY_SLUG, type Neighborhood } from './data'

/**
 * Neighborhood Match Quiz
 * - `img` answers render as photo tiles; answers with `icon` render as icon rows.
 * - `s` = neighborhood slugs that answer points toward (scoring).
 */
type Answer = { t: string; sub?: string; img?: string; icon?: string; s: string[] }
type Q = { q: string; hint?: string; layout: 'photo' | 'list'; a: Answer[] }

const QUIZ: Q[] = [
  {
    q: 'Which scene feels most like home?',
    hint: 'Go with your gut.',
    layout: 'photo',
    a: [
      { t: 'Buzzing & walkable', sub: 'Patios, nightlife, energy', img: '/neighborhoods/south-end.jpg', s: ['plaza-midwood', 'noda', 'uptown', 'south-end'] },
      { t: 'Calm & green', sub: 'Space to breathe', img: '/neighborhoods/weddington.jpg', s: ['ballantyne', 'matthews', 'myers-park', 'weddington'] },
      { t: 'Historic & charming', sub: 'Tree-lined, front porches', img: '/neighborhoods/dilworth.jpg', s: ['dilworth', 'elizabeth', 'davidson', 'myers-park'] },
      { t: 'Lake & open water', sub: 'Boats and big skies', img: '/neighborhoods/cornelius.jpg', s: ['cornelius', 'davidson', 'mooresville'] },
    ],
  },
  {
    q: 'Your ideal lot?',
    layout: 'list',
    a: [
      { t: 'Low-maintenance — lock up and go', icon: '✨', s: ['uptown', 'south-end', 'noda', 'loso', 'southpark'] },
      { t: 'A classic yard in a real neighborhood', icon: '🏡', s: ['dilworth', 'matthews', 'cotswold', 'myers-park', 'huntersville'] },
      { t: 'Space and acreage, room between homes', icon: '🌳', s: ['weddington', 'marvin', 'waxhaw', 'mint-hill', 'harrisburg'] },
    ],
  },
  {
    q: 'Your perfect weekend?',
    layout: 'photo',
    a: [
      { t: 'Live music, art & food', img: '/neighborhoods/quiz/wknd-music.jpg', s: ['noda', 'plaza-midwood', 'south-end'] },
      { t: 'On the water or outdoors', img: '/neighborhoods/quiz/wknd-water.jpg', s: ['cornelius', 'davidson', 'mooresville', 'steele-creek'] },
      { t: 'Shopping & dining out', img: '/neighborhoods/quiz/wknd-shopping.jpg', s: ['southpark', 'uptown', 'cotswold', 'pineville'] },
      { t: 'Strolling historic streets', img: '/neighborhoods/quiz/wknd-historic.jpg', s: ['dilworth', 'myers-park', 'elizabeth', 'davidson'] },
    ],
  },
  {
    q: "What's the priority for daily life?",
    layout: 'list',
    a: [
      { t: 'Walk to coffee, work and nightlife', icon: '☕', s: ['south-end', 'uptown', 'plaza-midwood', 'noda', 'dilworth'] },
      { t: 'Peace, quiet and privacy', icon: '🌿', s: ['weddington', 'mint-hill', 'harrisburg', 'indian-trail', 'waxhaw'] },
      { t: 'Shopping, dining and convenience', icon: '🛍️', s: ['southpark', 'cotswold', 'pineville', 'ballantyne'] },
      { t: 'A walkable, small-town center', icon: '🏘️', s: ['davidson', 'matthews', 'waxhaw', 'huntersville'] },
    ],
  },
  {
    q: 'How close do you want to be to Uptown?',
    layout: 'list',
    a: [
      { t: 'Walking distance or a quick hop', icon: '🚶', s: ['uptown', 'dilworth', 'plaza-midwood', 'noda', 'south-end', 'elizabeth'] },
      { t: 'A short, easy drive', icon: '🚗', s: ['southpark', 'ballantyne', 'matthews', 'cotswold', 'pineville'] },
      { t: 'Happy to drive for the right home', icon: '🛣️', s: ['cornelius', 'davidson', 'waxhaw', 'weddington', 'indian-trail', 'concord'] },
    ],
  },
  {
    q: 'Which home speaks to you?',
    layout: 'photo',
    a: [
      { t: 'Historic charm & character', img: '/neighborhoods/quiz/home-historic.jpg', s: ['dilworth', 'myers-park', 'plaza-midwood', 'elizabeth', 'davidson'] },
      { t: 'New & modern', img: '/neighborhoods/quiz/home-modern.jpg', s: ['ballantyne', 'university', 'indian-trail', 'harrisburg'] },
      { t: 'Upscale & polished', img: '/neighborhoods/quiz/home-upscale.jpg', s: ['southpark', 'myers-park', 'weddington', 'marvin'] },
      { t: 'Eclectic & one-of-a-kind', img: '/neighborhoods/quiz/home-eclectic.jpg', s: ['noda', 'plaza-midwood', 'loso'] },
    ],
  },
  {
    q: "What's your commute like?",
    layout: 'list',
    a: [
      { t: 'I work from home most days', icon: '💻', s: ['davidson', 'waxhaw', 'weddington', 'mooresville', 'matthews'] },
      { t: 'A quick trip into Uptown', icon: '🚊', s: ['south-end', 'dilworth', 'noda', 'plaza-midwood', 'elizabeth'] },
      { t: 'Out to the office parks and suburbs', icon: '🏢', s: ['ballantyne', 'university', 'concord', 'harrisburg', 'huntersville'] },
    ],
  },
  {
    q: 'Your ideal way to get outside?',
    layout: 'list',
    a: [
      { t: 'Greenways, trails and parks', icon: '🌳', s: ['davidson', 'matthews', 'huntersville', 'mint-hill', 'ballantyne', 'dilworth'] },
      { t: 'A big backyard and a porch', icon: '🏡', s: ['weddington', 'marvin', 'waxhaw', 'harrisburg', 'indian-trail'] },
      { t: 'Sidewalk cafes and city parks', icon: '🏙️', s: ['uptown', 'south-end', 'plaza-midwood', 'noda', 'elizabeth'] },
      { t: 'Golf, clubs and open space', icon: '⛳', s: ['ballantyne', 'weddington', 'marvin', 'cotswold'] },
    ],
  },
]

const CARD =
  'rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 md:p-10'

export function NeighborhoodQuiz() {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'done'>('intro')
  const [qi, setQi] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [picked, setPicked] = useState<number | null>(null)

  function pick(i: number) {
    if (picked !== null) return
    setPicked(i)
    const next = [...answers]
    next[qi] = i
    // brief highlight before advancing, for a satisfying tap
    setTimeout(() => {
      setAnswers(next)
      setPicked(null)
      if (qi < QUIZ.length - 1) setQi(qi + 1)
      else setPhase('done')
    }, 260)
  }
  function back() {
    if (qi === 0) return
    setPicked(null)
    setQi(qi - 1)
  }
  function restart() {
    setQi(0)
    setAnswers([])
    setPicked(null)
    setPhase('intro')
  }

  /* ---------- INTRO ---------- */
  if (phase === 'intro') {
    return (
      <div className={CARD}>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-500">
          <Compass className="h-3.5 w-3.5" /> 8 quick questions
        </span>
        <h3 className="mt-5 font-display text-3xl leading-tight text-navy-950 md:text-4xl">
          Find your Charlotte neighborhood.
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-7 text-slate-600">
          Tap through a few scenes and lifestyle questions and we&rsquo;ll match you with the areas that fit best
          — complete with photos and local guides. Takes about a minute.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button onClick={() => setPhase('quiz')} className="cta-primary">
            Start the quiz <ArrowRight className="h-4 w-4" />
          </button>
          <span className="text-sm text-slate-400">No sign-up needed</span>
        </div>
      </div>
    )
  }

  /* ---------- RESULT ---------- */
  if (phase === 'done') {
    const scores: Record<string, number> = {}
    answers.forEach((ai, i) => QUIZ[i].a[ai]?.s.forEach((k) => (scores[k] = (scores[k] || 0) + 1)))
    const ranked = Object.keys(scores).sort((a, b) => scores[b] - scores[a])
    const top = BY_SLUG[ranked[0]]
    const topScore = scores[ranked[0]] || 1
    const runners = ranked.slice(1, 4).map((k) => BY_SLUG[k]).filter(Boolean) as Neighborhood[]
    const matchPct = Math.min(98, Math.round(60 + 38 * (topScore / QUIZ.length)))

    if (!top) {
      return (
        <div className={CARD}>
          <h3 className="font-display text-2xl text-navy-950">Let&rsquo;s try that again.</h3>
          <button onClick={restart} className="cta-ghost mt-5">
            <RotateCcw className="h-4 w-4" /> Retake quiz
          </button>
        </div>
      )
    }

    return (
      <div className={`${CARD} quiz-fade`}>
        <p className="section-label">Your best match</p>

        {/* Hero match card */}
        <Link
          href={`/neighborhoods/${top.slug}`}
          className="group mt-3 block overflow-hidden rounded-3xl border border-slate-200 bg-navy-950"
        >
          <div className="relative aspect-[16/9]">
            {top.image ? (
              <img src={top.image} alt={top.name} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-[#0e1b3d]" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/25 to-transparent" />
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
              <Sparkles className="h-3.5 w-3.5" /> {matchPct}% match
            </span>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-3xl leading-none text-white md:text-4xl">{top.name}</h3>
              <p className="mt-1 text-sm font-medium text-white/75">{top.subtitle}</p>
            </div>
          </div>
        </Link>

        <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">{top.about}</p>

        {/* Runner-ups as photo cards */}
        {runners.length > 0 && (
          <>
            <p className="mt-7 text-sm font-semibold text-navy-950">You&rsquo;d also love</p>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {runners.map((r) => (
                <Link key={r.slug} href={`/neighborhoods/${r.slug}`} className="group relative block aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-navy-950">
                  {r.image ? (
                    <img src={r.image} alt={r.name} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.08]" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-[#0e1b3d]">
                      <MapPin className="absolute right-2 top-2 h-4 w-4 text-brand-400/70" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-2.5 text-center font-display text-sm leading-tight text-white">{r.name}</span>
                </Link>
              ))}
            </div>
          </>
        )}

        <div className="mt-7 flex flex-wrap gap-3">
          <Link href={`/neighborhoods/${top.slug}`} className="cta-primary">
            Explore {top.name} <ArrowRight className="h-4 w-4" />
          </Link>
          <button onClick={restart} className="cta-ghost">
            <RotateCcw className="h-4 w-4" /> Retake quiz
          </button>
        </div>
      </div>
    )
  }

  /* ---------- QUESTION ---------- */
  const q = QUIZ[qi]
  return (
    <div className={CARD}>
      {/* Segmented progress */}
      <div className="flex items-center gap-3">
        <div className="flex flex-1 gap-1.5">
          {QUIZ.map((_, i) => (
            <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-brand-500 transition-all duration-500"
                style={{ width: i < qi ? '100%' : i === qi ? '50%' : '0%' }}
              />
            </div>
          ))}
        </div>
        <span className="text-xs font-medium tabular-nums text-slate-400">
          {qi + 1} / {QUIZ.length}
        </span>
      </div>

      <div key={qi} className="quiz-fade">
        <h3 className="mt-6 font-display text-2xl text-navy-950 md:text-[28px]">{q.q}</h3>
        {q.hint && <p className="mt-1 text-sm text-slate-400">{q.hint}</p>}

        {q.layout === 'photo' ? (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {q.a.map((o, i) => {
              const on = picked === i
              return (
                <button
                  key={i}
                  onClick={() => pick(i)}
                  className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 text-left transition duration-200 ${
                    on ? 'border-brand-500 ring-2 ring-brand-500/30' : 'border-transparent hover:-translate-y-1'
                  }`}
                >
                  <img src={o.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.08]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                  {on && (
                    <span className="absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white shadow">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="font-display text-[15px] leading-tight text-white">{o.t}</p>
                    {o.sub && <p className="mt-0.5 text-[11px] font-medium text-white/70">{o.sub}</p>}
                  </div>
                </button>
              )
            })}
          </div>
        ) : (
          <div className="mt-6 grid gap-3">
            {q.a.map((o, i) => {
              const on = picked === i
              return (
                <button
                  key={i}
                  onClick={() => pick(i)}
                  className={`group flex items-center gap-3 rounded-2xl border px-4 py-4 text-left text-[15px] font-medium text-navy-950 transition duration-200 ${
                    on
                      ? 'border-brand-500 bg-brand-50 ring-2 ring-brand-500/25'
                      : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50'
                  }`}
                >
                  {o.icon && (
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-cream-50 text-xl transition group-hover:bg-white">
                      {o.icon}
                    </span>
                  )}
                  <span className="flex-1">{o.t}</span>
                  {on ? (
                    <Check className="h-4 w-4 flex-none text-brand-500" />
                  ) : (
                    <ArrowRight className="h-4 w-4 flex-none text-slate-300 transition group-hover:text-brand-500" />
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {qi > 0 && (
        <button onClick={back} className="mt-5 text-sm font-medium text-slate-500 transition hover:text-brand-500">
          ← Back
        </button>
      )}
    </div>
  )
}
