import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Compass, Home, KeyRound, LineChart, MapPinned } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Buying, selling, relocating, or building in Charlotte and the Carolinas? Southern Cities Realty guides you every step — with honest advice and a builder’s eye on every home.',
}

const services = [
  {
    icon: KeyRound,
    title: 'Buying a Home',
    copy:
      'We help you find the right home, make a smart offer, and understand exactly what you’re buying — inspections, repairs, and all.',
    highlights: ['Neighborhoods matched to your life', 'Offers that win without overpaying', 'A builder’s read on condition and repairs'],
  },
  {
    icon: Home,
    title: 'Selling a Home',
    copy:
      'We price your home with real market data, tell you which improvements actually pay off, and market it to get you the best price.',
    highlights: ['Straight talk on what adds value', 'Pricing backed by real analysis', 'Full support from listing to close'],
  },
  {
    icon: Building2,
    title: 'New Construction',
    copy:
      'Builders write contracts to protect builders. We’re on your side — comparing lots, upgrades, and the fine print, with a contractor’s eye on the build.',
    highlights: ['Builder contract review', 'Which upgrades are worth it', 'Walk-throughs and punch-list help'],
  },
  {
    icon: Compass,
    title: 'Relocating to Charlotte',
    copy:
      'Moving from out of town? We’re your eyes and ears on the ground — narrowing neighborhoods, running video tours, and helping you land in the right spot fast.',
    highlights: ['Neighborhood and commute guidance', 'Remote and video showings', 'A tight, focused search schedule'],
  },
  {
    icon: LineChart,
    title: 'Buying & Selling at Once',
    copy:
      'Selling one home while buying the next is a timing puzzle. We help you line it up so you’re not stuck with two mortgages — or none.',
    highlights: ['Sequencing your sale and purchase', 'Putting your equity to work', 'Managing the timing so it’s not stressful'],
  },
  {
    icon: MapPinned,
    title: 'Just Exploring',
    copy:
      'Not ready to move yet? We’ll give you a clear read on neighborhoods, prices, and what a home is really worth — with zero pressure to do anything.',
    highlights: ['Neighborhood comparisons', 'What a home is really worth', 'Honest, no-pressure guidance'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="page-shell max-w-4xl">
          <p className="section-label text-brand-300">Our Services</p>
          <h1 className="mt-3 font-display text-5xl leading-tight text-white md:text-6xl">
            Whatever your move, we’ll guide you through it.
          </h1>
          <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
            Buying, selling, relocating, or building — you get honest advice, a builder’s eye on every
            home, and a broker who’s with you from the first showing to the closing table.
          </p>
        </div>
      </section>

      <section className="page-shell py-20 md:py-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="glass-panel p-7 md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/12 text-brand-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-3xl text-navy-950">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.copy}</p>
                <div className="mt-6 grid gap-3">
                  {service.highlights.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-white/70 py-20">
        <div className="page-shell">
          <div className="dark-panel flex flex-col gap-6 p-8 md:p-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="section-label text-brand-300">Start Here</p>
              <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">
                Not sure where to start? That’s exactly what we’re here for.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/68">
                The first conversation is simple: tell us what you’re thinking, and we’ll help you
                figure out the smartest next step — buying, selling, or somewhere in between.
              </p>
            </div>
            <Link href="/contact" className="cta-primary">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
