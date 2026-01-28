import { NextResponse } from "next/server"
import { getPayPalAccessToken, getPayPalBaseUrl } from "@/lib/paypal"

export const runtime = "nodejs"

type CaptureBody = {
  orderId?: string
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CaptureBody
    const orderId = body.orderId?.toString()
    if (!orderId) {
      return NextResponse.json({ error: "Missing orderId." }, { status: 400 })
    }

    const token = await getPayPalAccessToken()

    const res = await fetch(`${getPayPalBaseUrl()}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })

    const data = (await res.json()) as { status?: string; message?: string; details?: unknown }
    if (!res.ok) {
      return NextResponse.json(
        { error: data.message ?? "Unable to capture PayPal order.", details: data.details ?? null },
        { status: 500 }
      )
    }

    if (data.status !== "COMPLETED") {
      return NextResponse.json({ error: `Unexpected PayPal status: ${data.status ?? "UNKNOWN"}` }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "PayPal capture failed." },
      { status: 500 }
    )
  }
}

