import { CONTACT, WHATSAPP_URL } from "@/lib/contact"
import type { PackageId, PlanId, PricingPlan } from "@/lib/plans"
import { getPlanPackage, getRevisionsForPackage } from "@/lib/plans"

export type ResumeIntent = "revamp" | "scratch" | ""

export type WhatsAppOrderCustomer = {
  fullName: string
  email: string
  phone: string
  country: string
  addressLine1: string
  city: string
  postalCode: string
  notes: string
}

export type WhatsAppOrderInput = {
  plan: PricingPlan
  planId: PlanId
  packageId: PackageId
  quantity: number
  rush12h: boolean
  intent: ResumeIntent
  couponCode?: string
  couponDiscountUsd?: number
  customer: WhatsAppOrderCustomer
}

function money(amountUsd: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amountUsd)
}

function resumeTypeLabel(intent: ResumeIntent) {
  if (intent === "scratch") return "Resume from scratch"
  if (intent === "revamp") return "Resume revamp"
  return "Not selected"
}

export function buildWhatsAppOrderMessage(input: WhatsAppOrderInput): string {
  const pkg = getPlanPackage(input.plan, input.packageId)
  const packageName = pkg?.name ?? "Custom package"
  const includes = pkg?.includes?.join(", ") ?? "—"
  const unitPrice = pkg?.priceUsd ?? input.plan.priceUsd
  const rushFee = input.rush12h ? input.plan.rush12hFeeUsd : 0
  const subtotal = unitPrice * input.quantity + rushFee * input.quantity
  const discount = Math.max(0, input.couponDiscountUsd ?? 0)
  const total = Math.max(0, subtotal - discount)
  const includesResume =
    input.packageId === "resume" ||
    input.packageId === "cover_resume" ||
    input.packageId === "linkedin_resume" ||
    input.packageId === "all"

  const lines = [
    `Hi ${CONTACT.legalName} — I'd like to place an order.`,
    "",
    "—— Order details ——",
    `Plan: ${input.plan.name}`,
    `Package: ${packageName}`,
    `Includes: ${includes}`,
    `Quantity: ${input.quantity}`,
    `Unit price: ${money(unitPrice)}`,
    `Rush 12h delivery: ${input.rush12h ? `Yes (+${money(input.plan.rush12hFeeUsd)} / item)` : "No"}`,
    `Standard delivery: ${input.plan.deliveryDays} day(s)`,
    `Revisions: ${getRevisionsForPackage(input.packageId)}`,
  ]

  if (includesResume) {
    lines.push(`Resume type: ${resumeTypeLabel(input.intent)}`)
  }

  if (input.couponCode?.trim()) {
    lines.push(`Coupon: ${input.couponCode.trim()}`)
    if (discount > 0) lines.push(`Coupon discount: −${money(discount)}`)
  }

  lines.push(
    `Subtotal: ${money(subtotal)}`,
    `Total: ${money(total)}`,
    "",
    "—— Customer details ——",
    `Name: ${input.customer.fullName.trim()}`,
    `Email: ${input.customer.email.trim()}`,
    `Phone: ${input.customer.phone.trim()}`,
    `Country: ${input.customer.country.trim()}`,
    `Address: ${input.customer.addressLine1.trim()}`,
    `City: ${input.customer.city.trim()}`,
    `Postal code: ${input.customer.postalCode.trim()}`,
  )

  if (input.customer.notes.trim()) {
    lines.push("", "—— Notes ——", input.customer.notes.trim())
  }

  lines.push(
    "",
    "Please confirm availability and payment instructions. Thank you!",
  )

  return lines.join("\n")
}

export function buildWhatsAppOrderUrl(input: WhatsAppOrderInput): string {
  const text = buildWhatsAppOrderMessage(input)
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}
