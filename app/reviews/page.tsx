import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Quote, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client Reviews',
  description:
    'Read reviews from Southern Cities Realty clients across Charlotte, Lake Norman, and across North Carolina — buyers and sellers we’ve helped make their move.',
}

/*
 * ⚠️ IMPORTANT — READ BEFORE PUBLISHING
 * Every entry below is a clearly-labeled EXAMPLE layout, not a real client.
 * Southern Cities Realty must NEVER publish a fabricated review, name, or star rating.
 *
 * TO GO LIVE:
 *   1. Replace each entry with a REAL client's own words (lightly edited at most),
 *      with their written permission and preferred attribution.
 *   2. Set `isExample: false` on real entries (removes the "Example" pill).
 *   3. Delete the <PreviewBanner /> once every card is a real review.
 *   4. Add the real Google Business Profile URL to GOOGLE_REVIEWS_URL below.
 *   5. Only then, add "Reviews" to the nav in app/layout.tsx.
 * A page of 3–8 real, detailed, attributed reviews beats a wall of generic ones.
 */

const GOOGLE_REVIEWS_URL = '#' // TODO: paste the Southern Cities Realty Google Business Profile review link

type Review = {
  quote: string
  name: string
  meta: string
  isExample?: boolean
}

// EXAMPLE anchor review — replace with your strongest real client story.
const anchorReview: Review = {
  quote:
    'We were relocating to Charlotte from out of state and knew almost nothing about the neighborhoods. Darius became our eyes and ears — walking homes on video, breaking down each area, and flagging a foundation issue we never would have caught on our own. We found the right home in Fort Mill and closed without a single surprise.',
  name: 'Example Client',
  meta: 'Relocated from out of state · Buyer',
  isExample: true,
}

// EXAMPLE shorter reviews — replace each with a real, consented client quote.
const reviews: Review[] = [
  {
    quote:
      'As first-time buyers we had a hundred questions, and Darius answered every one without ever making us feel rushed. He explained each step so clearly that closing day felt easy.',
    name: 'Example Client',
    meta: 'South Charlotte · First-time buyer',
    isExample: true,
  },
  {
    quote:
      'He told us straight which updates were worth doing before we listed and which to skip. Our home sold quickly and for more than we expected.',
    name: 'Example Client',
    meta: 'Ballantyne · Seller',
    isExample: true,
  },
  {
    quote:
      'Having a broker who actually understands construction was the difference. He knew exactly what the “cosmetic” fixer would really cost — and it saved us from a bad deal.',
    name: 'Example Client',
    meta: 'Plaza Midwood · Buyer',
    isExample: true,
  },
  {
    quote:
      'We were selling one home and buying another at the same time. Darius lined up the timing so we were never stuck with two mortgages. Couldn’t have done it without him.',
    name: 'Example Client',
    meta: 'Fort Mill · Buyer & Seller',
    isExample: true,
  },
  {
    quote:
      'Anytime we called or texted, we heard back the same day — from Darius, not an assistant. That kind of responsiveness made a stressful process so much calmer.',
    name: 'Example Client',
    meta: 'Concord · Buyer',
    isExample: true,
  },
  {
    quote:
      'This is the second home we’ve bought with Southern Cities Realty. We wouldn’t call anyone else in Charlotte.',
    name: 'Example Client',
    meta: 'Lake Norman · Repeat client',
    isExample: true,
  },
]

function ExamplePill() {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-amber-700">
      Example
    </span>
  )
}

function PreviewBanner() {
  return (
    <div className="border-b border-amber-200 bg-amber-50">
      <div className="page-shell flex flex-col gap-1 py-3 text-sm text-amber-800 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-semibold">Preview:</span> the reviews below are example layouts. Real,
          verified client reviews will appear here.
        </p>
        <p className="text-xs text-amber-700/80">No fabricated reviews or ratings are published.</p>
      </div>
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <>
      <PreviewBanner />

      {/* HERO */}
      <section className="bg-navy-950 py-20 text-white md:py-24">
        <div className="page-shell max-w-4xl">
          <p className="section-label text-brand-300">Reviews</p>
          <h1 className="mt-3 font-display text-5xl leading-[1.02] text-white md:text-6xl">
            Charlotte Realtor reviews.
          </h1>
          <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
            The best measure of a brokerage is what its clients say afterward. Here’s what it’s like to
            buy or sell a home with Southern Cities Realty.
          </p>
        </div>
      </section>

      {/* ANCHOR REVIEW */}
      <section className="page-shell py-16 md:py-20">
        <figure className="glass-panel relative p-8 md:p-12">
          <Quote className="h-10 w-10 text-brand-500/30" />
          {anchorReview.isExample && (
            <div className="absolute right-6 top-6">
              <ExamplePill />
            </div>
          )}
          <blockquote className="mt-5 font-display text-2xl leading-[1.45] text-navy-950 md:text-3xl">
            “{anchorReview.quote}”
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/12 font-display text-lg text-brand-500">
              {anchorReview.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-950">{anchorReview.name}</p>
              <p className="text-xs text-slate-500">{anchorReview.meta}</p>
            </div>
          </figcaption>
        </figure>
      </section>

      {/* REVIEW GRID */}
      <section className="page-shell pb-16 md:pb-20">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="section-label">What our clients say</p>
            <h2 className="section-title mt-3">In their words.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, i) => (
            <figure key={i} className="flex h-full flex-col rounded-[28px] border border-slate-200/70 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-brand-500" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                {review.isExample && <ExamplePill />}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-7 text-slate-600">“{review.quote}”</blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-navy-950">{review.name}</p>
                <p className="text-xs text-slate-500">{review.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* LEAVE A REVIEW + CTA */}
      <section className="bg-white/70 py-20">
        <div className="page-shell grid gap-5 lg:grid-cols-2">
          <div className="dark-panel flex flex-col justify-between gap-6 p-8 md:p-10">
            <div>
              <p className="section-label text-brand-300">Worked with us?</p>
              <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">We’d love to hear about it.</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Your review helps the next buyer or seller decide with confidence. It only takes a minute, and
                it means the world to a local brokerage.
              </p>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary self-start"
            >
              Leave a Review on Google <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="glass-panel flex flex-col justify-between gap-6 p-8 md:p-10">
            <div>
              <p className="section-label">Ready to start?</p>
              <h2 className="mt-3 font-display text-3xl text-navy-950 md:text-4xl">
                Let’s make your move the next great story.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Buying, selling, or just weighing your options — reach out and we’ll help you figure out
                the smart next step.
              </p>
            </div>
            <Link href="/contact" className="cta-primary self-start">
              Let’s Talk <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
