import type { ReactNode } from 'react'

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string
  updated: string
  intro: string
  children: ReactNode
}) {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white md:py-20">
        <div className="page-shell max-w-4xl">
          <p className="section-label text-brand-300">Legal</p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl">{title}</h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-300">
            Last updated {updated}
          </p>
          <p className="mt-6 text-base leading-8 text-white/70">{intro}</p>
        </div>
      </section>

      <section className="page-shell max-w-4xl py-16 md:py-20">
        <div className="space-y-12">{children}</div>

        <div className="ring-divider mt-16" />
        <p className="mt-8 text-xs leading-6 text-slate-500">
          Southern Cities Realty · Charlotte, North Carolina · NC Firm License #C42672 ·
          Broker-in-Charge: Darius Walton, NC License #321548 · Equal Housing Opportunity
        </p>
      </section>
    </>
  )
}

export function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl leading-snug text-navy-950 md:text-3xl">{heading}</h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">{children}</div>
    </section>
  )
}

export function Ul({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-brand-500/30 bg-brand-500/[0.06] px-6 py-5 text-base leading-8 text-slate-700">
      {children}
    </div>
  )
}
