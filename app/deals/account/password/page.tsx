import { account } from "@/lib/marketplace/server";
import { changePassword } from "../../actions";
export default async function Password() {
  await account();
  return (
    <div className="max-w-lg">
      <h1 className="section-title">Set your password.</h1>
      <form className="glass-panel mt-7 space-y-5 p-7" action={changePassword}>
        <label className="block">
          New password
          <input
            className="mt-2 w-full rounded-xl border p-3"
            type="password"
            name="password"
            autoComplete="new-password"
            minLength={12}
            maxLength={128}
            required
          />
        </label>
        <p className="text-sm text-slate-600">Use at least 12 characters.</p>
        <button className="cta-primary">Update password</button>
      </form>
    </div>
  );
}
