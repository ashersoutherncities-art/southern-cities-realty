import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Banknote,
  Building2,
  ClipboardCheck,
  Coins,
  Gavel,
  Hammer,
  HandCoins,
  Home,
  KeyRound,
  Landmark,
  LineChart,
  MapPin,
  RefreshCw,
  Search,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { InvestorForm } from './InvestorForm'
import { DealCalculator } from './DealCalculator'
import { InvestorMarket } from './InvestorMarket'

const FINANCING = [
  { icon: Banknote, title: 'Hard money', body: 'Fast, asset-based loans for flips — close in days, short term.' },
  { icon: Building2, title: 'DSCR loans', body: 'Qualify on the property’s rental income, not your W-2 — great for rentals.' },
  { icon: RefreshCw, title: 'BRRRR / cash-out refi', body: 'Buy, rehab, rent, refinance to recycle your capital and repeat.' },
  { icon: Landmark, title: 'Conventional', body: 'Traditional financing for buy-and-hold, best long-term rates.' },
  { icon: Coins, title: 'Cash', body: 'The strongest offer — we help you move fast and negotiate hard.' },
]

const FAQ = [
  {
    q: 'What’s the 70% rule?',
    a: 'A quick rule of thumb: offer no more than 70% of a property’s after-repair value, minus your rehab budget. Use the calculator above — then we verify the real ARV and rehab in person before you make an offer.',
  },
  {
    q: 'Do you work with out-of-state investors?',
    a: 'Yes. We’re your local eyes and boots — video walkthroughs, honest condition reports, and GC-verified rehab estimates so you can buy remotely with confidence.',
  },
  {
    q: 'Can you actually handle the renovation?',
    a: 'Yes. Darius is a licensed North Carolina general contractor (#107724), so the same team that finds and analyzes your deal can price and build the rehab — one accountable point of contact.',
  },
  {
    q: 'How do you find off-market deals?',
    a: 'A mix of the MLS, direct-to-seller outreach, wholesaler relationships, and estate/probate leads across Charlotte and North Carolina.',
  },
  {
    q: 'What does it cost me as an investor?',
    a: 'As your brokerage we’re generally compensated through the transaction. Reach out with your deal and we’ll walk you through exactly how it works — no surprises.',
  },
]

const HERO =
  'https://images.pexels.com/photos/20018783/pexels-photo-20018783.jpeg?auto=compress&cs=tinysrgb&w=2000'

export const metadata: Metadata = {
  title: 'Investors | Distressed & Value-Add Properties',
  description:
    'Off-market, distressed, and value-add real estate for investors across North Carolina — sourced by a licensed brokerage backed by a licensed general contractor, with rehab numbers verified before you buy.',
  alternates: { canonical: '/investors' },
}

const SOURCE = [
  { icon: Gavel, title: 'Foreclosures & REO', sub: 'Bank-owned and auction opportunities' },
  { icon: KeyRound, title: 'Pre-foreclosure & short sales', sub: 'Motivated sellers, before it hits the market' },
  { icon: Wrench, title: 'Fixer-uppers & tired rentals', sub: 'Cosmetic to full-gut value-add' },
  { icon: Home, title: 'Estate & probate sales', sub: 'Off-market inherited properties' },
  { icon: HandCoins, title: 'Off-market & wholesale', sub: 'Direct-to-seller and pocket deals' },
  { icon: Building2, title: 'Value-add multifamily', sub: 'Small multi and portfolio plays' },
]

const STEPS = [
  { n: '01', title: 'Tell us your buy box', body: 'Market, budget, and strategy — flip, BRRRR, or buy-and-hold. We tailor the search to your numbers.' },
  { n: '02', title: 'We send matching deals', body: 'Distressed, off-market, and value-add properties across North Carolina, filtered to your criteria.' },
  { n: '03', title: 'We verify the numbers', body: 'ARV and rehab cost checked by a licensed general contractor — so the spread is real before you commit.' },
  { n: '04', title: 'You buy with confidence', body: 'We handle the offer, negotiation, and closing as your licensed brokerage.' },
  { n: '05', title: 'Renovate it (optional)', body: 'Need the work done? The GC who priced it can build it — one accountable team from offer to resale.' },
]

const WHO = [
  'Fix-and-flip investors',
  'BRRRR & buy-and-hold landlords',
  'First-time investors',
  'Out-of-state & remote buyers',
  '1031 exchange buyers',
  'Small multifamily operators',
]

export default function InvestorsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-28">
        <img src={HERO} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/55" />
        <div className="page-shell relative max-w-3xl">
          <p className="section-label text-brand-300">For Investors</p>
          <h1 className="mt-3 font-display text-5xl leading-[1.02] text-white md:text-6xl">
            Distressed deals, sourced by a broker who builds.
          </h1>
          <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
            Off-market properties, fixer-uppers, foreclosures, and value-add plays across North Carolina — with
            rehab numbers you can actually trust, because the same team that finds the deal can price and build the
            renovation.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#get-deals" className="cta-primary">
              <HandCoins className="h-4 w-4" /> Get Investor Deals
            </a>
            <a href="/listings" className="cta-ghost border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Search className="h-4 w-4" /> Browse the MLS
            </a>
          </div>
        </div>
      </section>

      {/* THE EDGE */}
      <section className="bg-cream-50 py-16 md:py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-label">The edge</p>
            <h2 className="section-title mt-3">A brokerage backed by a licensed builder.</h2>
            <p className="section-copy mt-5">
              Most agents can find you a fixer-upper. Very few can tell you what the rehab will actually cost — and
              then build it. Broker-in-Charge Darius Walton is a licensed North Carolina Real Estate Broker and a
              licensed General Contractor, so your deal analysis is grounded in real construction numbers, not
              guesswork.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              NC Real Estate Broker #321548 · NC General Contractor #107724
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: LineChart, t: 'Real ARV analysis', s: 'Comps and after-repair value from people who sell here every week.' },
              { icon: ClipboardCheck, t: 'GC-verified rehab', s: 'Renovation budgets checked by a licensed contractor before you buy.' },
              { icon: Hammer, t: 'Build it in-house', s: 'One accountable team from offer to renovation to resale.' },
              { icon: MapPin, t: 'Statewide reach', s: 'Deals across Charlotte and all of North Carolina.' },
            ].map(({ icon: Icon, t, s }) => (
              <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg text-navy-950">{t}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE SOURCE */}
      <section className="bg-white/70 py-16 md:py-20">
        <div className="page-shell">
          <p className="section-label">What we source</p>
          <h2 className="section-title mt-3">Every kind of value-add deal.</h2>
          <p className="section-copy mt-4 max-w-2xl">
            On-market and off, we hunt down the properties that pencil for investors.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SOURCE.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-navy-950 text-brand-300">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-navy-950">{title}</h3>
                  <p className="mt-0.5 text-sm text-slate-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEAL CALCULATOR */}
      <section className="bg-cream-50 py-16 md:py-20">
        <div className="page-shell">
          <p className="section-label">Investor tools</p>
          <h2 className="section-title mt-3">Does the deal pencil?</h2>
          <p className="section-copy mt-4 max-w-2xl">
            Plug in a property&rsquo;s numbers to estimate your max offer and projected profit before you ever
            write it up.
          </p>
          <div className="mt-8">
            <DealCalculator />
          </div>
        </div>
      </section>

      {/* MARKET DATA */}
      <section className="bg-white/70 py-16 md:py-20">
        <div className="page-shell">
          <p className="section-label">Market data</p>
          <h2 className="section-title mt-3">Know the numbers before you offer.</h2>
          <p className="section-copy mt-4 max-w-2xl">
            Median prices, rents, and days-on-market by market — real data to sanity-check your spread and your
            rental assumptions.
          </p>
          <div className="mt-8">
            <InvestorMarket />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-cream-50 py-16 md:py-20">
        <div className="page-shell">
          <p className="section-label">How it works</p>
          <h2 className="section-title mt-3">From buy box to closing (and beyond).</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <span className="font-display text-3xl text-brand-500">{s.n}</span>
                <h3 className="mt-3 font-display text-lg leading-snug text-navy-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEAL PACK TIE-IN */}
      <section className="bg-navy-950 py-14 text-white md:py-16">
        <div className="page-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="section-label text-brand-300">Deal-to-done</p>
            <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">Want the rehab number in writing?</h2>
            <p className="mt-3 text-white/70">
              Our Bid-Ready Deal Pack gives you as-built plans, an itemized GC rehab budget, and a commitment to
              build at that price — so your analysis is bankable before you buy.
            </p>
          </div>
          <a href="https://southerncitiesconstruction.com" target="_blank" rel="noopener noreferrer" className="cta-primary whitespace-nowrap">
            <ClipboardCheck className="h-4 w-4" /> See the Deal Pack
          </a>
        </div>
      </section>

      {/* SOUTHERN CITIES INVESTORS TIE-IN */}
      <section className="bg-white py-14 md:py-16">
        <div className="page-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Not sure a purchase is the right move?</p>
            <h2 className="section-title mt-3">Southern Cities Investors reviews the strategy first.</h2>
            <p className="section-copy mt-3">
              Our sister company works with owners, landowners, and operators on whether a property should be
              sold, partnered on, improved, or passed on entirely — before anyone commits capital. They also
              take deal submissions from wholesalers and agents.
            </p>
          </div>
          <a
            href="https://southerncitiesinvestors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-ghost whitespace-nowrap"
          >
            Visit Southern Cities Investors
          </a>
        </div>
      </section>

      <section className="page-shell py-12"><div className="glass-panel flex flex-wrap items-center justify-between gap-6 p-8"><div><p className="section-label">Southern Cities Realty Deal Room</p><h2 className="mt-3 font-display text-3xl text-navy-950">Submit an opportunity. Explore a complete package.</h2><p className="section-copy mt-3">Wholesalers and realtors can submit deals for review. Members get access to approved, published packages for $59/month.</p></div><Link className="cta-primary" href="/deals">Open the deal room</Link></div></section>

      {/* FINANCING */}
      <section className="bg-cream-50 py-16 md:py-20">
        <div className="page-shell">
          <p className="section-label">Financing</p>
          <h2 className="section-title mt-3">Fund it your way.</h2>
          <p className="section-copy mt-4 max-w-2xl">
            However you capitalize a deal, we can point you to investor-friendly lenders and structure the offer
            to win.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FINANCING.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg text-navy-950">{title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACK RECORD / PROOF */}
      <section className="bg-white/70 py-16 md:py-20">
        <div className="page-shell">
          <p className="section-label">Why investors trust us</p>
          <h2 className="section-title mt-3">A broker who sells here, and a builder who builds here.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Award, t: 'Dual-licensed', s: 'NC Real Estate Broker #321548 and NC General Contractor #107724 — real credentials, not a referral chain.' },
              { icon: ShieldCheck, t: 'GC-verified numbers', s: 'Every rehab estimate is checked by a licensed contractor, so your spread is real.' },
              { icon: Hammer, t: 'One accountable team', s: 'Find, analyze, buy, and renovate — no finger-pointing between agent and contractor.' },
            ].map(({ icon: Icon, t, s }) => (
              <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg text-navy-950">{t}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[24px] border border-dashed border-slate-300 bg-cream-50 p-7">
            <p className="text-sm leading-7 text-slate-600">
              <span className="font-semibold text-navy-950">Want the receipts?</span> Ask us for recent project
              addresses, numbers, and before-and-afters — we&rsquo;ll share real deals we&rsquo;ve worked, not stock
              photos.{' '}
              <a href="#get-deals" className="font-semibold text-brand-500 underline underline-offset-2">
                Request our track record
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-50 py-16 md:py-20">
        <div className="page-shell max-w-3xl">
          <p className="section-label">FAQ</p>
          <h2 className="section-title mt-3">Investor questions, answered.</h2>
          <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-[24px] border border-slate-200 bg-white">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="group px-6 py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg text-navy-950 [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="flex-none text-2xl leading-none text-brand-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-white/70 py-14 md:py-16">
        <div className="page-shell">
          <p className="section-label">Who we work with</p>
          <h2 className="section-title mt-3">Built for serious buyers.</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            {WHO.map((w) => (
              <span key={w} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-navy-950">
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GET DEALS FORM */}
      <section id="get-deals" className="scroll-mt-24 bg-navy-950 py-16 text-white md:py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-label text-brand-300">Get investor deals</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl">
              Send us your buy box.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              Tell us your market, budget, and strategy. We&rsquo;ll start sending distressed and value-add
              opportunities with the rehab math already done — usually within a day.
            </p>
            <a href="tel:+19809448961" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-white">
              Prefer to talk? Call (980) 944-8961 <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <InvestorForm />
        </div>
      </section>
    </>
  )
}
