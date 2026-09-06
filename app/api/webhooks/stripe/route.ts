import db from "@/db/drizzle";
import { userSubscription } from "@/db/schema";
import { stripe } from "@/lib/stripe";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return new NextResponse("Missing Stripe signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid webhook payload";
    return new NextResponse(`Webhook error: ${message}`, {
      status: 400,
    });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    const subscriptionItem = subscription.items.data[0];

    if (!session?.metadata?.userId) {
      return new NextResponse("User ID is required", { status: 400 });
    }

    await db.insert(userSubscription).values({
      userId: session.metadata.userId,
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: subscription.customer as string,
      stripePriceId: subscriptionItem.price.id,
      stripeCurrentPeriodEnd: new Date(
        subscriptionItem.current_period_end * 1000
      ),
    });
  }

  if (event.type === "invoice.payment_succeeded") {
    const invoice = event.data.object as Stripe.Invoice;
    const subscriptionRef = invoice.parent?.subscription_details?.subscription;

    if (!subscriptionRef) {
      return new NextResponse("Invoice has no subscription", { status: 400 });
    }

    const subscription = await stripe.subscriptions.retrieve(
      typeof subscriptionRef === "string" ? subscriptionRef : subscriptionRef.id
    );
    const subscriptionItem = subscription.items.data[0];

    await db
      .update(userSubscription)
      .set({
        stripePriceId: subscriptionItem.price.id,
        stripeCurrentPeriodEnd: new Date(
          subscriptionItem.current_period_end * 1000
        ),
      })
      .where(
        eq(userSubscription.stripeSubscriptionId, subscription.id)
      );
  }

  return new NextResponse(null, { status: 200 });
}
