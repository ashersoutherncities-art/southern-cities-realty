# Southern Cities Realty deal room

## Included workflow

- `/deals` explains the program and links to submission and membership.
- Free confirmed-email accounts submit property facts and explicit, versioned marketing permission. Typed legal name, exact permission text, and acceptance time are immutable in the database.
- Submitters upload private authority documents and photos, view status and team feedback, and withdraw permission. Withdrawal immediately removes member access.
- Administrators review submissions and source materials, add estimates and disclosed fees, upload member-facing packages, approve, then publish. Publication requires prior approval, verified written authority, and a member document. Changes are audited with optimistic revision checks.
- Active paid members access published package pages and approved documents. Private contracts, submitter contact information, and internal notes remain separate.
- Dedicated Stripe membership costs **$59 USD per month**. Checkout verifies the configured price. Membership requires an active subscription, a paid latest invoice, and an unexpired paid period. The return URL does not grant access. Canceled, unpaid, past-due, paused, or trial subscriptions do not qualify. Cancellation at period end preserves access through the paid term while Stripe reports active.

## Configuration required before launch

The existing Realty Vercel project did not have Supabase or Stripe variables configured during implementation. No production database or live billing was changed.

Use a dedicated Realty database for launch. The existing shared Southern Cities project (`gqmwohackdrmlpsohewp`) contains unrelated finance and operations tables, and its inventory reports RLS disabled on `public.qbo_connection`. Introducing public member accounts there would require resolving that existing access exposure first. This change does not alter that table or its policies.

1. Select a Realty Supabase project. Apply `supabase/migrations/20261112063721_realty_deal_room.sql` to a development/preview database first, then run the acceptance checks below. The migration creates prefixed tables, RLS policies, RPCs, audit history, and the private `realty-documents` bucket. Never make the bucket public or add browser storage policies.
2. Set the variables in `.env.marketplace.example`. Use the deployment's canonical origin for `NEXT_PUBLIC_SITE_URL`. Keep service-role and Stripe secrets server-only. Never commit `.env.local`.
3. Enable Supabase email/password authentication, email confirmation, and production SMTP. Configure the auth site URL and allowed confirmation/reset redirects for the correct environment.
4. Create a dedicated Stripe product/recurring price for Realty deal access at $59 USD monthly. Set its price ID. Create a separate Realty customer-portal configuration for payment-method updates and cancellation at period end, and set `STRIPE_REALTY_BILLING_PORTAL_CONFIGURATION_ID`. This avoids changing other Southern Cities products' portal settings.
5. Register `/api/deals/stripe` as a Stripe webhook for `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.paid`, `invoice.payment_failed`, `checkout.session.completed`, and `checkout.session.async_payment_succeeded`. Set the endpoint signing secret. Use the same test/live mode for all Stripe keys and prices.
6. Give designated reviewers the server-managed Supabase `app_metadata` value `realty_admin: true`, using the Dashboard/admin API. Refresh their sessions. User-editable metadata is never used for authorization. Do not grant this role to submitters or members.
7. Have brokerage counsel review the marketing permission and membership terms for your business and jurisdictions before accepting live submissions. Permission is nonexclusive and does not substitute for agency, listing, assignment, or owner authorization agreements. Change both the displayed version/text and database validation together if revised.

## Checks

`npm ci`, `npm run test:marketplace`, `npm run build`.

The automated integration test runs the actual SQL migration in isolated PostgreSQL through PGlite with minimal Supabase auth/storage schema stubs. It tests anonymous restrictions, submitter isolation, immutable consent, admin-only approval, publication prerequisites, private/member file separation, paid access, replayed/older billing events, expiry, and withdrawal. It does not contact production, send email, or charge a card.

Before production, test against the configured preview Supabase and Stripe test mode:

1. Create and confirm a submitter account. Submit a deal with permission; upload a valid authority PDF. Sign in as a different submitter and confirm the first submission and its documents are inaccessible.
2. Sign in as a reviewer. Request more information and confirm submitter-visible feedback. Review authority, approve, upload a redacted member PDF, then publish. Verify stale reviews are rejected and unapproved submissions cannot publish.
3. Sign in as an unpaid member. Confirm direct package URLs and file API requests do not reveal content. Complete a $59 test checkout, forward signed webhooks, and confirm access begins only after processing.
4. Confirm members can download package documents but cannot download private contracts even with a known file ID. Direct Supabase reads must enforce the same boundary.
5. Cancel, fail renewal, replay webhooks, and simulate expired terms. Confirm access revocation. Test concurrent checkout clicks and customer-portal ownership.
6. Withdraw permission as the submitter. Confirm the package disappears and document requests fail immediately.

## Operational notes

Uploaded files are limited to PDF/JPEG/PNG and 3 MB, checked using MIME and magic bytes. Downloads are authenticated and streamed with `private, no-store` and attachment headers; no durable public URLs are issued. Treat all uploaded documents as untrusted. Documents must be redacted before reviewers upload them for member access.

Each deal supports up to 30 documents. Registration requires an existing object in the private bucket, and uploads are audited. Reviewers can remove documents; removal returns the package to review and blocks member access until it is approved and published again. Submitters can update their notes and resubmit while a deal is submitted or needs information. Account password recovery uses Supabase confirmation links.

Review notes are internal; the separate feedback field is visible to the submitter. The review desk currently shows the latest 100 submissions. Source and audit records are retained after withdrawal; future marketing stops, but already downloaded copies cannot be recalled. Add a documented retention/deletion policy before handling significant volume.

The financial summary separates acquisition price, repairs, and fees. Its subtotal excludes closing, financing, holding, and reserve costs unless described in the package. Rent/PITI is an illustrative coverage calculation, not a universal lender DSCR formula. No deal-specific price, loan amount, or return is guaranteed.
