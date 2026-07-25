import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, CheckCircle2 } from 'lucide-react'
import { Headshot } from '../headshot'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the brokers of Southern Cities Realty — a Charlotte residential brokerage helping buyers and sellers across North Carolina with honest advice and real local knowledge.',
}

const CHARLOTTE_SKYLINE =
  'https://images.pexels.com/photos/20018783/pexels-photo-20018783.jpeg?auto=compress&cs=tinysrgb&w=2000'

const dariusBio = [
  'As Broker-in-Charge of Southern Cities Realty, Darius Walton brings a unique blend of real estate expertise, financial analysis, construction knowledge, and investment strategy to every client relationship. With experience spanning residential and commercial real estate, development, construction, lending, and investment management, he offers clients guidance that goes far beyond a traditional real estate transaction.',
  'Darius earned his Bachelor’s degree in Accounting from NC State University before completing a Master’s in Real Estate Finance & Development at UNC Charlotte’s Childress Klein Center for Real Estate. Throughout his career, he has worked in real estate investment, affordable housing development, mortgage lending, acquisitions, construction, and brokerage, giving him a comprehensive understanding of the market from every angle.',
  'As a licensed North Carolina Real Estate Broker, licensed General Contractor, and former Mortgage Loan Officer, Darius is uniquely equipped to help buyers, sellers, investors, and developers confidently navigate complex transactions. Whether helping a first-time homebuyer, advising an investor, or evaluating development opportunities, his goal is to provide strategic guidance backed by market expertise and data-driven decision-making.',
  'Outside of real estate, Darius enjoys giving back to the community through organizations like Habitat for Humanity, where he supports efforts to create affordable housing and stronger neighborhoods. He is passionate about building lasting relationships and helping clients achieve long-term success through real estate.',
]

const madisonBio = [
  'Madison Moore is a licensed North Carolina real estate agent with Southern Cities Realty, where she is committed to helping buyers, sellers, and investors navigate every step of the real estate journey with confidence.',
  'A North Carolina native and Charlotte resident, Madison graduated cum laude from North Carolina State University with a bachelor’s degree in Economics and a minor in Sociology. She later earned her MBA from the University of North Carolina at Charlotte, further strengthening her business and financial expertise.',
  'In addition to her real estate career, Madison has more than three years of experience in commercial underwriting, following seven months in the banking industry after graduating from NC State. She specializes in evaluating financial risk, analyzing complex transactions, and helping clients make informed decisions. Her background has equipped her with strong analytical, negotiation, and problem-solving skills that she now brings to every real estate transaction.',
  'Whether you’re purchasing your first home, selling your current property, investing, or relocating to the Charlotte area, Madison is committed to providing personalized guidance, clear communication, and a seamless experience from start to finish. She believes every client deserves an advocate who is knowledgeable, responsive, and genuinely invested in helping them achieve their goals.',
  'Outside of real estate, Madison enjoys exploring Charlotte’s neighborhoods, supporting local businesses, creating Charlotte lifestyle content, and spending time with friends and loved ones. Over the years, she has volunteered with organizations including Habitat for Humanity, The Salvation Army, Safe Harbor, and Rise Against Hunger, reflecting her passion for serving others and strengthening the community.',
]

const expect = [
  'Straight answers, even when they are not what you hoped to hear',
  'Fast, personal service from a broker who answers your texts and calls',
  'Deep local knowledge of Charlotte and the surrounding North Carolina markets',
  'A careful, honest read on value so every offer is grounded in real numbers',
]

type Broker = {
  name: string
  role: string
  license: string
  email: string
  phone: string
  phoneHref: string
  photo: string
  initials: string
  bio: string[]
}

const brokers: Broker[] = [
  {
    name: 'Darius Walton',
    role: 'Broker-in-Charge',
    license: 'NC Real Estate License #321548',
    email: 'darius@southerncitiesrealty.com',
    phone: '(704) 604-0608',
    phoneHref: 'tel:+17046040608',
    photo: '/team/darius.jpg',
    initials: 'DW',
    bio: dariusBio,
  },
  {
    name: 'Madison Moore',
    role: 'Real Estate Broker',
    license: 'NC Real Estate License #366705',
    email: 'madison@southerncitiesrealty.com',
    phone: '(828) 291-5653',
    phoneHref: 'tel:+18282915653',
    photo: '/team/madison.jpg',
    initials: 'MM',
    bio: madisonBio,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-24">
        <img
          src={CHARLOTTE_SKYLINE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/60" />
        <div className="page-shell relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="section-label text-brand-300">About Us</p>
            <h1 className="mt-3 font-display text-5xl leading-[1.02] text-white md:text-6xl">
              A Charlotte brokerage that keeps it personal.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Southern Cities Realty is a residential brokerage based in Charlotte, helping buyers and
            sellers across North Carolina. No big-franchise machine, just brokers who know these
            markets and answer their own phones.
          </p>
        </div>
      </section>

      {/* BROKER PROFILES */}
      {brokers.map((b, i) => (
        <section key={b.name} className={i % 2 === 1 ? 'bg-white/60' : ''}>
          <div className="page-shell py-18 md:py-24">
            <div
              className={`grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start ${
                i % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-slate-200 shadow-[0_28px_80px_rgba(15,23,42,0.14)]">
                  <Headshot src={b.photo} name={b.name} initials={b.initials} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 to-transparent p-6 text-white">
                    <p className="font-display text-2xl">{b.name}</p>
                    <p className="text-sm text-white/80">
                      {b.role} · {b.license}
                    </p>
                  </div>
                </div>
                <div className="mt-5 grid gap-2 rounded-2xl border border-slate-200/70 bg-white p-5 text-sm">
                  <a
                    href={`mailto:${b.email}`}
                    className="flex items-center gap-3 text-navy-950 transition hover:text-brand-500"
                  >
                    <Mail className="h-4 w-4 flex-none text-brand-500" />
                    {b.email}
                  </a>
                  <a
                    href={b.phoneHref}
                    className="flex items-center gap-3 text-navy-950 transition hover:text-brand-500"
                  >
                    <Phone className="h-4 w-4 flex-none text-brand-500" />
                    {b.phone}
                  </a>
                </div>
              </div>

              <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <p className="section-label">Meet {b.name.split(' ')[0]}</p>
                <h2 className="section-title mt-3">{b.role}</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  {b.bio.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* WHAT YOU CAN EXPECT */}
      <section className="bg-navy-950 py-20 text-white md:py-24">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label text-brand-300">What You Can Expect</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl">
              The way we work with every client, every time.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
              Whether you are a first-time buyer, a move-up buyer, an investor, or relocating to the
              area, you get the same thing from us: clear communication, real market knowledge, and a
              broker who is genuinely in your corner.
            </p>
          </div>
          <div className="space-y-3">
            {expect.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/6 px-5 py-4 text-sm leading-7 text-white/76"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/70 py-20">
        <div className="page-shell flex flex-col gap-6 rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Work With Us</p>
            <h2 className="section-title mt-3">Ready to make your move with someone in your corner?</h2>
            <p className="section-copy mt-5">
              Whether you are buying, selling, investing, or just weighing your options, let us talk it
              through. No pressure, no obligation.
            </p>
          </div>
          <Link href="/contact" className="cta-primary">
            Let’s Talk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
