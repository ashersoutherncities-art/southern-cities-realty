import type { Metadata } from 'next'
import { ClipboardCheck, Hammer, LineChart, ShieldCheck } from 'lucide-react'
import { HomeValueForm } from './HomeValueForm'

export const metadata: Metadata = {
  title: "What's My Home Worth?",
  description:
    'Get an instant home value estimate for your North Carolina property, then a free, no-obligation CMA from a licensed Charlotte broker backed by a licensed general contractor.',
  alternates: { canonical: '/sell' },
}

const WHY = [
  {
    icon: LineChart,
    t: 'Real comps, not guesswork',
    s: 'We blend two independent valuation models, then check them against what’s actually moving in your neighborhood.',
  },
  {
    icon: Hammer,
    t: 'A builder’s eye on your listing',
    s: 'Broker-in-Charge Darius Walton is also a licensed NC general contractor — he knows what buyers will flag in inspection, before they do.',
  },
  {
    icon: ShieldCheck,
    t: 'A no-pressure CMA',
    s: 'Your free comparative market analysis comes with honest advice — even when that advice is "wait a few months."',
  },
]

const STEPS = [
  { n: '01', title: 'Get your instant estimate', body: 'Type your address above for a free, no-obligation value range in seconds.' },
  { n: '02', title: 'Get a broker-backed CMA', body: 'Leave your info and a licensed broker pulls real comps and refines the number by hand.' },
  { n: '03', title: 'List with confidence', body: 'If you decide to sell, we price it right, market it well, and negotiate hard on your behalf.' },
]

const FAQ = [
  {
    q: 'Is this a real appraisal?',
    a: 'No — it’s an automated estimate blending two independent valuation models (RentCast and HouseCanary) against recent local sales. It’s a strong starting point, not a substitute for an appraisal or a broker’s in-person CMA.',
  },
  {
    q: 'Why do the two estimates sometimes disagree?',
    a: 'Automated models can miss renovations, condition issues, or thin comps in your area. When they disagree by more than a few percent, we flag it and recommend a human CMA before you rely on the number.',
  },
  {
    q: 'Does this cost anything?',
    a: 'No. The instant estimate and the follow-up CMA from a broker are both free, with no obligation to list with us.',
  },
  {
    q: 'What if I’m not ready to sell yet?',
    a: 'That’s fine — tell us your timeline. A lot of our best clients start here months before they actually list, just to understand their number.',
  },
]

export default function SellPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-28">
        <div className="page-shell relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="section-label text-brand-300">For Sellers</p>
            <h1 className="mt-3 font-display text-5xl leading-[1.02] text-white md:text-6xl">
              What&rsquo;s your home worth?
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/75 md:text-lg">
              Get an instant estimate blending two independent valuation models, then a free, honest
              CMA from a Charlotte broker who&rsquo;s also a licensed general contractor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">No obligation</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Free CMA</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Usually same-day follow-up</span>
            </div>
          </div>
          <HomeValueForm />
        </div>
      </section>

      <section className="bg-cream-50 py-16 md:py-20">
        <div className="page-shell">
          <p className="section-label">Why sellers work with us</p>
          <h2 className="section-title mt-3">A broker who knows the house, not just the price.</h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {WHY.map(({ icon: Icon, t, s }) => (
              <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg text-navy-950">{t}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{s}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            NC Real Estate Broker #321548 &middot; NC General Contractor #107724
          </p>
        </div>
      </section>

      <section className="bg-white/70 py-16 md:py-20">
        <div className="page-shell">
          <p className="section-label">How it works</p>
          <h2 className="section-title mt-3">From estimate to sold.</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
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

      <section className="bg-navy-950 py-14 text-white md:py-16">
        <div className="page-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="section-label text-brand-300">Thinking about a rehab first?</p>
            <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
              Our sister GC prices the rehab before you list.
            </h2>
            <p className="mt-3 text-white/70">
              If a renovation would raise your sale price, Southern Cities Construction can price it
              and build it before you go to market.
            </p>
          </div>
          <a
            href="https://southerncitiesconstruction.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary whitespace-nowrap"
          >
            <ClipboardCheck className="h-4 w-4" /> See the Deal Pack
          </a>
        </div>
      </section>

      <section className="bg-cream-50 py-16 md:py-20">
        <div className="page-shell max-w-3xl">
          <p className="section-label">FAQ</p>
          <h2 className="section-title mt-3">Seller questions, answered.</h2>
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
    </>
  )
}
