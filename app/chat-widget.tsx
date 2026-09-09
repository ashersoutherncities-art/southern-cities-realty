/**
 * LeadConnector (GHL) chat widget — rendered site-wide from the root layout.
 *
 * Two things here are deliberate, both driven by GHL's A2P compliance crawler
 * (headless Chrome; verified in Vercel logs on 2026-08-19):
 *
 * 1. A plain <script> tag, not next/script. The crawler reads server-rendered
 *    HTML and does not run JS, so next/script's "afterInteractive" strategy —
 *    which injects the tag on the client — reads to it as "widget not installed."
 *    The markup here is byte-identical to the snippet GHL hands out.
 *
 * 2. On EVERY page. The crawler starts at the homepage and follows the nav into
 *    interior pages; any page without the widget fails the check. Its companion
 *    check also rejects any page that collects a phone number alongside the
 *    widget, which is why the site's forms no longer have a phone field — the
 *    chat widget is the single SMS opt-in source, and it collects the phone
 *    number itself. Do not add a phone input to a web form without revisiting
 *    the A2P campaign.
 */
export function ChatWidget() {
  return (
    <script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a85fbe57ecb78b58d2f174d"
      data-source="WEB_USER"
    />
  )
}
