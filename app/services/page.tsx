import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Compass, Home, KeyRound, LineChart, MapPinned } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Residential brokerage services for buyers, sellers, relocations, new construction, and strategic property positioning in the Charlotte and Carolinas market.',
}

const services = [
  {
    icon: KeyRound,
    title: 'Buyer Representation',
    copy:
      'Search strategy, product filtering, offer guidance, inspection negotiation, repair analysis, and lender coordination.',
    highlights: ['Market fit and neighborhood guidance', 'Offer strategy and negotiation', 'Inspection and due diligence support'],
  },
  {
    icon: Home,
    title: 'Seller Representation',
    copy:
      'Pricing discipline, prep recommendations, listing presentation, launch strategy, and contract-to-close management.',
    highlights: ['Property prep and positioning', 'Strategic pricing', 'Offer review and contract execution'],
  },
  {
    icon: Building2,
    title: 'New Construction Guidance',
    copy:
      'Representation for clients buying from builders who need help comparing product, lot value, options, and contract details.',
    highlights: ['Builder contract review support', 'Upgrade and selection framing', 'Walk-through and punch-list perspective'],
  },
  {
    icon: Compass,
    title: 'Relocation Support',
    copy:
      'A clear system for families and professionals moving into the market and narrowing the right submarkets fast.',
    highlights: ['Area and commute filtering', 'Lifestyle-fit strategy', 'Compressed showing schedules'],
  },
  {
    icon: LineChart,
    title: 'Move-Up and Equity Planning',
    copy:
      'Help for homeowners selling one property while lining up the next move without making sloppy timing decisions.',
    highlights: ['Sequencing sale and purchase', 'Equity deployment planning', 'Positioning around timing risk'],
  },
  {
    icon: MapPinned,
    title: 'Residential Market Guidance',
    copy:
      'Targeted advice for clients who need a sharper read on location, condition, product type, and long-term value.',
    highlights: ['Neighborhood comparison', 'Condition and livability analysis', 'Resale-minded decision support'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="page-shell max-w-4xl">
          <p className="section-label text-brand-300">Services</p>
          <h1 className="mt-3 font-display text-5xl leading-tight text-white md:text-6xl">
            Residential brokerage services designed for better outcomes, not more noise.
          </h1>
          <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
            The service mix is centered on residential transactions, move-up decisions, and market clarity,
            with enough depth to support clients who care about the real condition and quality of the asset.
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
                Need help deciding which lane fits your next move?
              </h2>
              <p className="mt-5 text-base leading-8 text-white/68">
                The first conversation should clarify whether you need buyer support, seller strategy,
                relocation guidance, or a move-up plan.
              </p>
            </div>
            <Link href="/contact" className="cta-primary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
