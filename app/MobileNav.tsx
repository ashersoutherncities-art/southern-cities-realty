'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { REGIONS } from './neighborhoods/regions'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const close = () => {
    setOpen(false)
    setAreasOpen(false)
  }

  const item = 'block rounded-xl px-3 py-3 text-base font-medium text-navy-950 transition hover:bg-white'

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-950"
      >
        <Menu className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-navy-950/45 backdrop-blur-sm" onClick={close} />
          <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-xs flex-col bg-[#fbf7f1] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e8e2d6] px-5 py-4">
              <span className="font-display text-lg font-semibold text-navy-950">Menu</span>
              <button type="button" onClick={close} aria-label="Close menu" className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-950">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-3">
              <Link href="/" onClick={close} className={item}>
                Home
              </Link>
              <Link href="/listings" onClick={close} className={item}>
                Buy
              </Link>
              <a href="/#sell" onClick={close} className={item}>
                Sell
              </a>
              <button
                type="button"
                onClick={() => setAreasOpen((o) => !o)}
                aria-expanded={areasOpen}
                className={`flex w-full items-center justify-between ${item}`}
              >
                Areas We Serve
                <ChevronDown className={`h-4 w-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="mb-1 ml-3 border-l border-[#e8e2d6] pl-2">
                  {REGIONS.map((r) => (
                    <Link key={r.slug} href={`/neighborhoods/${r.slug}`} onClick={close} className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-white">
                      {r.short}
                    </Link>
                  ))}
                  <Link href="/neighborhoods" onClick={close} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-500 transition hover:bg-white">
                    All areas we serve →
                  </Link>
                </div>
              )}

              <Link href="/about" onClick={close} className={item}>
                About
              </Link>
              <Link href="/contact" onClick={close} className={item}>
                Contact
              </Link>

              <Link
                href="/listings"
                onClick={close}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-400"
              >
                <Search className="h-4 w-4" /> Search Homes
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
