import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage, Section, Ul, Callout } from '../legal-shell'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Southern Cities Realty collects, uses, and protects the personal information you share with us, including our text messaging privacy commitments.',
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="August 19, 2026"
      intro="Southern Cities Realty respects your privacy. This policy explains what information we collect when you use southerncitiesrealty.com or contact us, how we use it, who we share it with, and the choices you have."
    >
      <Section heading="Who we are">
        <p>
          Southern Cities Realty is a residential real estate brokerage licensed in North Carolina
          (Firm License #C42672), based in Charlotte and serving clients across the state. In this
          policy, “we,” “us,” and “our” refer to Southern Cities Realty. “You” refers to anyone who
          visits our website, submits a form, or communicates with us.
        </p>
      </Section>

      <Section heading="Information we collect">
        <p>
          <strong className="font-semibold text-navy-950">Information you give us.</strong> When you
          submit a contact form, an investor inquiry, a home value request, or a home wishlist, we
          collect what you choose to provide, which may include:
        </p>
        <Ul
          items={[
            'Your name, email address, and phone number',
            'Whether you are buying, selling, investing, or relocating',
            'Areas or neighborhoods you are considering, your timeline, and your budget or price range',
            'Property addresses you ask us to evaluate, and details about a home’s condition',
            'Anything else you write in a message to us, or say to us by phone, text, or chat',
          ]}
        />
        <p>
          <strong className="font-semibold text-navy-950">Information collected automatically.</strong>{' '}
          When you visit the site, our hosting and analytics providers record basic technical
          information such as your IP address, browser and device type, the pages you view, and the
          site or link that referred you. We use privacy-friendly, cookieless web analytics for
          aggregate traffic measurement; we do not use advertising cookies to build profiles about
          you on this site.
        </p>
      </Section>

      <Section heading="How we use your information">
        <Ul
          items={[
            'To respond to your questions and follow up about buying, selling, or investing',
            'To provide the services you asked for, such as home searches, market information, valuation estimates, and listing or showing coordination',
            'To send you transaction updates, appointment confirmations, and information you requested',
            'To send you marketing about our services, where you have not opted out, and text messages only where you have opted in',
            'To operate, secure, and improve our website',
            'To meet our legal, regulatory, and real estate licensing obligations, including recordkeeping required of a licensed North Carolina brokerage',
          ]}
        />
      </Section>

      <Section heading="Text messaging (SMS) privacy">
        <p>
          If you start a chat on this website and give us your mobile number, text us first, or
          otherwise give us your written consent, we may send you text messages about your inquiry,
          your transaction, showings and appointments, and — where you have agreed to it —
          properties and opportunities we think you will want to see. Message frequency varies. Message and data rates may apply. Reply
          STOP at any time to opt out, or HELP for help.
        </p>
        <Callout>
          <strong className="font-semibold text-navy-950">
            We do not sell or share your mobile information.
          </strong>{' '}
          No mobile information will be sold or shared with third parties or affiliates for
          marketing or promotional purposes. All of the categories of sharing described in this
          policy exclude text messaging originator opt-in data and consent; this information will
          not be shared with any third parties.
        </Callout>
        <p>
          Consent to receive text messages is not a condition of buying or selling a home, or of any
          other service we provide. You can withdraw it at any time without affecting your
          relationship with us.
        </p>
      </Section>

      <Section heading="How we share information">
        <p>
          We do not sell your personal information. We share it only in these situations:
        </p>
        <Ul
          items={[
            <>
              <strong className="font-semibold text-navy-950">Service providers.</strong> Companies
              that run parts of our business on our behalf, under contract and only for that
              purpose — our website host, our customer relationship management and messaging
              platform, our email delivery provider, and the property data services that power our
              market and valuation tools.
            </>,
            <>
              <strong className="font-semibold text-navy-950">Transaction participants.</strong>{' '}
              When you are working with us on a purchase or sale, the people needed to complete it —
              such as the other party’s broker, your lender, attorney, title company, inspector,
              appraiser, or an MLS — receive the information required for that transaction.
            </>,
            <>
              <strong className="font-semibold text-navy-950">Our brokers and staff.</strong> The
              licensed brokers and team members working on your inquiry.
            </>,
            <>
              <strong className="font-semibold text-navy-950">Legal and safety.</strong> When
              required by law, subpoena, or regulator, or to protect our rights, our clients, or the
              public.
            </>,
            <>
              <strong className="font-semibold text-navy-950">Business transfers.</strong> If our
              business is merged, acquired, or reorganized, subject to this policy.
            </>,
          ]}
        />
      </Section>

      <Section heading="Property search and third-party sites">
        <p>
          Our property search is provided through the Canopy MLS IDX system and is displayed on our
          site in an embedded window. Searches you run there, and any account you create there, are
          handled under that provider’s own privacy practices. Our site also links to other
          websites we do not control. We are not responsible for the privacy practices of any
          third-party site, and we encourage you to read their policies.
        </p>
      </Section>

      <Section heading="How long we keep information">
        <p>
          We keep your information for as long as we are working with you and afterward for as long
          as we need it for the purposes described here — including the transaction records North
          Carolina requires a licensed brokerage to retain, currently three years from the later of
          the closing or the end of the agency agreement. We delete or de-identify information when
          we no longer need it.
        </p>
      </Section>

      <Section heading="Security">
        <p>
          We use reasonable administrative and technical safeguards to protect your information,
          including encrypted connections to our website and access controls on the systems that
          hold client data. No method of transmission or storage is completely secure, so we cannot
          guarantee absolute security. Please do not send sensitive information such as Social
          Security numbers, bank account numbers, or wire instructions through our website forms or
          by unencrypted email.
        </p>
        <p>
          <strong className="font-semibold text-navy-950">A note on wire fraud:</strong> we will
          never email or text you wire instructions or a change in wiring instructions. Always call
          a number you independently verified before sending funds in a real estate transaction.
        </p>
      </Section>

      <Section heading="Your choices">
        <Ul
          items={[
            'Email: use the unsubscribe link in any marketing email, or email us and ask to be removed.',
            'Text messages: reply STOP to any message, or ask us to remove your number.',
            'Calls: ask us to add you to our internal do-not-call list.',
            'Access, correction, or deletion: email us and we will honor reasonable requests, subject to the records we are legally required to keep.',
          ]}
        />
        <p>
          North Carolina does not currently provide a general consumer privacy statute granting
          these rights, but we extend them to anyone who asks.
        </p>
      </Section>

      <Section heading="Children’s privacy">
        <p>
          Our website and services are intended for adults. We do not knowingly collect personal
          information from anyone under 18. If you believe a child has provided us information,
          contact us and we will delete it.
        </p>
      </Section>

      <Section heading="Fair housing">
        <p>
          Southern Cities Realty is committed to equal housing opportunity. We do not use the
          information we collect to steer, exclude, or otherwise discriminate against anyone on the
          basis of race, color, religion, sex, familial status, national origin, disability, or any
          other protected characteristic.
        </p>
      </Section>

      <Section heading="Changes to this policy">
        <p>
          We may update this policy as our business or the law changes. When we do, we will revise
          the “last updated” date at the top of this page. Material changes will be posted here
          before they take effect.
        </p>
      </Section>

      <Section heading="Contact us">
        <p>
          Questions about this policy, or about the information we hold about you:
        </p>
        <Ul
          items={[
            <>
              Email:{' '}
              <a
                href="mailto:admin@southerncitiesrealty.com"
                className="font-semibold text-brand-500 hover:underline"
              >
                admin@southerncitiesrealty.com
              </a>
            </>,
            <>
              Phone:{' '}
              <a href="tel:+19809448961" className="font-semibold text-brand-500 hover:underline">
                (980) 944-8961
              </a>
            </>,
            <>Mail: Southern Cities Realty, Charlotte, North Carolina</>,
          ]}
        />
        <p>
          See also our{' '}
          <Link href="/terms" className="font-semibold text-brand-500 hover:underline">
            Terms of Service
          </Link>
          , which include our full text messaging terms.
        </p>
      </Section>
    </LegalPage>
  )
}
