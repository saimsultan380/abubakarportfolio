import { NextResponse } from "next/server"
import { getPlanById } from "@/lib/plans"
import { getPayPalAccessToken, getPayPalBaseUrl } from "@/lib/paypal"

export const runtime = "nodejs"

type CreateOrderBody = {
  planId?: string
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
            reference_id: planId,
            description: plan.name,
            custom_id: planId,
            amount: {
              currency_code: "USD",
              value: plan.priceUsd.toFixed(2),
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

