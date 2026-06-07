'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPinned, Phone } from 'lucide-react'

const intakePrompts = [
  'What type of move are you making?',
  'Which neighborhoods or corridors are in play?',
  'What is the target timeline?',
  'Are there property-condition or renovation concerns?',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="page-shell max-w-5xl">
          <p className="section-label text-brand-300">Contact</p>
          <h1 className="mt-3 font-display text-5xl leading-tight text-white md:text-6xl">
            Start with a residential conversation that gets specific fast.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            Whether you are buying, selling, relocating, or planning a move-up purchase, the first step
            should surface your timing, target product, and the real decisions in front of you.
          </p>
        </div>
      </section>

      <section className="page-shell py-20 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="glass-panel p-8 md:p-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-display text-3xl text-navy-950">Send an inquiry</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Share the move, the property type, the timeline, and where you need better guidance.
                </p>
              </div>
              <div className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Buyer and seller intake
              </div>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-[24px] border border-emerald-200 bg-emerald-50 p-6">
                <h3 className="font-display text-2xl text-emerald-900">Message received</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-800">
                  Thank you. Southern Cities Realty will follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Name</span>
                    <input
                      type="text"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400"
                      placeholder="Your full name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Email</span>
                    <input
                      type="email"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Phone</span>
                    <input
                      type="tel"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400"
                      placeholder="(555) 555-5555"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">I need help with</span>
                    <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400">
                      <option>Buying a home</option>
                      <option>Selling a home</option>
                      <option>Relocating</option>
                      <option>New construction</option>
                      <option>Move-up strategy</option>
                      <option>General residential guidance</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Target areas</span>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400"
                      placeholder="Charlotte, Fort Mill, Lake Norman, etc."
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Timeline</span>
                    <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400">
                      <option>Immediately</option>
                      <option>0-30 days</option>
                      <option>30-90 days</option>
                      <option>3-6 months</option>
                      <option>Just planning ahead</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Message</span>
                  <textarea
                    rows={6}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400"
                    placeholder="Tell us about your price range, property type, timing, condition concerns, or where the decision feels unclear."
                  />
                </label>
                <button type="submit" className="cta-primary w-full sm:w-auto">
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          <div className="dark-panel p-8 md:p-10">
            <p className="section-label text-brand-300">Office Information</p>
            <h2 className="mt-3 font-display text-4xl text-white">
              Charlotte-based, residential-first, and built for real conversations.
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-7 text-white/72">
              <div className="flex gap-3">
                <MapPinned className="mt-1 h-5 w-5 text-brand-300" />
                <span>Charlotte, North Carolina with coverage across surrounding residential markets.</span>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-brand-300" />
                <span>realty@developthesouth.com</span>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 text-brand-300" />
                <span>(704) 299-2742</span>
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/6 p-6">
              <h3 className="font-display text-2xl text-white">Best-fit starting questions</h3>
              <div className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                {intakePrompts.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/6 p-6">
              <h3 className="font-display text-2xl text-white">Good fit for</h3>
              <div className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                <p>Primary residence buyers</p>
                <p>Move-up sellers and families</p>
                <p>Relocation clients</p>
                <p>New construction buyers</p>
                <p>Clients who want better property-level judgment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
