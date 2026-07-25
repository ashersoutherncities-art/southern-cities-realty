'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPinned, Phone } from 'lucide-react'

const intakePrompts = [
  'What kind of move are you making — buying, selling, or both?',
  'Which areas or neighborhoods are you considering?',
  'What’s your ideal timeline?',
  'Anything about a home’s condition on your mind?',
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
            Let’s talk about your move.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            Whether you’re buying, selling, relocating, or just weighing your options, tell us where
            you are and we’ll help you figure out the smart next step. No pressure, no obligation.
          </p>
        </div>
      </section>

      <section className="page-shell py-20 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="glass-panel p-8 md:p-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-display text-3xl text-navy-950">Send us a message</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Tell us a little about what you’re looking for, and we’ll be in touch soon — usually the same day.
                </p>
              </div>
              <div className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Buyers &amp; sellers welcome
              </div>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-[24px] border border-emerald-200 bg-emerald-50 p-6">
                <h3 className="font-display text-2xl text-emerald-900">Thanks — we got it!</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-800">
                  Thanks for reaching out. We’ll get back to you shortly — usually the same day.
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
                    <span className="mb-2 block text-sm font-semibold text-slate-700">I’m interested in</span>
                    <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400">
                      <option>Buying a home</option>
                      <option>Selling a home</option>
                      <option>Relocating to Charlotte</option>
                      <option>New construction</option>
                      <option>Buying &amp; selling at once</option>
                      <option>Just exploring</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Areas you’re considering</span>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400"
                      placeholder="Charlotte, Fort Mill, Lake Norman…"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Timeline</span>
                    <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400">
                      <option>As soon as possible</option>
                      <option>Next 30 days</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>Just planning ahead</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">How can we help?</span>
                  <textarea
                    rows={6}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400"
                    placeholder="Tell us about your price range, the kind of home you want, your timing, or anything you’re unsure about. The more you share, the more helpful we can be."
                  />
                </label>
                <button type="submit" className="cta-primary w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="dark-panel p-8 md:p-10">
            <p className="section-label text-brand-300">Get In Touch</p>
            <h2 className="mt-3 font-display text-4xl text-white">
              Charlotte-based, and always happy to talk.
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-7 text-white/72">
              <div className="flex gap-3">
                <MapPinned className="mt-1 h-5 w-5 text-brand-300" />
                <span>Charlotte, North Carolina. Serving buyers and sellers across North Carolina.</span>
              </div>
              <a href="mailto:admin@southerncitiesrealty.com" className="flex gap-3 transition hover:text-white">
                <Mail className="mt-1 h-5 w-5 text-brand-300" />
                <span>admin@southerncitiesrealty.com</span>
              </a>
              <a href="tel:+17046040608" className="flex gap-3 transition hover:text-white">
                <Phone className="mt-1 h-5 w-5 text-brand-300" />
                <span>(704) 604-0608</span>
              </a>
            </div>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/6 p-6">
              <h3 className="font-display text-2xl text-white">Reach a broker directly</h3>
              <div className="mt-4 space-y-4 text-sm leading-7 text-white/72">
                <div>
                  <p className="font-semibold text-white">Darius Walton</p>
                  <p className="text-white/60">Broker-in-Charge · NC License #321548</p>
                  <a href="mailto:darius@southerncitiesrealty.com" className="mt-1 block transition hover:text-white">darius@southerncitiesrealty.com</a>
                  <a href="tel:+17046040608" className="block transition hover:text-white">(704) 604-0608</a>
                </div>
                <div>
                  <p className="font-semibold text-white">Madison Moore</p>
                  <p className="text-white/60">Real Estate Broker · NC License #366705</p>
                  <a href="mailto:madison@southerncitiesrealty.com" className="mt-1 block transition hover:text-white">madison@southerncitiesrealty.com</a>
                  <a href="tel:+18282915653" className="block transition hover:text-white">(828) 291-5653</a>
                </div>
                <p className="pt-2 text-xs uppercase tracking-[0.18em] text-white/45">Firm License #C42672</p>
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/6 p-6">
              <h3 className="font-display text-2xl text-white">A few things worth mentioning</h3>
              <div className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                {intakePrompts.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/6 p-6">
              <h3 className="font-display text-2xl text-white">Who we work with</h3>
              <div className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                <p>First-time and move-up buyers</p>
                <p>Homeowners getting ready to sell</p>
                <p>Buyers relocating to Charlotte</p>
                <p>New-construction buyers</p>
                <p>Anyone who wants honest, no-pressure advice</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
