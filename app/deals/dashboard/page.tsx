import Link from "next/link";
import { account, check } from "@/lib/marketplace/server";
import {
  billingPortal,
  checkout,
  signout,
  withdraw,
  updateNotes,
} from "../actions";
import { Upload } from "../components";
export default async function Dashboard({
  searchParams,
}: {
  searchParams: { message?: string };
}) {
  const { db, user, admin } = await account();
  const [deals, membership, files] = await Promise.all([
    db
      .from("realty_submissions")
      .select("id,address,status,notes,feedback,created_at")
      .eq("submitter_id", user.id)
      .order("created_at", { ascending: false }),
    db.rpc("realty_has_access"),
    db.from("realty_files").select("id,deal_id,name,audience"),
  ]);
  check(deals.error);
  check(membership.error);
  check(files.error);
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <p className="section-label">Your workspace</p>
          <h1 className="section-title mt-3">Welcome back.</h1>
          <p className="mt-4 text-slate-600">{user.email}</p>
        </div>
        <form action={signout}>
          <button className="cta-secondary">Sign out</button>
        </form>
      </div>
      {searchParams.message && (
        <p className="glass-panel my-6 p-4" role="status">
          {searchParams.message}
        </p>
      )}
      <section className="glass-panel my-8 flex flex-wrap items-center justify-between gap-5 p-7">
        <div>
          <h2 className="text-xl font-semibold">Deal room membership</h2>
          <p className="mt-2 text-slate-600">
            {membership.data
              ? "Your access is active. Explore the published packages."
              : "Join for $59/month to access reviewed, published opportunities. Cancel through Manage billing. Submitting deals is free."}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {membership.data ? (
            <Link className="cta-primary" href="/deals/members">
              View opportunities
            </Link>
          ) : (
            <form action={checkout}>
              <button className="cta-primary">View membership checkout</button>
            </form>
          )}
          <form action={billingPortal}>
            <button className="cta-secondary">Manage billing</button>
          </form>
        </div>
      </section>
      {admin && (
        <Link className="cta-secondary mb-8" href="/deals/admin">
          Open review desk
        </Link>
      )}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-3xl text-navy-950">
          Your submissions
        </h2>
        <Link className="cta-secondary" href="/deals/submit">
          Submit a deal
        </Link>
      </div>
      {!deals.data?.length && (
        <p className="py-8 text-slate-600">
          Your submitted opportunities will appear here.
        </p>
      )}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {deals.data?.map((deal) => (
          <article className="glass-panel p-6" key={deal.id}>
            <p className="section-label">{deal.status.replaceAll("_", " ")}</p>
            <h3 className="mt-3 text-xl font-semibold">{deal.address}</h3>
            {deal.feedback && (
              <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm">
                Team feedback: {deal.feedback}
              </p>
            )}
            <ul className="mt-4 space-y-2">
              {files.data
                ?.filter((file) => file.deal_id === deal.id)
                .map((file) => (
                  <li key={file.id}>
                    <a
                      className="text-sm underline"
                      href={`/api/deals/files/${file.id}`}
                    >
                      {file.name} ({file.audience})
                    </a>
                  </li>
                ))}
            </ul>
            {deal.status !== "withdrawn" && (
              <>
                <Upload id={deal.id} />
                {["submitted", "needs_information"].includes(deal.status) && (
                  <form action={updateNotes} className="mt-5 space-y-3">
                    <input type="hidden" name="id" value={deal.id} />
                    <label className="block text-sm font-medium">
                      Update deal details / respond to our team
                      <textarea
                        name="notes"
                        className="mt-2 w-full rounded-xl border p-3"
                        rows={4}
                        maxLength={4000}
                        required
                        defaultValue={deal.notes}
                      />
                    </label>
                    <button className="cta-secondary">
                      Save and resubmit information
                    </button>
                  </form>
                )}
                <form className="mt-4" action={withdraw}>
                  <input name="id" type="hidden" value={deal.id} />
                  <button className="text-sm text-red-700 underline">
                    Withdraw permission and remove from marketing
                  </button>
                </form>
              </>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
