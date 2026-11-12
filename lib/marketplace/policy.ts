export const CONSENT_VERSION = "2026-11-12-v1";
export const CONSENT =
  "I authorize Southern Cities Realty to review, edit, package, and market this submitted opportunity and the materials I designate for marketing to its paid members and prospective buyers. I confirm I own the property or have current written authority from the owner or contract holder to submit and market this interest, and permission to share these materials. I will disclose assignment restrictions, brokerage relationships, fees, and material facts. This permission is nonexclusive and does not create an agency agreement or guarantee publication, financing, or sale. I may request withdrawal through my dashboard; Southern Cities Realty will stop future marketing after processing the request, but cannot recall previously delivered materials. Private authority documents and contact details will not be included in member packages.";
export const STATUSES = [
  "submitted",
  "needs_information",
  "approved",
  "published",
  "rejected",
  "withdrawn",
] as const;
export function passwordValue(value: FormDataEntryValue | null) {
  if (typeof value !== 'string' || value.length < 1 || value.length > 128) throw new Error('Enter a valid password.');
  return value;
}
export function amount(value: FormDataEntryValue | null, required = true) {
  const number = Number(value);
  if (
    (!value && required) ||
    !Number.isFinite(number) ||
    number < 0 ||
    number > 100000000
  )
    throw new Error("Enter a valid amount.");
  return number;
}
export function text(value: FormDataEntryValue | null, max = 4000) {
  if (typeof value !== "string" || !value.trim() || value.length > max)
    throw new Error(
      "Complete all required fields within the displayed limits.",
    );
  return value.trim();
}
export function paidThrough(subscription: {
  status: string;
  current_period_end?: number;
  items: { data: { current_period_end?: number }[] };
  latest_invoice: unknown;
}) {
  const invoice = subscription.latest_invoice as { status?: string } | null;
  return subscription.status === "active" && invoice?.status === "paid"
    ? subscription.items.data[0]?.current_period_end ||
        subscription.current_period_end ||
        0
    : 0;
}
