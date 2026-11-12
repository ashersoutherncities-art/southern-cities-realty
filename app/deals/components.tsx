export function Field({
  name,
  label,
  type = "text",
  value,
  maxLength = 300,
}: {
  name: string;
  label: string;
  type?: string;
  value?: string | number;
  maxLength?: number;
}) {
  return (
    <label className="block text-sm font-medium text-navy-950">
      {label}
      <input
        className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3"
        name={name}
        type={type}
        defaultValue={value}
        required
        maxLength={maxLength}
        {...(type === "number" ? { min: 0, max: 100000000, step: "0.01" } : {})}
      />
    </label>
  );
}
export function Upload({ id, admin = false }: { id: string; admin?: boolean }) {
  return (
    <form
      action="/api/deals/files"
      method="post"
      encType="multipart/form-data"
      className="mt-5 space-y-3 rounded-xl border p-4"
    >
      <input type="hidden" name="deal_id" value={id} />
      <label className="block text-sm">
        {admin
          ? "Add a member package PDF or marketing photo"
          : "Add private proof of authority, contracts, or property photos"}
        <input
          className="mt-2 block w-full text-sm"
          type="file"
          name="file"
          accept="application/pdf,image/jpeg,image/png"
          required
        />
      </label>
      <input
        type="hidden"
        name="audience"
        value={admin ? "member" : "private"}
      />
      <p className="text-xs text-slate-600">
        PDF, JPG, or PNG · Maximum 3 MB. Source documents stay private. Remove
        personal information from member packages.
      </p>
      <button className="cta-secondary" type="submit">
        Upload document
      </button>
    </form>
  );
}
export const money = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
