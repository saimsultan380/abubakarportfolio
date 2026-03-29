import { NextResponse } from "next/server"
import { getPlanById, getPlanPackageById } from "@/lib/plans"
import { getCouponDiscountUsd } from "@/lib/coupons"
import { getPayPalAccessToken, getPayPalBaseUrl } from "@/lib/paypal"

export const runtime = "nodejs"

function parseCheckoutQuantity(raw: unknown): number {
  const n = typeof raw === "number" ? raw : Number.parseInt(String(raw ?? "1"), 10)
  if (!Number.isFinite(n) || n < 1) return 1
  return Math.min(99, Math.floor(n))
}

type CreateOrderBody = {
  planId?: string
  packageId?: string
  rush12h?: boolean
  quantity?: number
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

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CreateOrderBody
    const planId = body.planId?.toString()
    const plan = getPlanById(planId)
    if (!planId || !plan) {
      return NextResponse.json({ error: "Invalid plan." }, { status: 400 })
    }

    const pkg = getPlanPackageById(planId, body.packageId?.toString() ?? null)
    if (!pkg) {
      return NextResponse.json({ error: "Invalid package." }, { status: 400 })
    }

    const rush12h = Boolean(body.rush12h)
    const quantity = parseCheckoutQuantity(body.quantity)
    const discountUsd = getCouponDiscountUsd(body.couponCode)
    const perUnitUsd = pkg.priceUsd + (rush12h ? plan.rush12hFeeUsd : 0)
    const totalUsd = Math.max(0.01, perUnitUsd * quantity - discountUsd)

    const customerEmail = body.customer?.email?.toString().trim() ?? ""
    if (!customerEmail) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 })
    }

    const token = await getPayPalAccessToken()

    const res = await fetch(`${getPayPalBaseUrl()}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: `${planId}:${pkg.id}${rush12h ? ":rush12h" : ""}:q${quantity}`,
            description: `${plan.name} — ${pkg.name}${quantity > 1 ? ` × ${quantity}` : ""}${rush12h ? " (12h / item)" : ""}`,
            custom_id: `${planId}:${pkg.id}${rush12h ? ":rush12h" : ""}:q${quantity}`,
            amount: {
              currency_code: "USD",
              value: totalUsd.toFixed(2),
            },
          },
        ],
        payer: {
          email_address: customerEmail,
          name: body.customer?.fullName
            ? (() => {
                const parts = body.customer!.fullName!.trim().split(/\s+/)
                return {
                  given_name: parts[0] ?? "Customer",
                  surname: parts.slice(1).join(" ") || "Customer",
                }
              })()
            : undefined,
        },
        application_context: {
          shipping_preference: "NO_SHIPPING",
          user_action: "PAY_NOW",
        },
      }),
    })

    const data = (await res.json()) as { id?: string; message?: string; details?: unknown }
    if (!res.ok || !data.id) {
      return NextResponse.json(
        { error: data.message ?? "Unable to create PayPal order.", details: data.details ?? null },
        { status: 500 }
      )
    }

    return NextResponse.json({ orderId: data.id })
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "PayPal create order failed." },
      { status: 500 }
    )
  }
}

