import Link from "next/link";
import { account, check } from "@/lib/marketplace/server";
import { money } from "../components";
export default async function Members() {
  const { db } = await account();
  const access = await db.rpc("realty_has_access");
  check(access.error);
  if (!access.data)
    return (
      <div className="dark-panel max-w-2xl p-9">
        <p className="section-label">Member opportunities</p>
        <h1 className="mt-4 font-display text-4xl text-white">
          Access the complete package.
        </h1>
        <p className="my-6 leading-7 text-slate-200">
          A $59/month membership opens published opportunities, underwriting
          assumptions, and downloadable investment packages. Review the price
          and recurring terms at checkout before subscribing.
        </p>
        <Link className="cta-primary" href="/deals/dashboard">
          Manage membership
        </Link>
      </div>
    );
  const { data, error } = await db
    .from("realty_packages")
    .select("*")
    .eq("status", "published")
    .order("updated_at", { ascending: false });
  check(error);
  return (
    <>
      <p className="section-label">Approved and published</p>
      <h1 className="section-title mt-4">Your next opportunity.</h1>
      <p className="section-copy mt-4">
        Estimates are for evaluation. Independently verify condition, title,
        rent, expenses, and financing before committing.
      </p>
      {!data?.length && (
        <p className="glass-panel mt-8 p-8">
          No opportunities are published yet. Check back as our team completes
          its reviews.
        </p>
      )}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {data?.map((deal) => (
          <Link
            className="glass-panel block p-7 transition hover:shadow-lg"
            key={deal.deal_id}
            href={`/deals/members/${deal.deal_id}`}
          >
            <p className="section-label">
              {deal.city}, {deal.state} · {deal.bedrooms} beds ·{" "}
              {deal.bathrooms} baths
            </p>
            <h2 className="mt-4 font-display text-2xl text-navy-950">
              {deal.title}
            </h2>
            <p className="mt-5 text-slate-600">
              Acquisition {money(deal.price)} · Repairs {money(deal.repairs)}
            </p>
            <p className="mt-4 font-semibold text-brand-500">
              Open investment package →
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
