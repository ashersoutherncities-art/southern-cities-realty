import Link from 'next/link'
import { ArrowRight, CalendarCheck, MapPin, Search } from 'lucide-react'
import type { Region } from '../regions'
import { areasInRegion, neighborhoodsByGroup } from '../data'
import { NeighborhoodCard } from '../NeighborhoodCard'
import { NeighborhoodQuiz } from '../NeighborhoodQuiz'
import { HubQuiz } from '../HubQuiz'
import { REGION_QUIZZES } from '../hub-quizzes'
import { PHOTO_CREDITS } from '../credits'

function Hero({ region }: { region: Region }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {region.image ? (
        <img src={region.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-[#0e1b3d]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/55" />
      <div className="page-shell relative py-16 md:py-24">
        <Link href="/neighborhoods" className="mb-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white">
          ← Areas we serve
        </Link>
        <p className="section-label text-brand-300">{region.tagline}</p>
        <h1 className="mt-3 max-w-4xl font-display text-5xl leading-[1.03] text-white md:text-6xl">{region.name}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">{region.blurb}</p>
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/60">
          <MapPin className="h-4 w-4 text-brand-300" /> {region.allCounties.length} counties served
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="/listings" className="cta-primary">
            <Search className="h-4 w-4" /> Search Homes
          </a>
          <Link href="/contact" className="cta-ghost border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
            <CalendarCheck className="h-4 w-4" /> Talk to a Broker
          </Link>
        </div>
      </div>
    </section>
  )
}

function ClosingCTA({ region }: { region: Region }) {
  return (
    <section className="bg-navy-950 py-16 text-white md:py-20">
      <div className="page-shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-white md:text-4xl">Looking in {region.short}?</h2>
          <p className="mt-3 text-white/70">
            We help buyers and sellers across all of North Carolina. Tell us what you&rsquo;re looking for and
            we&rsquo;ll get to work.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="cta-primary">
            <CalendarCheck className="h-4 w-4" /> Get Started
          </Link>
          <a href="/listings" className="cta-ghost border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
            Browse Homes <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function CountiesServed({ region }: { region: Region }) {
  return (
    <div className="page-shell pb-14 md:pb-16">
      <p className="max-w-4xl text-sm leading-7 text-slate-500">
        <span className="font-semibold text-navy-950">
          Serving all {region.allCounties.length} counties in {region.short}:
        </span>{' '}
        {region.allCounties.join(' · ')}.
      </p>
    </div>
  )
}

export function RegionView({ region }: { region: Region }) {
  // ---- DEEP (Charlotte): quiz + grouped neighborhood cards ----
  if (region.depth === 'deep') {
    const groups = neighborhoodsByGroup()
    return (
      <>
        <Hero region={region} />
        <section id="quiz" className="bg-cream-50 py-16 md:py-20">
          <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">🔍 Not sure where to start?</p>
              <h2 className="section-title mt-3">Take our Neighborhood Match Quiz.</h2>
              <p className="section-copy mt-4 max-w-lg">
                Answer a few quick questions and we&rsquo;ll recommend the Charlotte neighborhoods that fit your
                lifestyle. About a minute.
              </p>
            </div>
            <NeighborhoodQuiz />
          </div>
        </section>
        <div className="bg-white/70">
          {groups.map(({ group, items }) =>
            items.length === 0 ? null : (
              <section key={group} className="page-shell border-t border-slate-200/60 py-14 first:border-t-0 md:py-16">
                <div className="mb-8">
                  <h2 className="font-display text-3xl text-navy-950 md:text-4xl">{group}</h2>
                  <p className="mt-2 text-sm text-slate-500">{items.length} areas</p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                  {items.map((n) => (
                    <NeighborhoodCard key={n.slug} n={n} />
                  ))}
                </div>
              </section>
            ),
          )}
        </div>
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
        <CountiesServed region={region} />
        <ClosingCTA region={region} />
      </>
    )
  }

  // ---- CITIES (Triangle / Triad): grid of city pages ----
  if (region.depth === 'cities') {
    const areas = areasInRegion(region.slug)
    return (
      <>
        <Hero region={region} />
        <section className="bg-cream-50 py-16 md:py-20">
          <div className="page-shell">
            <p className="section-label">Cities & Towns</p>
            <h2 className="section-title mt-3">Where we work in {region.short}.</h2>
            <p className="section-copy mt-4 max-w-2xl">
              Explore each city&rsquo;s guide — overview, current market snapshot, and schools. More neighborhood-level
              detail is on the way.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
              {areas.map((n) => (
                <NeighborhoodCard key={n.slug} n={n} />
              ))}
            </div>
          </div>
        </section>
        {REGION_QUIZZES[region.slug] && (
          <section className="bg-white/70 py-16 md:py-20">
            <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">🔍 Not sure where to start?</p>
                <h2 className="section-title mt-3">Find your spot in {region.short}.</h2>
                <p className="section-copy mt-4 max-w-lg">
                  Answer a few quick questions and we&rsquo;ll point you to the {region.short} town that best fits
                  your lifestyle.
                </p>
              </div>
              <HubQuiz questions={REGION_QUIZZES[region.slug]} hubName={region.short} />
            </div>
          </section>
        )}
        <CountiesServed region={region} />
        <ClosingCTA region={region} />
      </>
    )
  }

  // ---- LANDING (Asheville, Coast, Eastern, Sandhills, OBX) ----
  const towns = region.towns || []
  return (
    <>
      <Hero region={region} />
      <section className="bg-cream-50 py-16 md:py-20">
        <div className="page-shell">
          <p className="section-label">Towns We Serve</p>
          <h2 className="section-title mt-3">Buying or selling in {region.short}?</h2>
          <p className="section-copy mt-4 max-w-2xl">
            We represent buyers and sellers across {region.short}. Detailed town guides are coming — for now, reach
            out and we&rsquo;ll put local expertise to work for your move.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {towns.map((t) => (
              <div key={t} className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                <MapPin className="h-4 w-4 flex-none text-brand-500" />
                <span className="font-display text-lg text-navy-950">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="cta-primary">
              <CalendarCheck className="h-4 w-4" /> Ask About {region.short}
            </Link>
            <a href="/listings" className="cta-ghost">
              <Search className="h-4 w-4" /> Search Homes
            </a>
          </div>
        </div>
      </section>
      <CountiesServed region={region} />
      <ClosingCTA region={region} />
    </>
  )
}
