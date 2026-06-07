import type { Metadata } from 'next'
import Link from 'next/link'
import { Fraunces, Manrope } from 'next/font/google'
import { Mail, MapPin, Phone } from 'lucide-react'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://southerncitiesrealty.com'),
  title: {
    default: 'Southern Cities Realty | Charlotte Residential Brokerage',
    template: '%s | Southern Cities Realty',
  },
  description:
    'Full-service residential brokerage serving Charlotte, Lake Norman, Fort Mill, and the surrounding Carolinas. Disciplined buyer representation, listing strategy, and relocation guidance from a broker who understands the house, not just the contract.',
  keywords: [
    'Charlotte real estate',
    'Charlotte realtor',
    'Lake Norman homes',
    'Fort Mill homes',
    'residential brokerage',
    'Southern Cities Realty',
    'Darius Walton broker',
    'sell my home Charlotte',
    'buy a home Charlotte',
  ],
  openGraph: {
    title: 'Southern Cities Realty | Charlotte Residential Brokerage',
    description:
      'Disciplined residential brokerage for buyers, sellers, and relocations across Charlotte and the surrounding Carolinas markets.',
    url: 'https://southerncitiesrealty.com',
    siteName: 'Southern Cities Realty',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Southern Cities Realty',
    description: 'Residential brokerage with sharper judgment — Charlotte and the Carolinas.',
  },
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/listings', label: 'Listings' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-navy-950/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Southern Cities Realty home">
          <img
            src="/logos/sc-realty-mark.png"
            alt=""
            aria-hidden="true"
            className="h-10 w-auto md:h-11"
          />
          <span className="font-display text-[1.05rem] leading-none tracking-[0.04em] text-white md:text-[1.15rem]">
            <span className="block font-semibold">SOUTHERN CITIES</span>
            <span className="block font-semibold text-brand-400">REALTY</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/74 md:flex">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-brand-500 px-5 py-2.5 font-semibold text-white shadow-[0_8px_24px_rgba(250,140,65,0.32)] transition hover:bg-brand-400 hover:shadow-[0_10px_28px_rgba(250,140,65,0.42)]"
          >
            Contact
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  )
}

function MobileNav() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="mobile-menu" className="peer hidden" />
      <label
        htmlFor="mobile-menu"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/14 bg-white/6"
        aria-label="Open menu"
      >
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <div className="absolute left-0 right-0 top-full hidden border-t border-white/10 bg-navy-950/98 backdrop-blur peer-checked:block">
        <nav className="flex flex-col px-6 py-6 text-base font-medium text-white/86">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="border-b border-white/8 py-4 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logos/sc-realty-mark.png" alt="" aria-hidden="true" className="h-12 w-auto" />
              <span className="font-display text-lg leading-none tracking-[0.04em] text-white">
                <span className="block font-semibold">SOUTHERN CITIES</span>
                <span className="block font-semibold text-brand-400">REALTY</span>
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/64">
              Southern Cities Realty is the residential brokerage arm of Southern Cities Enterprises.
              We help buyers, sellers, and relocations move with more clarity, tighter execution, and
              better decision-making across Charlotte and the surrounding Carolinas markets.
            </p>
            <div className="mt-7 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Equal Housing Opportunity
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Navigation</h4>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/64">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Markets</h4>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/64">
              <span>Charlotte</span>
              <span>Lake Norman</span>
              <span>Fort Mill</span>
              <span>Concord &amp; Kannapolis</span>
              <span>Gastonia</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Office</h4>
            <div className="mt-5 space-y-4 text-sm text-white/64">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-300" />
                <span>Charlotte, North Carolina</span>
              </div>
              <a href="tel:+17042992742" className="flex items-start gap-3 transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-brand-300" />
                <span>(704) 299-2742</span>
              </a>
              <a href="mailto:realty@developthesouth.com" className="flex items-start gap-3 transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-300" />
                <span>realty@developthesouth.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/48 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Southern Cities Realty. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>NC Real Estate Brokerage</span>
            <span>Broker-in-Charge: Darius Walton, NC License #321548</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-cream-50 font-body text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
