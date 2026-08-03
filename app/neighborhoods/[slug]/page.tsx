import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  CalendarCheck,
  Camera,
  Clock,
  Coffee,
  Croissant,
  Dog,
  Gem,
  GraduationCap,
  Heart,
  Map as MapIcon,
  MapPin,
  Route,
  Search,
  Ticket,
  Trees,
  UtensilsCrossed,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'
import { AREA_META, BY_SLUG, NEIGHBORHOODS, childrenOf } from '../data'
import { BY_REGION, REGIONS } from '../regions'
import { PLACES, type Places } from '../places'
import { LOCAL_PICKS } from '../local-picks'
import { HUB_QUIZZES } from '../hub-quizzes'
import { NeighborhoodCard } from '../NeighborhoodCard'
import { HubQuiz } from '../HubQuiz'
import { RegionView } from './RegionView'
import { MarketStats } from './MarketStats'

type IconCmp = React.ComponentType<{ className?: string }>

const PLACE_CATS: { key: keyof Places; label: string; icon: IconCmp }[] = [
  { key: 'eat', label: 'Restaurants & Food', icon: UtensilsCrossed },
  { key: 'coffee', label: 'Coffee & Bakeries', icon: Coffee },
  { key: 'parks', label: 'Parks & Outdoors', icon: Trees },
  { key: 'shopping', label: 'Shopping', icon: ShoppingBag },
  { key: 'entertainment', label: 'Entertainment & Culture', icon: Ticket },
]

const PICK_CARDS: { key: 'coffee' | 'brunch' | 'dateNight'; label: string; icon: IconCmp }[] = [
  { key: 'coffee', label: 'Best Coffee', icon: Coffee },
  { key: 'brunch', label: 'Best Brunch', icon: Croissant },
  { key: 'dateNight', label: 'Date Night', icon: Heart },
]

const PICK_TAGS: { key: 'dogFriendly' | 'hiddenGems' | 'instaSpots'; label: string; icon: IconCmp }[] = [
  { key: 'dogFriendly', label: 'Dog-Friendly', icon: Dog },
  { key: 'hiddenGems', label: 'Hidden Gems', icon: Gem },
  { key: 'instaSpots', label: 'Instagram-Worthy', icon: Camera },
]

export function generateStaticParams() {
  return [...REGIONS.map((r) => ({ slug: r.slug })), ...NEIGHBORHOODS.map((n) => ({ slug: n.slug }))]
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const region = BY_REGION[params.slug]
  if (region) {
    return {
      title: `${region.name} — Areas We Serve`,
      description: `${region.blurb} Southern Cities Realty serves buyers and sellers across ${region.short} and all of North Carolina.`,
      alternates: { canonical: `/neighborhoods/${region.slug}` },
      openGraph: region.image ? { images: [region.image] } : undefined,
    }
  }
  const n = BY_SLUG[params.slug]
  if (!n) return { title: 'Neighborhood Guide' }
  return {
    title: `${n.name} Neighborhood Guide (${n.subtitle})`,
    description: `${n.name}, ${n.subtitle}: ${n.about} Homes for sale, lifestyle, dining, and things to do — from Southern Cities Realty.`,
    alternates: { canonical: `/neighborhoods/${n.slug}` },
    openGraph: n.image ? { images: [n.image] } : undefined,
  }
}

const HIGHLIGHTS = [
  { key: 'food', label: 'Food & Drink', icon: UtensilsCrossed },
  { key: 'shops', label: 'Shops & Markets', icon: ShoppingBag },
  { key: 'thingsToDo', label: 'Things to Do', icon: Sparkles },
] as const

// Modules still awaiting the MLS feed (never fabricated in the meantime).
const UPCOMING = [
  { label: 'Featured homes for sale', icon: Search },
  { label: 'Interactive map', icon: MapIcon },
  { label: 'Commute times', icon: Clock },
]

export default function NeighborhoodPage({ params }: { params: { slug: string } }) {
  const region = BY_REGION[params.slug]
  if (region) return <RegionView region={region} />

  const n = BY_SLUG[params.slug]
  if (!n) notFound()
  const meta = AREA_META[n.slug]
  const hoods = childrenOf(n.slug)
  const hubQuiz = HUB_QUIZZES[n.slug]
  const places = PLACES[n.slug]
  const hasPlaces = places && PLACE_CATS.some((c) => places[c.key]?.length)
  const picks = LOCAL_PICKS[n.slug]
  const hasPicks =
    picks &&
    (picks.weekend ||
      PICK_CARDS.some((c) => picks[c.key]) ||
      PICK_TAGS.some((t) => picks[t.key]?.length))
  const nearby = n.nearby.map((s) => BY_SLUG[s]).filter(Boolean)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        {n.image ? (
          <img src={n.image} alt={`${n.name}, North Carolina`} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-[#0e1b3d]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/45" />
        <div className="page-shell relative flex min-h-[46vh] flex-col justify-end py-14 md:min-h-[54vh] md:py-20">
          <Link href="/neighborhoods" className="mb-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white">
            ← All areas we serve
          </Link>
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">
            <MapPin className="h-4 w-4" /> {n.subtitle}
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[1.02] text-white md:text-7xl">{n.name}</h1>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="cta-primary">
              <CalendarCheck className="h-4 w-4" /> Schedule a Showing
            </Link>
            <a href="/listings" className="cta-ghost border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Search className="h-4 w-4" /> Search Homes in {n.name}
            </a>
          </div>
        </div>
      </section>

      {/* LIFESTYLE OVERVIEW */}
      <section className="bg-cream-50 py-14 md:py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-label">Lifestyle Overview</p>
            <h2 className="section-title mt-3">Life in {n.name}.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{n.about}</p>
          </div>
          <div className="grid gap-4">
            {HIGHLIGHTS.map(({ key, label, icon: Icon }) => (
              <div key={key} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl text-navy-950">{label}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{n[key]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HUB: NEIGHBORHOODS GRID */}
      {hoods.length > 0 && (
        <section className="bg-white/70 py-14 md:py-16">
          <div className="page-shell">
            <p className="section-label">Neighborhoods</p>
            <h2 className="section-title mt-3">Explore {n.name}, neighborhood by neighborhood.</h2>
            <p className="section-copy mt-4 max-w-2xl">
              Each area has its own character. Browse the guides, or take the quiz below to find your fit.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
              {hoods.map((h) => (
                <NeighborhoodCard key={h.slug} n={h} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HUB: NEIGHBORHOOD MATCH QUIZ */}
      {hubQuiz && (
        <section id="quiz" className="bg-cream-50 py-14 md:py-16">
          <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">🔍 Not sure where to start?</p>
              <h2 className="section-title mt-3">Find your {n.name} neighborhood.</h2>
              <p className="section-copy mt-4 max-w-lg">
                Answer a few quick questions and we&rsquo;ll point you to the {n.name} neighborhoods that fit your
                style.
              </p>
            </div>
            <HubQuiz questions={hubQuiz} hubName={n.name} />
          </div>
        </section>
      )}

      {/* LOCAL FAVORITES */}
      {hasPlaces && places && (
        <section className="bg-white/70 py-14 md:py-16">
          <div className="page-shell">
            <p className="section-label">Local Favorites</p>
            <h2 className="section-title mt-3">Around {n.name}.</h2>
            <p className="section-copy mt-4 max-w-2xl">
              A few well-known local spots to know. Ask us for more once you&rsquo;re out exploring.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PLACE_CATS.filter((c) => places[c.key]?.length).map(({ key, label, icon: Icon }) => (
                <div key={key} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg text-navy-950">{label}</h3>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {places[key]!.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              A curated sample of established local landmarks — not a complete directory.
            </p>
          </div>
        </section>
      )}

      {/* LOCAL PICKS (editorial) */}
      {hasPicks && picks && (
        <section className="bg-cream-50 py-14 md:py-16">
          <div className="page-shell">
            <p className="section-label">Local Picks</p>
            <h2 className="section-title mt-3">How to enjoy {n.name}.</h2>
            <p className="section-copy mt-4 max-w-2xl">Our brokers&rsquo; picks &mdash; the spots we&rsquo;d actually send you to.</p>

            {picks.weekend && (
              <div className="mt-8 flex items-start gap-4 rounded-[22px] border border-brand-400/40 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] md:p-7">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Route className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">The perfect weekend</p>
                  <p className="mt-1.5 text-[15px] leading-7 text-navy-950">{picks.weekend}</p>
                </div>
              </div>
            )}

            {PICK_CARDS.some((c) => picks[c.key]) && (
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {PICK_CARDS.filter((c) => picks[c.key]).map(({ key, label, icon: Icon }) => (
                  <div key={key} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
                    <p className="mt-1 font-display text-lg leading-snug text-navy-950">{picks[key]}</p>
                  </div>
                ))}
              </div>
            )}

            {PICK_TAGS.some((t) => picks[t.key]?.length) && (
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {PICK_TAGS.filter((t) => picks[t.key]?.length).map(({ key, label, icon: Icon }) => (
                  <div key={key} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-brand-500" />
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-950">{label}</h3>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {picks[key]!.map((x) => (
                        <li key={x} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand-400" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* MARKET SNAPSHOT */}
      {meta && (
        <section className="bg-white/70 py-14 md:py-16">
          <div className="page-shell">
            <p className="section-label">Market Snapshot</p>
            <h2 className="section-title mt-3">The {n.name} market right now.</h2>
            <p className="section-copy mt-4 max-w-2xl">
              A quick read on for-sale activity in {n.name} ({meta.zip}). For a full comparative market
              analysis on a specific home, just reach out.
            </p>
            <div className="mt-8">
              <MarketStats zip={meta.zip} name={n.name} />
            </div>
          </div>
        </section>
      )}

      {/* SCHOOLS */}
      {meta && (
        <section className="bg-cream-50 py-14 md:py-16">
          <div className="page-shell">
            <p className="section-label">Schools</p>
            <h2 className="section-title mt-3">Schools serving {n.name}.</h2>
            <div className="mt-6 flex flex-col gap-6 rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:justify-between md:p-9">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Public school district</p>
                  <p className="mt-1 font-display text-xl text-navy-950">{meta.district}</p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                    Assigned elementary, middle, and high schools depend on the exact address and current
                    attendance zones. Tell us a home you&rsquo;re considering and we&rsquo;ll pull its
                    assigned schools.
                  </p>
                </div>
              </div>
              <div className="flex flex-none flex-col gap-2">
                <a href={meta.districtUrl} target="_blank" rel="noopener noreferrer" className="cta-ghost whitespace-nowrap">
                  District Website
                </a>
                <Link href="/contact" className="cta-primary whitespace-nowrap">
                  Get Assigned Schools
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ALSO COMING */}
      <section className="bg-white/70 py-12">
        <div className="page-shell">
          <div className="rounded-[24px] border border-dashed border-slate-300 bg-cream-50 p-7 md:p-8">
            <p className="section-label">Also coming to this guide</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Featured {n.name} homes, an interactive map, and commute times arrive as we connect the MLS
              feed. Want them now?{' '}
              <Link href="/contact" className="font-semibold text-brand-500 underline underline-offset-2">
                Ask a local broker
              </Link>
              .
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {UPCOMING.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5">
                  <Icon className="h-4 w-4 flex-none text-slate-400" />
                  <span className="text-[13px] font-medium text-slate-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEARBY */}
      {nearby.length > 0 && (
        <section className="bg-cream-50 py-14 md:py-16">
          <div className="page-shell">
            <p className="section-label">Similar nearby areas</p>
            <h2 className="section-title mt-3">You might also like.</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
              {nearby.map((m) => (
                <NeighborhoodCard key={m.slug} n={m} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy-950 py-16 text-white md:py-20">
        <div className="page-shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-white md:text-4xl">Thinking about {n.name}?</h2>
            <p className="mt-3 text-white/70">
              Let&rsquo;s talk through what you&rsquo;re looking for. We&rsquo;ll set up a showing and send matching
              listings the moment they hit the market.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="cta-primary">
              <CalendarCheck className="h-4 w-4" /> Schedule a Showing
            </Link>
            <a href="/listings" className="cta-ghost border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              Browse Homes <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
