import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, LockKeyhole, MapPinned } from 'lucide-react'

const TOOL_URL = 'https://sci-comp-distance-tool.vercel.app/'

export const metadata: Metadata = {
  title: 'Comp Distance Tool | Team Workspace',
  description: 'Southern Cities Realty team workspace for the existing SCI comparable-property distance tool.',
  alternates: { canonical: '/tools/comp-distance' },
  robots: { index: false, follow: false },
}

export default function CompDistancePage() {
  return (
    <>
      <section className="bg-navy-950 py-10 text-white md:py-14">
        <div className="page-shell">
          <Link href="/investors" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Realty
          </Link>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="section-label text-brand-300">Southern Cities Realty · Team tools</p>
              <h1 className="mt-3 font-display text-3xl md:text-5xl">Comp Distance Tool</h1>
              <p className="mt-4 leading-7 text-white/70">Your existing SCI tool, now accessible from the Realty workspace. Use the team password in the tool below.</p>
            </div>
            <a href={TOOL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-400">
              Open standalone <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <section className="page-shell py-8 md:py-10" aria-label="Internal distance workspace">
        <div className="mb-5 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
          <LockKeyhole className="mt-1 h-5 w-5 shrink-0 text-navy-950" />
          <p><strong className="text-navy-950">Team access stays separate.</strong> This page does not sign you in or change the tool’s access controls. If the embedded view does not load or remember your session, use Open standalone.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-200 px-5 py-4 text-sm font-semibold text-navy-950"><MapPinned className="h-5 w-5" /> SCI workspace</div>
          <iframe src={TOOL_URL} title="SCI Comp Distance Tool — team password required" className="h-[78vh] min-h-[620px] w-full border-0" referrerPolicy="strict-origin-when-cross-origin" />
        </div>
        <p className="mt-5 max-w-4xl text-xs leading-6 text-slate-500">Distance is one input to comparable-property selection, not a valuation or appraisal. Verify locations and routes, then assess sale date, condition, size, property type and market boundaries before relying on a comparison. The embedded tool runs on its existing Southern Cities address.</p>
      </section>
    </>
  )
}
