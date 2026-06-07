import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  Landmark,
  MapPinned,
  ShieldCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About the Brokerage',
  description:
    'Meet Darius Walton and Southern Cities Realty — a Charlotte-based residential brokerage built on finance training, construction context, and disciplined execution.',
}

const credentials = [
  {
    icon: GraduationCap,
    title: 'Real Estate Finance',
    copy: 'Graduate-level training in real estate finance and development that sharpens decision-making beyond the standard residential playbook.',
  },
  {
    icon: Landmark,
    title: 'Brokerage + Investment Context',
    copy: 'Residential representation informed by underwriting, resale logic, renovation economics, and investor-grade thinking.',
  },
  {
    icon: Briefcase,
    title: 'Southern Cities Platform',
    copy: 'Backed by a broader operating business spanning brokerage, construction, capital, and execution.',
  },
  {
    icon: MapPinned,
    title: 'Charlotte Market Focus',
    copy: 'Local pattern recognition across Charlotte, surrounding growth corridors, and the move-up buyer footprint.',
  },
]

const goodFitFor = [
  'Residential buyers who want clearer strategy and stronger filtering',
  'Sellers who need sharper positioning and prep guidance',
  'Move-up families balancing lifestyle, school zones, commute, and product type',
  'Relocation clients who need a compressed but disciplined search process',
  'Clients who care about condition, improvements, and long-term decision quality',
]

const sisterCompanies = [
  {
    name: 'Southern Cities Construction',
    role: 'NC GC License #107724',
    blurb: 'Renovation and ground-up construction execution. Provides the property-level lens the brokerage relies on.',
  },
  {
    name: 'Southern Cities Capital',
    role: 'Real estate finance',
    blurb: 'Underwriting, debt, equity, and structuring across the broader Southern Cities portfolio.',
  },
  {
    name: 'Southern Cities Investors',
    role: 'Owner-occupant + investor execution',
    blurb: 'Investor-facing platform with execution intelligence — informing how we read residential value.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,140,65,0.20),transparent_32%)]" />
        <div className="page-shell relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="section-label text-brand-300">About the Brokerage</p>
            <h1 className="mt-3 font-display text-5xl leading-[1.02] text-white md:text-6xl">
              Residential guidance built on more than surface-level sales talk.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Southern Cities Realty is structured for clients who want cleaner decision-making,
            stronger property judgment, and a brokerage team that understands the house itself —
            not just the contract around it.
          </p>
        </div>
      </section>

      {/* BROKER PROFILE */}
      <section className="page-shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-slate-200 shadow-[0_28px_80px_rgba(15,23,42,0.14)]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1100&q=80"
                alt="Darius Walton, Broker-in-Charge"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 to-transparent p-6 text-white">
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
            <p className="section-label">Darius Walton</p>
            <h2 className="section-title mt-3">Broker / Owner with a finance, development, and execution lens.</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Darius Walton leads Southern Cities Realty with a perspective that blends residential
                brokerage, real estate finance, development thinking, and on-the-ground construction
                awareness. That combination matters when buyers are deciding between product types,
                neighborhoods, renovation risk, and long-term value.
              </p>
              <p>
                Rather than treating a transaction as a one-dimensional sales process, the brokerage
                evaluates the full picture: pricing discipline, physical condition, floor plan utility,
                future resale, market timing, and whether the house actually fits the client's life or
                portfolio objectives.
              </p>
              <p>
                Southern Cities Realty sits inside the larger Southern Cities Enterprises platform,
                giving the brand a more substantive operating story than a typical stand-alone
                boutique brokerage.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {credentials.map((c) => {
                const Icon = c.icon
                return (
                  <div
                    key={c.title}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white p-4"
                  >
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-500/12 text-brand-500">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-950">{c.title}</p>
                      <p className="mt-1 text-xs leading-6 text-slate-600">{c.copy}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* THE STANDARD */}
      <section className="bg-navy-950 py-20 text-white md:py-24">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label text-brand-300">The Standard</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl">
              A home is where you live your life. It deserves a standard.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
              Process, planning, execution, management. Held to the same standard for first-time
              buyers, move-up families, relocators, and luxury clients alike. That is the operating
              philosophy across every Southern Cities arm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/14 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/72">
                Built to a Standard
              </span>
              <span className="rounded-full border border-white/14 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/72">
                Priced for Real Life
              </span>
            </div>
          </div>

          <div className="grid gap-3">
            <p className="section-label text-brand-300">Where this brokerage wins</p>
            <div className="space-y-3">
              {goodFitFor.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/6 px-5 py-4 text-sm leading-7 text-white/76"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SISTER COMPANIES */}
      <section className="page-shell py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="section-label">Inside Southern Cities Enterprises</p>
          <h2 className="section-title mt-3">
            One operating platform. Real construction, finance, and execution depth.
          </h2>
          <p className="section-copy mt-5">
            The brokerage benefits from sister companies that handle the work behind the work. That
            integration shows up in how we read property, advise on renovation tradeoffs, and frame
            long-term value.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {sisterCompanies.map((c) => (
            <div key={c.name} className="glass-panel p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/12 text-brand-500">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-navy-950">{c.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">{c.role}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{c.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/70 py-20">
        <div className="page-shell flex flex-col gap-6 rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Work With the Brokerage</p>
            <h2 className="section-title mt-3">Need a residential strategy that actually fits the property and the person?</h2>
            <p className="section-copy mt-5">
              Reach out to discuss a purchase, listing, relocation, or valuation conversation.
            </p>
          </div>
          <Link href="/contact" className="cta-primary">
            Contact Southern Cities Realty <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
