import { account } from "@/lib/marketplace/server";
import { CONSENT, CONSENT_VERSION } from "@/lib/marketplace/policy";
import { Field } from "../components";
import { submitDeal } from "../actions";
export default async function Submit() {
  await account();
  return (
    <div className="max-w-3xl">
      <p className="section-label">For wholesalers, realtors, and owners</p>
      <h1 className="section-title mt-4">Bring us your next opportunity.</h1>
      <p className="section-copy mt-5">
        Submit accurate details and disclose fees, assignment restrictions,
        representation, and material facts. After submitting, upload your
        written authority and supporting documents from your dashboard.
      </p>
      <form
        action={submitDeal}
        className="glass-panel mt-8 space-y-8 p-6 sm:p-8"
      >
        <fieldset>
          <legend className="mb-5 text-xl font-semibold">
            Your relationship to the property
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field name="contact_name" label="Your full name" maxLength={120} />
            <Field name="phone" label="Phone" type="tel" maxLength={40} />
            <label className="block text-sm font-medium">
              Submitting as
              <select
                name="role"
                required
                className="mt-2 w-full rounded-xl border p-3"
              >
                <option value="">Choose your role</option>
                <option value="wholesaler">Wholesaler / contract holder</option>
                <option value="realtor">Realtor / broker</option>
                <option value="owner">Property owner</option>
              </select>
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-5 text-xl font-semibold">
            Property and estimates
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field name="address" label="Street address" />
            <Field name="city" label="City" maxLength={100} />
            <Field name="state" label="State abbreviation" maxLength={2} />
            <Field name="bedrooms" label="Bedrooms" type="number" />
            <Field name="bathrooms" label="Bathrooms" type="number" />
            <Field name="asking_price" label="Asking price ($)" type="number" />
            <Field name="rehab" label="Estimated repairs ($)" type="number" />
            <Field
              name="arv"
              label="Estimated after-repair value ($)"
              type="number"
            />
          </div>
        </fieldset>
        <label className="block text-sm font-medium">
          Deal structure, fees, occupancy, restrictions, and timeline
          <textarea
            className="mt-2 w-full rounded-xl border p-3"
            name="notes"
            rows={5}
            maxLength={4000}
            required
          />
        </label>
        <fieldset className="rounded-2xl bg-slate-50 p-5">
          <legend className="font-semibold">Marketing permission</legend>
          <p className="my-4 text-sm leading-7 text-slate-600">{CONSENT}</p>
          <p className="mb-4 text-xs text-slate-500">
            Permission version {CONSENT_VERSION}
          </p>
          <Field
            name="consent_name"
            label="Type your full legal name"
            maxLength={120}
          />
          <label className="mt-5 flex items-start gap-3 text-sm">
            <input
              className="mt-1"
              type="checkbox"
              name="permission"
              required
            />
            <span>
              I have read and agree to this permission. I will provide written
              proof of my authority for review.
            </span>
          </label>
        </fieldset>
        <button className="cta-primary">Submit for review</button>
      </form>
    </div>
  );
}
