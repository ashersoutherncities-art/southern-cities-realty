import { notFound, redirect } from "next/navigation";
import { account, check } from "@/lib/marketplace/server";
import { money } from "../../components";
export default async function Opportunity({
  params,
}: {
  params: { id: string };
}) {
  const { db } = await account();
  const access = await db.rpc("realty_has_access");
  check(access.error);
  if (!access.data) redirect("/deals/members");
  const { data: deal, error } = await db
    .from("realty_packages")
    .select("*")
    .eq("deal_id", params.id)
    .eq("status", "published")
    .maybeSingle();
  check(error);
  if (!deal) notFound();
  const files = await db
    .from("realty_files")
    .select("id,name")
    .eq("deal_id", deal.deal_id)
    .eq("audience", "member");
  check(files.error);
  return (
    <article className="max-w-4xl">
      <p className="section-label">
        {deal.city}, {deal.state} · {deal.bedrooms} bedrooms · {deal.bathrooms}{" "}
        bathrooms
      </p>
      <h1 className="section-title mt-4">{deal.title}</h1>
      <p className="mt-5 text-lg text-slate-600">{deal.address}</p>
      <div className="glass-panel mt-8 p-7">
        <p className="whitespace-pre-wrap leading-8 text-slate-700">
          {deal.summary}
        </p>
        <dl className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            ["Acquisition", money(deal.price)],
            ["Estimated repairs", money(deal.repairs)],
            ["Disclosed fee", money(deal.fee)],
            ["After-repair value", money(deal.arv)],
            ["Monthly rent estimate", money(deal.rent)],
            ["Monthly PITI estimate", money(deal.piti)],
            [
              "Rent / PITI coverage",
              deal.piti > 0
                ? `${(deal.rent / deal.piti).toFixed(2)}×`
                : "Not provided",
            ],
            [
              "Subtotal before other costs",
              money(deal.price + deal.repairs + deal.fee),
            ],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-sm text-slate-500">{label}</dt>
              <dd className="mt-1 text-xl font-semibold text-navy-950">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-7 text-sm leading-6 text-slate-600">
          PITI means principal, interest, taxes, and insurance. Rent/PITI is an
          illustrative coverage ratio; lenders may calculate DSCR differently.
          Closing, financing, holding costs, vacancy, maintenance, utilities,
          management, and reserves are additional unless specifically itemized.
          These figures are estimates, not a financing commitment or investment
          guarantee.
        </p>
      </div>
      <h2 className="mt-9 text-2xl font-semibold">Package documents</h2>
      <ul className="my-5 space-y-3">
        {files.data?.map((file) => (
          <li key={file.id}>
            <a className="underline" href={`/api/deals/files/${file.id}`}>
              {file.name}
            </a>
          </li>
        ))}
      </ul>
      <a
        className="cta-primary"
        href={`mailto:darius@southerncitiesrealty.com?subject=${encodeURIComponent(`Deal room inquiry: ${deal.title} (${deal.deal_id})`)}`}
      >
        Ask about this opportunity
      </a>
    </article>
  );
}
