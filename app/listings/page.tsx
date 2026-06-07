import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Bath,
  BedDouble,
  Heart,
  LayoutGrid,
  Map,
  Ruler,
  Search,
  SlidersHorizontal,
  TimerReset,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Listings',
  description:
    'Explore Southern Cities Realty listings across Charlotte, Lake Norman, Fort Mill, Concord, and the surrounding Carolinas. MLS-ready search, neighborhood collections, and curated featured homes.',
}

const collections = [
  { label: 'New Construction', count: '120+', accent: 'bg-amber-500/10 text-amber-700' },
  { label: 'Move-In Ready', count: '340+', accent: 'bg-emerald-500/10 text-emerald-700' },
  { label: 'Luxury $1M+', count: '60+', accent: 'bg-violet-500/10 text-violet-700' },
  { label: 'Waterfront', count: '45+', accent: 'bg-sky-500/10 text-sky-700' },
  { label: 'Family / School Zone', count: '210+', accent: 'bg-rose-500/10 text-rose-700' },
  { label: 'Investor-Aware SFR', count: '85+', accent: 'bg-orange-500/10 text-orange-700' },
]

const savedSearches = [
  'South Charlotte 4BR under $900k',
  'Fort Mill new construction with main-level guest suite',
  'Lake Norman waterfront under $1.5M',
]

const featuredCards = [
  {
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1400&q=80',
    title: 'South Charlotte',
    subtitle: 'Move-up family product · school-zone driven',
    price: '$825,000',
    beds: '4',
    baths: '3.5',
    sqft: '3,120',
    status: 'For Sale',
  },
  {
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80',
    title: 'Fort Mill, SC',
    subtitle: 'Newer single-family · main-level office',
    price: '$674,000',
    beds: '4',
    baths: '3',
    sqft: '2,780',
    status: 'For Sale',
  },
  {
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80',
    title: 'Lake Norman',
    subtitle: 'Waterfront lifestyle · main-channel views',
    price: '$1,180,000',
    beds: '5',
    baths: '4',
    sqft: '4,260',
    status: 'For Sale',
  },
  {
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1400&q=80',
    title: 'Concord',
    subtitle: 'Growth corridor · newer SFR product',
    price: '$489,000',
    beds: '3',
    baths: '2.5',
    sqft: '2,180',
    status: 'For Sale',
  },
  {
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80',
    title: 'Ballantyne',
    subtitle: 'Established corridor · turn-key residence',
    price: '$1,395,000',
    beds: '5',
    baths: '4.5',
    sqft: '4,520',
    status: 'New',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    title: 'Plaza Midwood',
    subtitle: 'In-town walkability · renovated kitchen',
    price: '$735,000',
    beds: '3',
    baths: '2',
    sqft: '2,090',
    status: 'Coming Soon',
  },
]

const statusStyles: Record<string, string> = {
  'For Sale': 'bg-white text-navy-950',
  'New': 'bg-brand-500 text-white',
  'Coming Soon': 'bg-navy-950 text-white',
}

export default function ListingsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1800&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/85 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,140,65,0.18),transparent_30%)]" />
        <div className="page-shell relative">
          <div className="max-w-3xl">
            <p className="section-label text-brand-300">Listings + Search</p>
            <h1 className="mt-3 font-display text-5xl leading-[1.02] text-white md:text-6xl">
              Find the right home, not just the next listing.
            </h1>
            <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
              Live search across Charlotte, Lake Norman, Fort Mill, Concord, and the surrounding
              Carolinas markets — paired with broker-curated collections and saved-search alerts.
            </p>
          </div>

          {/* Search bar */}
          <div className="mt-10 rounded-[28px] border border-white/14 bg-white/96 p-5 text-navy-950 shadow-[0_28px_60px_rgba(2,6,23,0.32)] md:p-6">
            <div className="grid gap-3 md:grid-cols-[1.6fr_0.9fr_0.9fr_0.9fr_auto] md:items-center">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                <Search className="h-4 w-4 text-brand-500" />
                <span>Neighborhood, city, ZIP, or MLS #</span>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                $500k – $1.25M
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                3+ beds
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                Any property type
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-400"
              >
                Search <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {['South Charlotte', 'Ballantyne', 'Lake Norman', 'Fort Mill', 'Plaza Midwood', 'Concord', 'Indian Land'].map(
                (chip) => (
                  <button
                    key={chip}
                    type="button"
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-600 transition hover:border-brand-400 hover:text-brand-500"
                  >
                    {chip}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS STRIP */}
      <section className="border-y border-slate-200/70 bg-white/70 py-8">
        <div className="page-shell">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {collections.map((c) => (
              <button
                key={c.label}
                type="button"
                className="group flex flex-none items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-sm transition hover:border-brand-400"
              >
                {c.label}
                <span className={`rounded-full ${c.accent} px-2.5 py-0.5 text-xs font-semibold`}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED GRID */}
      <section className="page-shell py-20 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Featured Inventory</p>
            <h2 className="section-title mt-3">Curated homes across our core corridors.</h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <SlidersHorizontal className="h-4 w-4 text-brand-500" />
            <span>Sorted by relevance · {featuredCards.length} results</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredCards.map((card) => (
            <article key={`${card.title}-${card.price}`} className="property-card group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={`${card.title} listing`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <div
                  className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm ${statusStyles[card.status] ?? 'bg-white text-navy-950'}`}
                >
                  {card.status}
                </div>
                <button
                  type="button"
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/96 text-slate-500 shadow-sm transition hover:text-brand-500"
                  aria-label={`Save ${card.title}`}
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-6">
                <p className="font-display text-3xl text-navy-950">{card.price}</p>
                <p className="mt-2 text-sm font-semibold text-navy-950">{card.title}</p>
                <p className="mt-1 text-sm text-slate-600">{card.subtitle}</p>
                <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-slate-200 pt-4 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4 text-brand-500" />
                    {card.beds} bd
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Bath className="h-4 w-4 text-brand-500" />
                    {card.baths} ba
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Ruler className="h-4 w-4 text-brand-500" />
                    {card.sqft} SF
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-[28px] border border-dashed border-slate-300 bg-white/60 p-10 text-center">
          <p className="font-display text-2xl text-navy-950">More listings load when MLS goes live.</p>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Featured inventory above shows the experience. Once IDX is connected, full MLS coverage
            for Charlotte and surrounding markets streams in directly.
          </p>
          <Link href="/contact" className="cta-primary">
            Get a Manual Shortlist Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CAPABILITIES PANEL */}
      <section className="page-shell pb-20 md:pb-24">
        <div className="glass-panel overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-slate-200 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="section-label">Search Architecture</p>
              <h2 className="section-title mt-3">Built for serious browsing — not feed scrolling.</h2>
              <div className="mt-8 grid gap-3">
                {[
                  { icon: Search, label: 'Keyword, city, ZIP, subdivision, MLS number' },
                  { icon: SlidersHorizontal, label: 'Beds, baths, price, square footage, lot size, style' },
                  { icon: Map, label: 'Map-first exploration with neighborhood overlays' },
                  { icon: LayoutGrid, label: 'Collection pages and curated listing groups' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700"
                    >
                      <Icon className="h-5 w-5 text-brand-500" />
                      <span>{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <p className="section-label">Saved Searches</p>
              <h2 className="section-title mt-3">Set the criteria. We surface the matches.</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <p>Saved searches with property alerts for active buyers.</p>
                <p>Collection pages for new construction, luxury homes, waterfront, and family product.</p>
                <p>Seller-side valuation paths for homeowners browsing comparable inventory.</p>
              </div>

              <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-navy-950">
                  <TimerReset className="h-4 w-4 text-brand-500" />
                  Example saved searches
                </div>
                <div className="mt-4 space-y-3">
                  {savedSearches.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white/70 py-20">
        <div className="page-shell flex flex-col gap-6 rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Before IDX Goes Live</p>
            <h2 className="section-title mt-3">Need a manual shortlist or targeted home search now?</h2>
            <p className="section-copy mt-5">
              Send your target areas, budget, timing, and product type. We will start the search
              before the full MLS integration is live.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="cta-primary">
              Talk to the Brokerage <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="cta-secondary">
              See Buyer Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
