'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { REGIONS } from './neighborhoods/regions'

export function AreasDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onEsc)
    }
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-1 transition hover:text-brand-500"
      >
        Areas We Serve
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[17rem] -translate-x-1/2 pt-3">
          <div className="rounded-2xl border border-[#e8e2d6] bg-white p-2 shadow-[0_22px_54px_rgba(15,23,42,0.16)]">
            {REGIONS.map((r) => (
              <Link
                key={r.slug}
                href={`/neighborhoods/${r.slug}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 transition hover:bg-cream-50"
              >
                <span className="block text-sm font-semibold text-navy-950">{r.short}</span>
                <span className="block text-xs text-slate-400">{r.tagline}</span>
              </Link>
            ))}
            <Link
              href="/neighborhoods"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl border-t border-slate-100 px-3 py-2.5 text-sm font-semibold text-brand-500 hover:bg-cream-50"
            >
              All areas we serve →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
