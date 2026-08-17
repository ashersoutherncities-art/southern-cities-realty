import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Compass, MapPin, Search } from 'lucide-react'
import { REGIONS } from './regions'

const HERO =
  'https://images.pexels.com/photos/20018783/pexels-photo-20018783.jpeg?auto=compress&cs=tinysrgb&w=2000'

export const metadata: Metadata = {
  title: 'Areas We Serve | North Carolina Real Estate',
  description:
    'Southern Cities Realty serves buyers and sellers across all of North Carolina — Charlotte, the Triangle (Raleigh–Durham), the Triad, Asheville & the mountains, Wilmington & the coast, the Sandhills, Eastern NC, and the Outer Banks.',
  alternates: { canonical: '/neighborhoods' },
}

function RegionCard({ region }: { region: (typeof REGIONS)[number] }) {
  return (
    <Link
      href={`/neighborhoods/${region.slug}`}
      className="group relative block aspect-[16/11] overflow-hidden rounded-[22px] border border-slate-200/70 bg-navy-950 shadow-[0_12px_34px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_64px_rgba(15,23,42,0.22)]"
    >
      {region.image ? (
        <img
          src={region.image}
          alt={region.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-[#0e1b3d]">
          <MapPin className="absolute right-5 top-5 h-6 w-6 text-brand-400/70" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/92 via-navy-950/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">{region.tagline}</p>
        <h3 className="mt-1 font-display text-2xl leading-tight text-white">{region.short}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-white/65">
          {region.counties}
        </p>
      </div>
      <span className="absolute right-5 bottom-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/0 text-white/0 transition group-hover:bg-brand-500 group-hover:text-white">
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}

export default function AreasWeServePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-28">
        <img src={HERO} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/55" />
        <div className="page-shell relative max-w-3xl">
          <p className="section-label text-brand-300">Areas We Serve</p>
          <h1 className="mt-3 font-display text-5xl leading-[1.02] text-white md:text-6xl">
            We cover all of North Carolina.
          </h1>
          <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
            Based in Charlotte, working statewide. Choose a region to explore local guides, current market data, and
            the towns we serve — from the mountains to the coast.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/neighborhoods/charlotte#quiz" className="cta-primary">
              <Compass className="h-4 w-4" /> Neighborhood Match Quiz
            </Link>
            <a href="/listings" className="cta-ghost border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Search className="h-4 w-4" /> Search Homes
            </a>
          </div>
        </div>
      </section>

      {/* REGION GRID */}
      <section className="bg-cream-50 py-16 md:py-20">
        <div className="page-shell">
          <p className="section-label">Explore by region</p>
          <h2 className="section-title mt-3">Find your part of North Carolina.</h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((region) => (
              <RegionCard key={region.slug} region={region} />
            ))}
          </div>
        </div>
      </section>

      {/* EVERY COUNTY */}
      <section className="border-t border-slate-200/60 bg-cream-50 py-16 md:py-20">
        <div className="page-shell">
          <p className="section-label">Statewide coverage</p>
          <h2 className="section-title mt-3">Every county in North Carolina.</h2>
          <p className="section-copy mt-4 max-w-2xl">
            All 100 NC counties, grouped by region. Wherever you&rsquo;re buying or selling in the state, we can help.
            Tap a region to explore it.
          </p>
          <div className="mt-9 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((region) => (
              <div key={region.slug}>
                <Link href={`/neighborhoods/${region.slug}`} className="group inline-flex items-baseline gap-2">
                  <h3 className="font-display text-xl text-navy-950 transition group-hover:text-brand-500">
                    {region.short}
                  </h3>
                  <span className="text-xs font-semibold text-slate-400">{region.allCounties.length} counties</span>
                </Link>
                <p className="mt-2 text-sm leading-7 text-slate-600">{region.allCounties.join(' \u00b7 ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/70 py-16 md:py-20">
        <div className="page-shell flex flex-col items-start gap-6 rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-2xl">
            <p className="section-label">Don&rsquo;t see your town?</p>
            <h2 className="section-title mt-3">If it&rsquo;s in North Carolina, we can help.</h2>
            <p className="section-copy mt-4">Tell us where you&rsquo;re headed and we&rsquo;ll put local expertise to work.</p>
          </div>
          <Link href="/contact" className="cta-primary whitespace-nowrap">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
