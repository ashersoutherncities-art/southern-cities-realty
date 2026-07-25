import type { Metadata } from 'next'
import { Search } from 'lucide-react'
import { neighborhoodsByGroup } from './data'
import { NeighborhoodCard } from './NeighborhoodCard'
import { NeighborhoodQuiz } from './NeighborhoodQuiz'
import { PHOTO_CREDITS } from './credits'

const HERO =
  'https://images.pexels.com/photos/20018783/pexels-photo-20018783.jpeg?auto=compress&cs=tinysrgb&w=2000'

export const metadata: Metadata = {
  title: 'Areas We Serve | Charlotte Neighborhood Guides',
  description:
    'Explore Charlotte neighborhood guides from Southern Cities Realty — Uptown, South End, Dilworth, Myers Park, Ballantyne, Lake Norman towns, Union County and more. Find the right area to call home.',
  alternates: { canonical: '/neighborhoods' },
}

export default function AreasWeServePage() {
  const groups = neighborhoodsByGroup()
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-28">
        <img src={HERO} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/55" />
        <div className="page-shell relative max-w-3xl">
          <p className="section-label text-brand-300">Areas We Serve</p>
          <h1 className="mt-3 font-display text-5xl leading-[1.02] text-white md:text-6xl">
            Explore Charlotte&rsquo;s best neighborhoods.
          </h1>
          <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
            Whether you&rsquo;re looking for walkable city living, top-rated schools, luxury homes, or quiet
            suburbs, browse our local neighborhood guides to find the perfect place to call home.
          </p>
        </div>
      </section>

      {/* QUIZ CTA + QUIZ */}
      <section id="quiz" className="bg-cream-50 py-16 md:py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">🔍 Not sure where to start?</p>
            <h2 className="section-title mt-3">Take our Neighborhood Match Quiz.</h2>
            <p className="section-copy mt-4 max-w-lg">
              Answer a few quick questions and we&rsquo;ll recommend the Charlotte neighborhoods that fit your
              lifestyle, budget, and pace. It takes about a minute.
            </p>
          </div>
          <NeighborhoodQuiz />
        </div>
      </section>

      {/* GROUPED NEIGHBORHOODS */}
      <div className="bg-white/70">
        {groups.map(({ group, items }) => (
          <section key={group} className="page-shell border-t border-slate-200/60 py-14 first:border-t-0 md:py-16">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl text-navy-950 md:text-4xl">{group}</h2>
                <p className="mt-2 text-sm text-slate-500">{items.length} areas</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
              {items.map((n) => (
                <NeighborhoodCard key={n.slug} n={n} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-cream-50 py-16 md:py-20">
        <div className="page-shell flex flex-col items-start gap-6 rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-2xl">
            <p className="section-label">Don&rsquo;t see your area?</p>
            <h2 className="section-title mt-3">We cover buyers and sellers across North Carolina.</h2>
            <p className="section-copy mt-4">Tell us where you&rsquo;re headed and we&rsquo;ll help you find the right fit.</p>
          </div>
          <a href="/listings" className="cta-primary whitespace-nowrap">
            <Search className="h-4 w-4" /> Search Homes
          </a>
        </div>
      </section>

      {/* PHOTO CREDITS */}
      <section className="border-t border-slate-200/60 bg-white/70 py-8">
        <div className="page-shell">
          <details className="text-xs text-slate-400">
            <summary className="cursor-pointer font-medium text-slate-500">Neighborhood photo credits</summary>
            <p className="mt-3 leading-6">
              {PHOTO_CREDITS.map((c, i) => (
                <span key={c.source}>
                  {i > 0 ? ' · ' : ''}
                  <a href={c.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-brand-500">
                    {c.name}
                  </a>{' '}
                  ({c.creator}, {c.license})
                </span>
              ))}
            </p>
          </details>
        </div>
      </section>
    </>
  )
}
