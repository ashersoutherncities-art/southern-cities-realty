import type { Metadata } from 'next'
import Link from 'next/link'
import { Fraunces, Manrope } from 'next/font/google'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'
import { AreasDropdown } from './AreasDropdown'
import { MobileNav } from './MobileNav'
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
    'Full-service residential brokerage serving Charlotte, Lake Norman, Fort Mill, and the Carolinas. Buy or sell with honest advice, deep local knowledge, and a broker who understands the house, not just the contract.',
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
      'Buy or sell with a Charlotte brokerage backed by a licensed builder and a real estate finance team.',
    url: 'https://southerncitiesrealty.com',
    siteName: 'Southern Cities Realty',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Southern Cities Realty',
    description: 'The Charlotte brokerage that knows the house, not just the paperwork.',
  },
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/listings', label: 'Buy' },
  { href: '/#sell', label: 'Sell' },
  { href: '/neighborhoods', label: 'Areas We Serve' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e2d6] bg-[#fbf7f1]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="mr-auto flex items-center" aria-label="Southern Cities Realty home">
          <img
            src="/logos/sc-realty-horizontal.png"
            alt="Southern Cities Realty"
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-x-5 gap-y-1 text-sm font-medium text-navy-950 md:flex md:gap-x-7">
          {navLinks.map((link) =>
            link.label === 'Areas We Serve' ? (
              <AreasDropdown key={link.href} />
            ) : link.href.includes('#') ? (
              <a key={link.href} href={link.href} className="transition hover:text-brand-500">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="transition hover:text-brand-500">
                {link.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/listings"
          className="hidden rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400 md:inline-flex"
        >
          Search homes
        </Link>

        <MobileNav />
      </div>
    </header>
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
              Southern Cities Realty is a Charlotte residential brokerage helping buyers and sellers
              across North Carolina make their move with honest advice, real local knowledge, and
              brokers who actually pick up the phone.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden="true">
                  <path d="M3 11 L12 3 L21 11" />
                  <path d="M5 10 V21 H19 V10" />
                  <line x1="9" y1="14" x2="15" y2="14" />
                  <line x1="9" y1="17" x2="15" y2="17" />
                </svg>
                Equal Housing Opportunity
              </span>
              <span className="rounded border border-white/25 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                REALTOR&reg;
              </span>
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
              <span>Davidson</span>
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
              <a href="tel:+17046040608" className="flex items-start gap-3 transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-brand-300" />
                <span>(704) 604-0608</span>
              </a>
              <a href="mailto:admin@southerncitiesrealty.com" className="flex items-start gap-3 transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-300" />
                <span>admin@southerncitiesrealty.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/48 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Southern Cities Realty. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>NC Real Estate Brokerage</span>
            <span>Firm License #C42672</span>
            <span>Broker-in-Charge: Darius Walton, REALTOR&reg;, NC License #321548</span>
            <span>Member, National Association of REALTORS&reg;</span>
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
        <Analytics />
      </body>
    </html>
  )
}
