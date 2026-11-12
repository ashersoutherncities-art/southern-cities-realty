"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  account,
  administrator,
  database,
  check,
  stripe,
  siteURL,
  service,
} from "@/lib/marketplace/server";
import {
  amount,
  text,
  CONSENT,
  CONSENT_VERSION,
  STATUSES,
  passwordValue,
} from "@/lib/marketplace/policy";

export async function authenticate(form: FormData) {
  const db = database();
  const email = text(form.get("email"), 254);
  const password = passwordValue(form.get("password"));
  if (password.length < 12)
    redirect("/deals/account?message=Use%20at%20least%2012%20characters");
  const signup = form.get("mode") === "signup";
  const { error } = signup
    ? await db.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${siteURL()}/deals/auth/callback` },
      })
    : await db.auth.signInWithPassword({ email, password });
  if (error)
    redirect(
      "/deals/account?message=Unable%20to%20sign%20in%20or%20register.%20Check%20your%20details%20and%20email%20confirmation.",
    );
  redirect(
    signup
      ? "/deals/account?message=Check%20your%20email%20to%20confirm%20your%20account%2C%20then%20sign%20in."
      : "/deals/dashboard",
  );
}
export async function signout() {
  await database().auth.signOut();
  redirect("/deals");
}
export async function removeDocument(form: FormData) {
  const { db } = await administrator();
  const result = await db.rpc("realty_remove_file", {
    file_id: text(form.get("file_id"), 36),
  });
  check(result.error);
  // Delete the access record first; a failed object cleanup remains private and inaccessible.
  if (result.data)
    await service().storage.from("realty-documents").remove([result.data]);
  revalidatePath("/deals/admin");
  revalidatePath("/deals/members");
  revalidatePath("/deals/dashboard");
}
export async function updateNotes(form: FormData) {
  const { db } = await account();
  check(
    (
      await db.rpc("realty_update_notes", {
        deal_id: text(form.get("id"), 36),
        note: text(form.get("notes")),
      })
    ).error,
  );
  revalidatePath("/deals/dashboard");
  revalidatePath("/deals/admin");
}
export async function requestPasswordReset(form: FormData) {
  const db = database();
  await db.auth.resetPasswordForEmail(text(form.get("email"), 254), {
    redirectTo: `${siteURL()}/deals/auth/callback?reset=1`,
  });
  redirect(
    "/deals/account?message=If%20that%20account%20exists%2C%20check%20your%20email%20for%20a%20password%20reset%20link.",
  );
}
export async function changePassword(form: FormData) {
  const { db } = await account();
  const password = passwordValue(form.get("password"));
  if (password.length < 12) throw new Error("Use at least 12 characters.");
  check((await db.auth.updateUser({ password })).error);
  redirect("/deals/dashboard?message=Password%20updated.");
}
export async function submitDeal(form: FormData) {
  const { db } = await account();
  if (form.get("permission") !== "on")
    throw new Error("Marketing permission is required.");
  const role = text(form.get("role"), 20);
  if (!["wholesaler", "realtor", "owner"].includes(role))
    throw new Error("Choose your role.");
  const { error } = await db.rpc("realty_submit_deal", {
    details: {
      address: text(form.get("address"), 300),
      city: text(form.get("city"), 100),
      state: text(form.get("state"), 2),
      asking_price: amount(form.get("asking_price")),
      bedrooms: amount(form.get("bedrooms")),
      bathrooms: amount(form.get("bathrooms")),
      rehab: amount(form.get("rehab")),
      arv: amount(form.get("arv")),
      role,
      contact_name: text(form.get("contact_name"), 120),
      phone: text(form.get("phone"), 40),
      notes: text(form.get("notes")),
      consent_name: text(form.get("consent_name"), 120),
      consent_text: CONSENT,
      consent_version: CONSENT_VERSION,
    },
  });
  check(error);
  revalidatePath("/deals/dashboard");
  redirect(
    "/deals/dashboard?message=Deal%20submitted.%20Upload%20your%20authority%20documents%20below.",
  );
}
export async function withdraw(form: FormData) {
  const { db } = await account();
  check(
    (
      await db.rpc("realty_withdraw_deal", {
        deal_id: text(form.get("id"), 36),
      })
    ).error,
  );
  revalidatePath("/deals/dashboard");
  revalidatePath("/deals/members");
}
export async function review(form: FormData) {
  const { db } = await administrator();
  const status = text(form.get("status"), 30);
  if (!(STATUSES as readonly string[]).includes(status))
    throw new Error("Invalid status.");
  const { error } = await db.rpc("realty_review_deal", {
    deal_id: text(form.get("id"), 36),
    expected_revision: Number(form.get("revision")),
    package: {
      status,
      title: text(form.get("title"), 140),
      summary: text(form.get("summary"), 8000),
      price: amount(form.get("price")),
      repairs: amount(form.get("repairs")),
      fee: amount(form.get("fee")),
      rent: amount(form.get("rent")),
      piti: amount(form.get("piti")),
      arv: amount(form.get("package_arv")),
      review_note: text(form.get("review_note"), 2000),
      feedback: String(form.get("feedback") || "").slice(0, 2000),
      authority_verified: form.get("authority_verified") === "on",
    },
  });
  check(error);
  revalidatePath("/deals/admin");
  revalidatePath("/deals/members");
  revalidatePath("/deals/dashboard");
}
export async function checkout() {
  const { db, user } = await account();
  const price = process.env.STRIPE_REALTY_MEMBERSHIP_PRICE_ID;
  if (!price || !process.env.STRIPE_SECRET_KEY)
    redirect(
      "/deals/dashboard?message=Membership%20enrollment%20is%20not%20open%20yet.",
    );
  const { data } = await db
    .from("realty_billing")
    .select("customer_id,subscription_id")
    .eq("user_id", user.id)
    .maybeSingle();
  const client = stripe();
  const configuredPrice = await client.prices.retrieve(price);
  if (
    !configuredPrice.active ||
    configuredPrice.currency !== "usd" ||
    configuredPrice.unit_amount !== 5900 ||
    configuredPrice.recurring?.interval !== "month" ||
    configuredPrice.recurring?.interval_count !== 1
  )
    throw new Error("Membership pricing is not configured correctly.");
  if (data?.subscription_id) {
    const subscription = await client.subscriptions.retrieve(
      data.subscription_id,
    );
    if (!["canceled", "incomplete_expired"].includes(subscription.status)) {
      const portal = await client.billingPortal.sessions.create({
        customer: data.customer_id,
        configuration: process.env.STRIPE_REALTY_BILLING_PORTAL_CONFIGURATION_ID,
        return_url: `${siteURL()}/deals/dashboard`,
      });
      redirect(portal.url);
    }
  }
  const attempt = await db.rpc("realty_checkout_key");
  check(attempt.error);
  if (attempt.data === "billing")
    redirect(
      "/deals/dashboard?message=Your%20subscription%20is%20being%20updated.%20Use%20Manage%20billing.",
    );
  // A database-backed attempt keeps concurrent tabs on the same Checkout session.
  const session = await client.checkout.sessions.create(
    {
      mode: "subscription",
      line_items: [{ price, quantity: 1 }],
      ...(data?.customer_id
        ? { customer: data.customer_id }
        : { customer_email: user.email }),
      client_reference_id: user.id,
      metadata: { realty_user_id: user.id },
      subscription_data: { metadata: { realty_user_id: user.id } },
      success_url: `${siteURL()}/deals/dashboard?message=Payment%20received.%20Access%20appears%20after%20billing%20confirmation.`,
      cancel_url: `${siteURL()}/deals/dashboard`,
    },
    { idempotencyKey: `realty-checkout-${user.id}-${attempt.data}` },
  );
  if (!session.url) throw new Error("Checkout is unavailable.");
  redirect(session.url);
}
export async function billingPortal() {
  const { db, user } = await account();
  const { data } = await db
    .from("realty_billing")
    .select("customer_id")
    .eq("user_id", user.id)
    .single();
  if (!data) redirect("/deals/dashboard");
  redirect(
    (
      await stripe().billingPortal.sessions.create({
        customer: data.customer_id,
        configuration: process.env.STRIPE_REALTY_BILLING_PORTAL_CONFIGURATION_ID,
        return_url: `${siteURL()}/deals/dashboard`,
      })
    ).url,
  );
}
