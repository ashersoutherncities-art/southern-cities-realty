import "server-only";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";

export const configured = () =>
  !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
export function database() {
  const jar = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => jar.getAll(),
        setAll: (values) => {
          try {
            values.forEach(({ name, value, options }) =>
              jar.set(name, value, options),
            );
          } catch {
            /* Refreshed in route handlers. */
          }
        },
      },
    },
  );
}
export function service() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
export async function account() {
  if (!configured()) redirect("/deals/account");
  const db = database();
  const {
    data: { user },
  } = await db.auth.getUser();
  if (!user) redirect("/deals/account");
  return { db, user, admin: user.app_metadata?.realty_admin === true };
}
export async function administrator() {
  const session = await account();
  if (!session.admin) redirect("/deals/dashboard");
  return session;
}
export const stripe = () => new Stripe(process.env.STRIPE_SECRET_KEY!);
export const siteURL = () =>
  process.env.NEXT_PUBLIC_SITE_URL || "https://southerncitiesrealty.com";
export function check(error: { message: string } | null) {
  if (error)
    throw new Error(
      "Unable to save this change. Please try again or contact Southern Cities Realty.",
    );
}
