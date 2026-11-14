import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'Real Estate Field Notes', description: 'Practical North Carolina real estate guides for buyers, sellers and investors.', alternates: { canonical: '/blog' } }
export default function Blog() { return <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
<p className="text-sm font-semibold uppercase tracking-[.2em] text-brand-500">Southern Cities Realty · Field notes</p>
<h1 className="mt-5 max-w-3xl font-display text-4xl text-navy-950 sm:text-6xl">Better decisions start with better questions.</h1>
<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Clear, practical guidance for buying, selling and investing in North Carolina. Start with the fundamentals, then bring the details of your property into focus.</p>
<div className="mt-10 flex flex-wrap gap-3"><span className="rounded-full bg-navy-950 px-5 py-2 text-sm text-white">Buying &amp; Selling</span><span className="px-3 py-2 text-sm text-slate-500">Our first field note</span></div>
<article className="mt-7 overflow-hidden rounded-[28px] border border-[#e8e2d6] bg-white p-7 sm:p-10">
<div className="flex flex-wrap gap-3 text-sm text-slate-500"><time dateTime="2026-11-14">November 14, 2026</time><span>· 4 min read</span></div>
<h2 className="mt-5 max-w-3xl font-display text-3xl text-navy-950 sm:text-4xl"><Link href="/blog/home-value-estimate-appraisal-inspection" className="hover:underline">Home value estimates, appraisals and inspections: which number should you trust?</Link></h2>
<p className="mt-5 max-w-2xl leading-8 text-slate-600">A practical guide to separating price, value and condition before your next North Carolina home decision.</p>
<Link href="/blog/home-value-estimate-appraisal-inspection" className="mt-7 inline-flex rounded-full bg-navy-950 px-6 py-3 font-semibold text-white">Read the guide →</Link>
</article>
<div className="mt-10 rounded-2xl border border-[#e8e2d6] p-6"><h2 className="font-display text-2xl text-navy-950">Coming into focus</h2><p className="mt-3 leading-7 text-slate-600">Future guides will cover selling strategy, buyer due diligence, renovation planning and investment fundamentals. These topics are planned, not yet published.</p></div></div> }
