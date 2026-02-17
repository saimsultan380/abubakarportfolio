import Stripe from "stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { getPlanById, packageAmountCents, getPlanPackageById } from "@/lib/plans"
import { getCouponDiscountUsd } from "@/lib/coupons"

export const runtime = "nodejs"

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

const stripe =
  stripeSecretKey
    ? new Stripe(stripeSecretKey, {
        // Leaving apiVersion unspecified uses your Stripe account default.
        // If you want to pin it, set apiVersion here.
      })
    : null

type StripeCheckoutBody = {
  planId?: string
  packageId?: string
  rush12h?: boolean
  couponCode?: string
  customer?: {
    fullName?: string
    email?: string
    phone?: string
    country?: string
    addressLine1?: string
    city?: string
    postalCode?: string
    notes?: string
  }
}

async function getOrigin() {
  const h = await headers()
  const origin = h.get("origin")
  if (origin) return origin
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (siteUrl) return siteUrl
  return "http://localhost:3000"
}

export async function POST(req: Request) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured. Set STRIPE_SECRET_KEY." },
        { status: 500 }
      )
    }

    const body = (await req.json()) as StripeCheckoutBody
    const planId = body.planId?.toString()
    const plan = getPlanById(planId)
    if (!planId || !plan) {
      return NextResponse.json({ error: "Invalid plan." }, { status: 400 })
    }

    const pkg = getPlanPackageById(planId, body.packageId?.toString() ?? null)
    if (!pkg) {
      return NextResponse.json({ error: "Invalid package." }, { status: 400 })
    }

    const baseAmount = packageAmountCents(planId, body.packageId?.toString() ?? null)
    if (!baseAmount) {
      return NextResponse.json({ error: "Invalid amount." }, { status: 400 })
    }

    const rush12h = Boolean(body.rush12h)
    const rushFee = rush12h ? Math.round(plan.rush12hFeeUsd * 100) : 0
    const discountCents = Math.round(getCouponDiscountUsd(body.couponCode) * 100)
    const amount = Math.max(50, baseAmount + rushFee - discountCents)

    const customerEmail = body.customer?.email?.toString().trim() ?? ""
    if (!customerEmail) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 })
    }

    const origin = await getOrigin()

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: customerEmail,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: amount,
            product_data: {
              name: `${plan.name} — ${pkg.name}${rush12h ? " (12h)" : ""}`,
              description: plan.description,
            },
          },
        },
      ],
      metadata: {
        planId,
        packageId: pkg.id,
        packageName: pkg.name,
        rush12h: rush12h ? "1" : "0",
        fullName: body.customer?.fullName ?? "",
        phone: body.customer?.phone ?? "",
        country: body.customer?.country ?? "",
        addressLine1: body.customer?.addressLine1 ?? "",
        city: body.customer?.city ?? "",
        postalCode: body.customer?.postalCode ?? "",
        notes: body.customer?.notes ?? "",
      },
      success_url: `${origin}/checkout/success?provider=stripe&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
    })

    if (!session.url) {
      return NextResponse.json({ error: "Stripe did not return a checkout URL." }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Stripe checkout failed." },
      { status: 500 }
    )
  }
}

