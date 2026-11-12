import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { service, stripe } from "@/lib/marketplace/server";
import { paidThrough } from "@/lib/marketplace/policy";
export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  if (
    !process.env.STRIPE_WEBHOOK_SECRET_REALTY ||
    !process.env.STRIPE_SECRET_KEY
  )
    return new NextResponse("Unavailable", { status: 503 });
  const client = stripe();
  let event: Stripe.Event;
  try {
    event = client.webhooks.constructEvent(
      await request.text(),
      request.headers.get("stripe-signature") || "",
      process.env.STRIPE_WEBHOOK_SECRET_REALTY,
    );
  } catch {
    return new NextResponse("Invalid signature", { status: 400 });
  }
  const object = event.data.object as unknown as {
    id: string;
    object: string;
    subscription?: string;
    parent?: { subscription_details?: { subscription?: string } };
  };
  const supported = [
    "customer.subscription.created",
    "customer.subscription.updated",
    "customer.subscription.deleted",
    "invoice.paid",
    "invoice.payment_failed",
    "checkout.session.completed",
    "checkout.session.async_payment_succeeded",
  ];
  if (!supported.includes(event.type))
    return NextResponse.json({ received: true });
  const id =
    object.object === "subscription"
      ? object.id
      : object.subscription ||
        object.parent?.subscription_details?.subscription;
  if (!id) return NextResponse.json({ received: true });
  try {
    // Retrieve current state instead of trusting an old event payload.
    const subscription = await client.subscriptions.retrieve(id, {
      expand: ["latest_invoice"],
    });
    const userID = subscription.metadata.realty_user_id;
    if (!userID) return NextResponse.json({ received: true });
    const eligible = subscription.items.data.some(
      (item) => item.price.id === process.env.STRIPE_REALTY_MEMBERSHIP_PRICE_ID,
    );
    const { error } = await service().rpc("realty_sync_billing", {
      event_id: event.id,
      event_created: event.created,
      member_id: userID,
      customer:
        typeof subscription.customer === "string"
          ? subscription.customer
          : subscription.customer.id,
      subscription: subscription.id,
      billing_status: eligible ? subscription.status : "ineligible",
      paid_until: new Date(
        (eligible ? paidThrough(subscription) : 0) * 1000,
      ).toISOString(),
    });
    if (error) throw error;
    return NextResponse.json({ received: true });
  } catch {
    return new NextResponse("Retry later", { status: 500 });
  }
}
