import { administrator, check } from "@/lib/marketplace/server";
import { STATUSES } from "@/lib/marketplace/policy";
import { review, removeDocument } from "../actions";
import { Field, Upload, money } from "../components";
export default async function ReviewDesk() {
  const { db } = await administrator();
  const [submissions, packages, files, events] = await Promise.all([
    db
      .from("realty_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100),
    db.from("realty_packages").select("*"),
    db.from("realty_files").select("id,deal_id,name,audience"),
    db
      .from("realty_audit")
      .select("id,deal_id,action,note,created_at")
      .order("created_at", { ascending: false })
      .limit(300),
  ]);
  for (const result of [submissions, packages, files, events])
    check(result.error);
  return (
    <>
      <p className="section-label">Internal review desk</p>
      <h1 className="section-title mt-4">Review. Prepare. Publish.</h1>
      <p className="section-copy mt-4">
        Source documents stay private. Only the package summary and files
        explicitly uploaded as member materials are shared with paying members.
        Verify authority before approving or publishing. Latest 100 submissions
        shown.
      </p>
      <div className="mt-8 space-y-8">
        {!submissions.data?.length && (
          <p className="glass-panel p-8">New submissions will appear here.</p>
        )}
        {submissions.data?.map((deal) => {
          const pack = packages.data?.find((item) => item.deal_id === deal.id);
          return (
            <article className="glass-panel p-6 sm:p-8" key={deal.id}>
              <p className="section-label">
                {deal.status.replaceAll("_", " ")}
              </p>
              <h2 className="mt-3 font-display text-3xl">
                {deal.address}, {deal.city}, {deal.state}
              </h2>
              <p className="mt-4 text-sm text-slate-600">
                {deal.contact_name} · {deal.role} · {deal.phone} · Asking{" "}
                {money(deal.asking_price)}
              </p>
              <p className="my-5 whitespace-pre-wrap leading-7">{deal.notes}</p>
              <details className="rounded-xl border p-4">
                <summary className="cursor-pointer font-semibold">
                  Recorded marketing permission
                </summary>
                <p className="mt-3 text-sm leading-7">{deal.consent_text}</p>
                <p className="mt-3 text-sm">
                  Signed {deal.consent_name} · {deal.consent_at} ·{" "}
                  {deal.consent_version}
                </p>
              </details>
              <ul className="my-5 space-y-2">
                {files.data
                  ?.filter((file) => file.deal_id === deal.id)
                  .map((file) => (
                    <li key={file.id}>
                      <a
                        className="text-sm underline"
                        href={`/api/deals/files/${file.id}`}
                      >
                        {file.name} · {file.audience}
                      </a>
                      <form action={removeDocument} className="mt-1">
                        <input type="hidden" name="file_id" value={file.id} />
                        <button className="text-xs text-red-700 underline">
                          Remove document and return package to review
                        </button>
                      </form>
                    </li>
                  ))}
              </ul>
              {deal.status !== "withdrawn" && (
                <>
                  <Upload id={deal.id} admin />
                  <form className="mt-8 space-y-5" action={review}>
                    <input type="hidden" name="id" value={deal.id} />
                    <input
                      type="hidden"
                      name="revision"
                      value={deal.revision}
                    />
                    <Field
                      name="title"
                      label="Member-facing title"
                      value={
                        pack?.title ||
                        `${deal.bedrooms}-bedroom opportunity in ${deal.city}`
                      }
                      maxLength={140}
                    />
                    <label className="block text-sm font-medium">
                      Member-facing package summary
                      <textarea
                        name="summary"
                        className="mt-2 w-full rounded-xl border p-3"
                        rows={6}
                        required
                        maxLength={8000}
                        defaultValue={pack?.summary || ""}
                      />
                    </label>
                    <div className="grid gap-5 sm:grid-cols-3">
                      {[
                        [
                          "price",
                          "Acquisition price",
                          pack?.price ?? deal.asking_price,
                        ],
                        [
                          "repairs",
                          "Repair estimate",
                          pack?.repairs ?? deal.rehab,
                        ],
                        ["fee", "Disclosed fee", pack?.fee ?? 0],
                        [
                          "package_arv",
                          "After-repair value",
                          pack?.arv ?? deal.arv,
                        ],
                        ["rent", "Monthly rent", pack?.rent ?? 0],
                        ["piti", "Monthly PITI", pack?.piti ?? 0],
                      ].map(([name, label, value]) => (
                        <Field
                          key={String(name)}
                          name={String(name)}
                          label={`${label} ($)`}
                          type="number"
                          value={Number(value)}
                        />
                      ))}
                    </div>
                    <label className="block text-sm font-medium">
                      Feedback visible to submitter
                      <textarea
                        className="mt-2 w-full rounded-xl border p-3"
                        name="feedback"
                        rows={3}
                        maxLength={2000}
                        defaultValue={deal.feedback}
                      />
                    </label>
                    <Field
                      name="review_note"
                      label="Internal review note (include authority check and pricing sources)"
                      maxLength={2000}
                    />
                    <label className="flex gap-3 text-sm">
                      <input
                        type="checkbox"
                        name="authority_verified"
                        defaultChecked={pack?.authority_verified}
                      />
                      <span>
                        I reviewed written authority and confirmed this interest
                        and these member materials may be marketed. Approval and
                        publication require at least one private supporting
                        document.
                      </span>
                    </label>
                    <label className="block text-sm font-medium">
                      Review decision
                      <select
                        className="mt-2 block w-full rounded-xl border p-3"
                        name="status"
                        defaultValue={deal.status}
                      >
                        {STATUSES.filter(
                          (status) => status !== "withdrawn",
                        ).map((status) => (
                          <option key={status} value={status}>
                            {status.replaceAll("_", " ")}
                          </option>
                        ))}
                      </select>
                    </label>
                    <button className="cta-primary">
                      Save review and package
                    </button>
                  </form>
                </>
              )}
              <details className="mt-6 text-sm">
                <summary className="cursor-pointer font-semibold">
                  Review history
                </summary>
                <ul className="mt-3 space-y-3">
                  {events.data
                    ?.filter((event) => event.deal_id === deal.id)
                    .map((event) => (
                      <li key={event.id}>
                        {event.created_at} · {event.action} · {event.note}
                      </li>
                    ))}
                </ul>
              </details>
            </article>
          );
        })}
      </div>
    </>
  );
}
