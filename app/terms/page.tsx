import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage, Section, Ul, Callout } from '../legal-shell'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms that govern your use of southerncitiesrealty.com, including our SMS text messaging program terms, listing data disclaimers, and limitations of liability.',
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="August 19, 2026"
      intro="These terms govern your use of southerncitiesrealty.com and the communications you receive from us. By using the site or opting in to our messages, you agree to them."
    >
      <Section heading="Using this site">
        <p>
          Southern Cities Realty operates this website as an information resource for buyers,
          sellers, and investors. You may use it for your own personal, non-commercial purposes. You
          agree not to scrape, republish, or resell content or listing data from the site, attempt
          to interfere with its operation, or use it for any unlawful purpose.
        </p>
      </Section>

      <Section heading="No agency relationship until it’s in writing">
        <p>
          Using this site, submitting a form, or exchanging messages with us does not by itself
          create an agency relationship, and it does not make us your broker. Under North Carolina
          law, an agency relationship with a real estate broker is created only by a written
          agreement between you and the brokerage. Nothing on this site is legal, tax, appraisal,
          engineering, or financial advice — please consult the appropriate licensed professional.
        </p>
      </Section>

      <Section heading="SMS text messaging terms">
        <p>
          <strong className="font-semibold text-navy-950">Program description.</strong> Southern
          Cities Realty sends text messages to people who ask us to. Depending on what you signed up
          for, messages may include replies to your inquiry, appointment and showing coordination,
          transaction and closing updates, requested property or market information, and news about
          our services and available properties.
        </p>
        <p>
          <strong className="font-semibold text-navy-950">How you opt in.</strong> You opt in by
          starting a chat on this website and providing your mobile number, by texting us first, or
          by giving us written permission. Consent is not a condition of purchasing any property,
          product, or service from us.
        </p>
        <p>
          <strong className="font-semibold text-navy-950">Message frequency.</strong> Message
          frequency varies based on your activity and the stage of your transaction.
        </p>
        <p>
          <strong className="font-semibold text-navy-950">Cost.</strong> Message and data rates may
          apply. These are charged by your mobile carrier, not by us. Check your plan for details.
        </p>
        <Callout>
          <strong className="font-semibold text-navy-950">To opt out,</strong> reply{' '}
          <strong className="font-semibold text-navy-950">STOP</strong> to any message from us. You
          will receive one final message confirming that you have been unsubscribed, and we will
          send no further texts unless you opt in again.
          <br />
          <strong className="font-semibold text-navy-950">For help,</strong> reply{' '}
          <strong className="font-semibold text-navy-950">HELP</strong>, email{' '}
          <a
            href="mailto:admin@southerncitiesrealty.com"
            className="font-semibold text-brand-500 hover:underline"
          >
            admin@southerncitiesrealty.com
          </a>
          , or call{' '}
          <a href="tel:+19809448961" className="font-semibold text-brand-500 hover:underline">
            (980) 944-8961
          </a>
          .
        </Callout>
        <p>
          <strong className="font-semibold text-navy-950">Carriers.</strong> Mobile carriers are not
          liable for delayed or undelivered messages. Delivery is subject to effective transmission
          from your carrier and is not guaranteed.
        </p>
        <p>
          <strong className="font-semibold text-navy-950">Eligibility.</strong> You must be at least
          18 years old and the account holder or authorized user of the mobile number you provide.
          Tell us if your number changes or is reassigned.
        </p>
        <p>
          <strong className="font-semibold text-navy-950">Privacy.</strong> We do not sell or share
          your mobile information with third parties or affiliates for marketing or promotional
          purposes. See our{' '}
          <Link href="/privacy" className="font-semibold text-brand-500 hover:underline">
            Privacy Policy
          </Link>{' '}
          for the details.
        </p>
      </Section>

      <Section heading="Listing information">
        <p>
          Property listings shown or searchable on this site are provided through the Canopy MLS IDX
          system and other third-party sources. That information is deemed reliable but is not
          guaranteed accurate by Southern Cities Realty or the MLS, and it may be out of date.
          Listings are subject to prior sale, change, or withdrawal at any time. Square footage,
          lot size, school assignments, taxes, HOA details, and permitted use should be
          independently verified before you rely on them.
        </p>
      </Section>

      <Section heading="Home value and market estimates">
        <p>
          Any home value estimate, rent estimate, market statistic, or investment figure produced by
          tools on this site is an automated estimate generated from third-party data. It is not an
          appraisal, a broker price opinion, a guarantee of value, or a promise of any investment
          return. Actual value depends on condition, location, improvements, and market timing.
          Estimates should never be the sole basis for a purchase, sale, financing, or investment
          decision.
        </p>
      </Section>

      <Section heading="Fair housing and equal opportunity">
        <p>
          Southern Cities Realty supports the federal Fair Housing Act and the North Carolina Fair
          Housing Act. All properties advertised on this site are available on an equal opportunity
          basis, without regard to race, color, religion, sex, familial status, national origin,
          disability, or any other protected characteristic.
        </p>
      </Section>

      <Section heading="Intellectual property">
        <p>
          The site’s design, text, photography, logos, and the Southern Cities Realty name are owned
          by us or used with permission, and are protected by copyright and trademark law. Listing
          content belongs to its respective owners. You may not reproduce or distribute any of it
          without written permission.
        </p>
      </Section>

      <Section heading="Third-party links and services">
        <p>
          This site links to and embeds services we do not control, including the MLS search system
          and our chat and messaging tools. We are not responsible for the content, accuracy, or
          practices of those third parties, and your use of them is governed by their own terms.
        </p>
      </Section>

      <Section heading="Disclaimers and limitation of liability">
        <p>
          The site is provided “as is” and “as available,” without warranties of any kind, express or
          implied, including any implied warranty of merchantability, fitness for a particular
          purpose, or non-infringement. We do not warrant that the site will be uninterrupted,
          error-free, or free of harmful components.
        </p>
        <p>
          To the fullest extent permitted by law, Southern Cities Realty and its brokers, agents, and
          staff are not liable for any indirect, incidental, special, consequential, or punitive
          damages, or any loss of profits or data, arising out of your use of this site or reliance
          on information found here. Nothing in these terms limits any obligation we owe you under
          North Carolina real estate license law or under a written agency agreement.
        </p>
      </Section>

      <Section heading="Governing law">
        <p>
          These terms are governed by the laws of the State of North Carolina, without regard to its
          conflict-of-laws rules. Any dispute will be brought in the state or federal courts located
          in Mecklenburg County, North Carolina.
        </p>
      </Section>

      <Section heading="Changes to these terms">
        <p>
          We may update these terms from time to time. The “last updated” date at the top of this
          page tells you when. Continuing to use the site after a change means you accept the
          updated terms.
        </p>
      </Section>

      <Section heading="Contact us">
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
      </Section>
    </LegalPage>
  )
}
