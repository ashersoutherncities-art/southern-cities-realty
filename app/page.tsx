import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  Compass,
  GraduationCap,
  Home,
  Landmark,
  MapPinned,
  Quote,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
} from 'lucide-react'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80'

const serviceCards = [
  {
    icon: Home,
    title: 'Buyer Representation',
    description:
      'Search strategy, touring rhythm, negotiation, diligence, and clean contract-to-close support.',
  },
  {
    icon: Landmark,
    title: 'Seller Strategy',
    description:
      'Pricing discipline, prep planning, launch positioning, and a more controlled path from listing to close.',
  },
  {
    icon: Building2,
    title: 'New Construction',
    description:
      'Representation for buyers navigating builder contracts, design selections, upgrades, and delivery timelines.',
  },
  {
    icon: Compass,
    title: 'Relocation + Move-Up',
    description:
      'A more organized experience for families and professionals making a high-friction residential move.',
  },
]

const featuredHomes = [
  {
    image:
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1400&q=80',
    price: '$825,000',
    address: 'South Charlotte',
    description: 'Move-up family product · strong school zone',
    beds: 4,
    baths: 3.5,
    sqft: '3,120',
    status: 'For Sale',
  },
  {
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80',
    price: '$674,000',
    address: 'Fort Mill, SC',
    description: 'Newer single-family with main-level office',
    beds: 4,
    baths: 3,
    sqft: '2,780',
    status: 'For Sale',
  },
  {
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80',
    price: '$1,180,000',
    address: 'Lake Norman',
    description: 'Waterfront lifestyle · main-channel views',
    beds: 5,
    baths: 4,
    sqft: '4,260',
    status: 'For Sale',
  },
]

const standardPillars = [
  {
    icon: ShieldCheck,
    title: 'Stronger Filtering',
    copy: 'Avoid wasting time on houses that look fine online but fail the real-life fit test.',
  },
  {
    icon: Trees,
    title: 'Neighborhood Context',
    copy: 'Understand location trade-offs, school-zone appeal, access, and long-term lifestyle fit.',
  },
  {
    icon: Sparkles,
    title: 'Condition Awareness',
    copy: 'Sharper read on updates, deferred maintenance, and renovation implications.',
  },
  {
    icon: MapPinned,
    title: 'Cleaner Execution',
    copy: 'A tighter process for showings, offers, inspections, prep decisions, and closing.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Set the target',
    copy: 'We define timing, budget, financing posture, product type, and the non-negotiables driving the move.',
  },
  {
    step: '02',
    title: 'Control the search or launch',
    copy: 'We structure the showing plan, listing prep, pricing logic, communication cadence, and decision checkpoints.',
  },
  {
    step: '03',
    title: 'Execute cleanly',
    copy: 'Negotiation, inspections, repair strategy, lender coordination, and closing all stay tight and visible.',
  },
]

const neighborhoods = [
  {
    name: 'South Charlotte',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1100&q=80',
    blurb: 'Move-up family homes, school-zone driven decisions, established corridors.',
  },
  {
    name: 'Lake Norman',
    image:
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1100&q=80',
    blurb: 'Waterfront lifestyle, lake-access homes, and lifestyle-driven search.',
  },
  {
    name: 'Fort Mill + Indian Land',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1100&q=80',
    blurb: 'Newer construction inventory, growing schools, relocation magnet.',
  },
  {
    name: 'Concord + Kannapolis',
    image:
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1100&q=80',
    blurb: 'Growth-corridor single-family product and emerging value plays.',
  },
]

const testimonials = [
  {
    name: 'Marcus & Lena R.',
    location: 'Bought in South Charlotte',
    quote:
      'The first home we toured we almost wrote on. Darius walked us through three issues we never would have caught. We ended up writing on the right house — not the first house.',
  },
  {
    name: 'Priya S.',
    location: 'Relocated from Atlanta',
    quote:
      'We had 30 days to land somewhere. The shortlist he built actually narrowed by Day 2 instead of getting longer. That alone saved the move.',
  },
  {
    name: 'The Whitlock Family',
    location: 'Sold + Bought in Fort Mill',
    quote:
      'Selling and buying inside 60 days could have been a disaster. The timing plan was clear from week one and the handoff between the two transactions was clean.',
  },
]

const credentials = [
  { icon: GraduationCap, title: 'Real Estate Finance', sub: 'Graduate-level training' },
  { icon: Building2, title: 'Construction Lens', sub: 'Renovation + condition awareness' },
  { icon: Award, title: 'NC Licensed', sub: 'Broker-in-Charge · #321548' },
  { icon: MapPinned, title: 'Charlotte Native', sub: 'Carolinas market focus' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/82 to-navy-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,140,65,0.18),transparent_36%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />

        <div className="page-shell relative py-24 md:py-32 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/82 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-400" />
              Charlotte · Lake Norman · Carolinas
            </div>

            <h1 className="mt-6 font-display text-5xl leading-[0.96] text-white md:text-7xl lg:text-[5.5rem]">
              Built to a standard.
              <span className="block text-brand-400">Priced for real life.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
              Southern Cities Realty is a residential brokerage for buyers, sellers, and relocations
              who want sharper judgment, cleaner execution, and a broker who understands the house —
              not just the contract.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/listings" className="cta-primary">
                Browse Listings <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="cta-ghost-dark">
                Schedule a Consultation
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.22em] text-white/52">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 rounded-full bg-white/40" />
                Buyer Representation
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 rounded-full bg-white/40" />
                Seller Strategy
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 rounded-full bg-white/40" />
                Relocation
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 rounded-full bg-white/40" />
                New Construction
              </div>
            </div>
          </div>

          {/* Floating quick search */}
          <div className="mt-16 max-w-5xl">
            <div className="glass-panel border-white/14 bg-white/96 p-5 text-navy-950 md:p-6">
              <div className="grid gap-3 md:grid-cols-[1.6fr_0.9fr_0.9fr_auto] md:items-center">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                  <Search className="h-4 w-4 text-brand-500" />
                  <span>City, neighborhood, ZIP, or MLS number</span>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                  $450k – $1.2M
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                  3+ beds
                </div>
                <Link
                  href="/listings"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-400"
                >
                  Search <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-200/70 bg-white/70 py-8">
        <div className="page-shell">
          <div className="grid grid-cols-2 gap-y-6 text-center md:grid-cols-4 md:gap-x-6">
            {credentials.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex flex-col items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-navy-950">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.sub}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="page-shell py-20 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Featured Listings</p>
            <h2 className="section-title mt-3 max-w-2xl">
              Curated homes across the corridors where search quality matters.
            </h2>
          </div>
          <Link href="/listings" className="cta-secondary self-start md:self-auto">
            View All Listings <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredHomes.map((home) => (
            <article key={home.address} className="property-card group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={home.image}
                  alt={`${home.address} home`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/96 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 shadow-sm">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {home.status}
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-navy-950/82 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <p className="font-display text-3xl text-navy-950">{home.price}</p>
                <p className="mt-2 text-sm font-semibold text-navy-950">{home.address}</p>
                <p className="mt-1 text-sm text-slate-600">{home.description}</p>
                <div className="mt-5 flex items-center gap-5 border-t border-slate-200 pt-4 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4 text-brand-500" />
                    {home.beds} beds
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Bath className="h-4 w-4 text-brand-500" />
                    {home.baths} baths
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Ruler className="h-4 w-4 text-brand-500" />
                    {home.sqft} SF
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* THE STANDARD */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,140,65,0.16),transparent_36%),radial-gradient(circle_at_80%_70%,rgba(42,86,153,0.30),transparent_30%)]" />
        <div className="page-shell relative">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-label text-brand-300">The Standard</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl">
                A home is where you live your life. It deserves a standard.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
                Process. Planning. Execution. Management. Whether you are buying your first home,
                selling a long-time residence, relocating into Charlotte, or making a move-up
                purchase — the experience should feel structured and the property judgment should
                be sharp.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" className="cta-primary">
                  Meet the Brokerage
                </Link>
                <Link href="/services" className="cta-ghost-dark">
                  View Services
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {standardPillars.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-brand-400/40 hover:bg-white/8"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/16 text-brand-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{item.copy}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="page-shell py-24 md:py-28">
        <div className="max-w-3xl">
          <p className="section-label">What We Handle</p>
          <h2 className="section-title mt-3">
            Residential brokerage built for real decisions, not transaction churn.
          </h2>
          <p className="section-copy mt-5">
            The brokerage is positioned around owner-occupant and lifestyle-driven residential
            buyers and sellers — with enough depth to support clients who care about property
            quality, resale logic, and the realities behind the house itself.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="group glass-panel p-6 transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/12 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-navy-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white/70 py-24 md:py-28">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="section-label">How It Works</p>
            <h2 className="section-title mt-3">A brokerage process that stays visible from start to finish.</h2>
            <p className="section-copy mt-5">
              The client experience should feel structured, informed, and easy to follow — whether
              you are buying a primary residence, preparing to list, or making a sharper move-up
              decision.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className="relative rounded-[28px] border border-slate-200/70 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl text-brand-500/22">{step.step}</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-500/22 text-brand-500">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="mt-2 font-display text-2xl text-navy-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.copy}</p>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-brand-500/40 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="page-shell py-24 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Markets We Cover</p>
            <h2 className="section-title mt-3">
              Focused on the residential corridors where search quality actually matters.
            </h2>
          </div>
          <Link href="/listings" className="cta-secondary self-start md:self-auto">
            See Listings <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {neighborhoods.map((n) => (
            <Link
              key={n.name}
              href="/listings"
              className="group relative overflow-hidden rounded-[26px] border border-slate-200/70 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={n.image}
                  alt={n.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-display text-2xl">{n.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/78">{n.blurb}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MEET THE BROKER */}
      <section className="bg-white/70 py-24 md:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-slate-200 shadow-[0_28px_80px_rgba(15,23,42,0.14)]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1100&q=80"
                alt="Darius Walton, Broker-in-Charge"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950 to-transparent p-6 text-white">
                <p className="font-display text-2xl">Darius Walton</p>
                <p className="text-sm text-white/76">Broker-in-Charge · NC License #321548</p>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-brand-400/40 bg-white px-4 py-3 shadow-[0_18px_40px_rgba(250,140,65,0.16)] md:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">Founder</p>
              <p className="mt-1 font-display text-xl text-navy-950">Southern Cities Realty</p>
            </div>
          </div>

          <div>
            <p className="section-label">Meet the Brokerage</p>
            <h2 className="section-title mt-3">
              Residential guidance backed by a finance, development, and execution lens.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              Southern Cities Realty is led by Darius Walton — a Charlotte-based broker with
              graduate-level real estate finance training, hands-on construction context, and the
              broader Southern Cities operating platform behind him. That mix means clients get a
              broker who understands the house, the numbers, and the move — not just the contract.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Finance + development training',
                'Construction-aware property evaluation',
                'Underwriting and resale judgment',
                'Charlotte-Carolinas market focus',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white p-4 text-sm text-slate-700 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about" className="cta-primary">
                Read the Full Bio
              </Link>
              <Link href="/contact" className="cta-secondary">
                Book a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="page-shell py-24 md:py-28">
        <div className="max-w-3xl">
          <p className="section-label">Client Experiences</p>
          <h2 className="section-title mt-3">What it actually feels like to work with us.</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex h-full flex-col rounded-[28px] border border-slate-200/70 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
            >
              <Quote className="h-7 w-7 text-brand-500/22" />
              <div className="mt-2 flex items-center gap-0.5 text-brand-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-7 text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-semibold text-navy-950">{t.name}</p>
                <p className="text-xs text-slate-500">{t.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,140,65,0.20),transparent_38%)]" />
        <div className="page-shell relative">
          <div className="grid gap-10 rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur md:p-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="section-label text-brand-300">Start Here</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                Ready for a cleaner residential strategy?
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
                Whether you are searching, preparing to list, relocating, or mapping a move-up
                purchase, the first conversation should make the next move clearer.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="cta-primary justify-center">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/listings" className="cta-ghost-dark justify-center">
                Browse Listings
              </Link>
              <a
                href="tel:+17042992742"
                className="mt-2 text-center text-sm text-white/64 transition hover:text-white"
              >
                Or call directly · (704) 299-2742
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
