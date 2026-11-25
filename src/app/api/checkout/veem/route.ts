import { NextResponse } from "next/server"
import {
  createVeemPaymentRequest,
  getVeemPaymentRequest,
} from "@/lib/veem"
import { getPlanPackageById, getPlanById } from "@/lib/plans"
import { getCouponDiscountUsd } from "@/lib/coupons"

export const runtime = "nodejs"

// ─── POST — create a Veem invoice / payment request ──────────────────────────

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      planId?: string
      packageId?: string
      email?: string
      fullName?: string
      phone?: string
      rush?: boolean
      quantity?: number
      couponCode?: string
    }

    const { planId, packageId, email, fullName, phone, rush, quantity, couponCode } = body

    if (!email || !planId) {
      return NextResponse.json(
        { error: "Missing required fields: email and planId" },
        { status: 400 }
      )
    }

    const pkg = getPlanPackageById(planId, packageId ?? "all")
    if (!pkg) {
      return NextResponse.json(
        { error: "Invalid plan or package" },
        { status: 400 }
      )
    }

    const qty = Math.min(99, Math.max(1, Math.round(Number(quantity ?? 1) || 1)))
    const plan = getPlanById(planId)
    const rushPerUnit = rush && plan ? plan.rush12hFeeUsd : 0
    const discountUsd = couponCode ? getCouponDiscountUsd(couponCode) : 0
    const amount = Math.max(0, pkg.priceUsd * qty + rushPerUnit * qty - discountUsd)

    if (amount <= 0) {
      return NextResponse.json(
        { error: "Order total must be greater than $0.00." },
        { status: 400 }
      )
    }

    const paymentRequest = await createVeemPaymentRequest({
      payerEmail: email,
      payerName: fullName,
      payerPhone: phone,
      amountUsd: amount,
      note: `Resumes Uplift — ${pkg.name}${qty > 1 ? ` x${qty}` : ""}${rush ? " (Rush 12h)" : ""}`,
      externalId: `${planId}-${packageId ?? "all"}-${Date.now()}`,
    })

    return NextResponse.json({
      paymentRequestId: paymentRequest.id,
      checkoutUrl: paymentRequest.checkoutUrl,
      status: paymentRequest.status,
      amount: paymentRequest.amount,
      currency: paymentRequest.currency,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("[Veem] POST /api/checkout/veem:", message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

// ─── GET — check payment request status ──────────────────────────────────────

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json(
        { error: "Missing payment request id" },
        { status: 400 }
      )
    }

    const payment = await getVeemPaymentRequest(id)
    return NextResponse.json(payment)
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("[Veem] GET /api/checkout/veem:", message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
