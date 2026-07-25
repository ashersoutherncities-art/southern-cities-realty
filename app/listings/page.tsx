import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, RefreshCw } from 'lucide-react'

const CHARLOTTE =
  'https://images.pexels.com/photos/19205520/pexels-photo-19205520.jpeg?auto=compress&cs=tinysrgb&w=2000'

// Canopy MLS Matrix public IDX (Map Search) for Southern Cities Realty.
const IDX_SRC = 'https://matrix.canopymls.com/Matrix/public/IDX.aspx?idx=90da343b'

export const metadata: Metadata = {
  title: 'Homes for Sale',
  description:
    'Browse every active home for sale across Charlotte and North Carolina on the live Canopy MLS map. Real-time listings from Southern Cities Realty.',
}

export default function ListingsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-white md:py-20">
        <img
          src={CHARLOTTE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/55" />
        <div className="page-shell relative">
          <div className="max-w-3xl">
            <p className="section-label text-brand-300">Buy a Home</p>
            <h1 className="mt-3 font-display text-5xl leading-[1.02] text-white md:text-6xl">
              Find your home in Charlotte.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
              Browse every active home across Charlotte and North Carolina on the live map. Pick a
              category to start, then filter by price, beds, type, and area — new listings appear
              automatically.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-white/60">
            <span className="inline-flex items-center gap-2">
              <RefreshCw className="h-3.5 w-3.5 text-brand-300" />
              Live MLS data
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-brand-300" />
              Map search — pan, zoom, and filter
            </span>
            <span>Listings provided by Canopy MLS</span>
          </div>
        </div>
      </section>

      {/* LIVE MAP SEARCH */}
      <section className="bg-cream-50 pb-6 pt-8 md:pt-10">
        <div className="mx-auto max-w-[1500px] px-0 sm:px-4 lg:px-6">
          <div className="overflow-hidden border-x border-slate-200/70 bg-white sm:rounded-[24px] sm:border-x-0 sm:shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <iframe
              src={IDX_SRC}
              title="Search homes for sale — Canopy MLS map search"
              className="block w-full border-0"
              style={{ height: 'calc(100vh - 96px)', minHeight: '900px' }}
              loading="lazy"
              allow="fullscreen"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="page-shell mt-3 text-xs leading-6 text-slate-500">
            Listings provided by Canopy MLS via Internet Data Exchange (IDX). Information is deemed
            reliable but not guaranteed and should be independently verified.
          </p>
        </div>
      </section>

      {/* PERSONALIZED SEARCH CTA */}
      <section className="bg-white/70 py-16 md:py-20">
        <div className="page-shell flex flex-col gap-6 rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Prefer we do the searching?</p>
            <h2 className="section-title mt-3">Request a personalized home search.</h2>
            <p className="section-copy mt-5">
              Send us your must-haves, budget, and timing. We’ll build a shortlist that actually fits,
              and set up saved MLS alerts so you never miss a new listing.
            </p>
          </div>
          <Link href="/contact" className="cta-primary whitespace-nowrap">
            Request My Search <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
