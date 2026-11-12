import { authenticate, requestPasswordReset } from "../actions";
import { configured } from "@/lib/marketplace/server";
export default function Account({
  searchParams,
}: {
  searchParams: { message?: string };
}) {
  return (
    <div className="mx-auto max-w-lg">
      <p className="section-label">Your deal room account</p>
      <h1 className="section-title mt-3">Welcome in.</h1>
      <p className="section-copy mt-4">
        Create a free account to submit deals, or sign in to manage submissions
        and membership.
      </p>
      {searchParams.message && (
        <p role="status" className="my-5 rounded-xl bg-white p-4">
          {searchParams.message}
        </p>
      )}
      {configured() ? (
        <form action={authenticate} className="glass-panel mt-8 space-y-5 p-7">
          <label className="block">
            Email
            <input
              className="mt-2 w-full rounded-xl border p-3"
              type="email"
              name="email"
              autoComplete="email"
              required
              maxLength={254}
            />
          </label>
          <label className="block">
            Password
            <input
              className="mt-2 w-full rounded-xl border p-3"
              type="password"
              name="password"
              autoComplete="current-password"
              minLength={12}
              maxLength={128}
              required
            />
          </label>
          <p className="text-sm text-slate-600">
            Use at least 12 characters. New accounts must confirm their email
            before signing in.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="cta-primary" name="mode" value="signin">
              Sign in
            </button>
            <button className="cta-secondary" name="mode" value="signup">
              Create account
            </button>
          </div>
        </form>
      ) : (
        <p className="glass-panel mt-8 p-6">
          The deal room is being prepared. Contact{" "}
          <a
            className="underline"
            href="mailto:darius@southerncitiesrealty.com"
          >
            Southern Cities Realty
          </a>{" "}
          to submit an opportunity or ask about membership.
        </p>
      )}
      {configured() && (
        <details className="mt-6">
          <summary className="cursor-pointer text-sm font-semibold">
            Forgot your password?
          </summary>
          <form action={requestPasswordReset} className="mt-4 space-y-4">
            <label className="block text-sm">
              Account email
              <input
                className="mt-2 w-full rounded-xl border p-3"
                type="email"
                name="email"
                autoComplete="email"
                maxLength={254}
                required
              />
            </label>
            <button className="cta-secondary">Send reset link</button>
          </form>
        </details>
      )}
    </div>
  );
}
