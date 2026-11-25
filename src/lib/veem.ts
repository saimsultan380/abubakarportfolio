import crypto from "node:crypto"

// ─── Safe JSON helper ─────────────────────────────────────────────────────────

async function safeJson<T>(res: Response): Promise<T> {
  const text = await res.text()
  try {
    return JSON.parse(text) as T
  } catch {
    const preview = text.slice(0, 300).replace(/\s+/g, " ")
    throw new Error(
      `Veem API returned non-JSON (${res.status}). Preview: ${preview}`
    )
  }
}

// ─── Environment ─────────────────────────────────────────────────────────────

type VeemEnv = "sandbox" | "live"

function getVeemEnv(): VeemEnv {
  const v = (process.env.VEEM_ENV ?? "sandbox").toLowerCase()
  return v === "live" ? "live" : "sandbox"
}

export function getVeemBaseUrl(): string {
  return getVeemEnv() === "live"
    ? "https://api.veem.com"
    : "https://sandbox-api.veem.com"
}

export function isVeemSandbox(): boolean {
  return getVeemEnv() === "sandbox"
}

// ─── Credentials ─────────────────────────────────────────────────────────────

export function getVeemClientId(): string {
  return process.env.VEEM_CLIENT_ID ?? ""
}

export function getVeemClientSecret(): string {
  return process.env.VEEM_CLIENT_SECRET ?? ""
}

function assertVeemConfigured() {
  if (!getVeemClientId() || !getVeemClientSecret()) {
    throw new Error(
      "Veem is not configured. Set VEEM_CLIENT_ID and VEEM_CLIENT_SECRET in .env.local"
    )
  }
}

// ─── OAuth2 Token (two-legged / client_credentials) ──────────────────────────

export async function getVeemAccessToken(): Promise<string> {
  assertVeemConfigured()

  const auth = Buffer.from(
    `${getVeemClientId()}:${getVeemClientSecret()}`
  ).toString("base64")

  const res = await fetch(`${getVeemBaseUrl()}/oauth/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: "grant_type=client_credentials&scope=all",
  })

  type TokenResponse = {
    access_token?: string
    token_type?: string
    expires_in?: number
    error?: string
    error_description?: string
    message?: string
  }

  const data = await safeJson<TokenResponse>(res)

  if (!res.ok || !data.access_token) {
    throw new Error(
      data.error_description ??
        data.message ??
        data.error ??
        `Veem token error: ${res.status}`
    )
  }

  return data.access_token
}

// ─── Create Invoice / Payment Request (Veem v1.2) ────────────────────────────

export type VeemPaymentRequestInput = {
  /** Payer's email address */
  payerEmail: string
  /** Payer's full name */
  payerName?: string
  /** Payer's phone number */
  payerPhone?: string
  /** Payer's 2-letter country code (defaults to US) */
  payerCountryCode?: string
  /** Amount in USD (dollars, not cents) */
  amountUsd: number
  /** Short note shown to the payer */
  note: string
  /** Your internal reference (order ID, plan name, etc.) */
  externalId?: string
}

export type VeemPaymentRequest = {
  id: string
  status: string
  checkoutUrl: string
  amount: number
  currency: string
  payerEmail: string
  externalId?: string
}

export async function createVeemPaymentRequest(
  input: VeemPaymentRequestInput
): Promise<VeemPaymentRequest> {
  const token = await getVeemAccessToken()

  const nameParts = (input.payerName ?? "").trim().split(/\s+/).filter(Boolean)
  const firstName = nameParts[0] || "Customer"
  const lastName = nameParts.slice(1).join(" ") || "Client"

  const payload = {
    amount: {
      currency: "USD",
      number: Number(input.amountUsd.toFixed(2)),
    },
    payer: {
      type: "Incomplete",
      email: input.payerEmail,
      firstName,
      lastName,
      countryCode: input.payerCountryCode || "US",
      ...(input.payerPhone ? { phone: input.payerPhone } : {}),
    },
    notes: input.note,
    ...(input.externalId ? { externalInvoiceRefId: input.externalId } : {}),
  }

  const res = await fetch(`${getVeemBaseUrl()}/veem/v1.2/invoices`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Request-Id": crypto.randomUUID(),
    },
    body: JSON.stringify(payload),
  })

  type VeemInvoiceResponse = {
    id?: string | number
    status?: string
    claimLink?: string
    checkoutUrl?: string
    amount?: { number: number; currency: string }
    payer?: { email?: string }
    externalInvoiceRefId?: string
    errorCode?: string
    code?: string | number
    message?: string
  }

  const data = await safeJson<VeemInvoiceResponse>(res)

  if (!res.ok || !data.id) {
    throw new Error(
      data.message ?? data.errorCode ?? `Veem API error: ${res.status}`
    )
  }

  return {
    id: String(data.id),
    status: data.status ?? "Sent",
    checkoutUrl: data.claimLink ?? data.checkoutUrl ?? "",
    amount: data.amount?.number ?? input.amountUsd,
    currency: data.amount?.currency ?? "USD",
    payerEmail: data.payer?.email ?? input.payerEmail,
    externalId: data.externalInvoiceRefId ?? input.externalId,
  }
}

// ─── Get Invoice / Payment Status (Veem v1.2) ────────────────────────────────

export async function getVeemPaymentRequest(
  paymentRequestId: string
): Promise<VeemPaymentRequest> {
  const token = await getVeemAccessToken()

  const res = await fetch(
    `${getVeemBaseUrl()}/veem/v1.2/invoices/${encodeURIComponent(paymentRequestId)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  )

  type VeemInvoiceResponse = {
    id?: string | number
    status?: string
    claimLink?: string
    checkoutUrl?: string
    amount?: { number: number; currency: string }
    payer?: { email?: string }
    externalInvoiceRefId?: string
    message?: string
  }

  const data = await safeJson<VeemInvoiceResponse>(res)

  if (!res.ok) {
    throw new Error(data.message ?? `Veem API error: ${res.status}`)
  }

  return {
    id: String(data.id ?? paymentRequestId),
    status: data.status ?? "UNKNOWN",
    checkoutUrl: data.claimLink ?? data.checkoutUrl ?? "",
    amount: data.amount?.number ?? 0,
    currency: data.amount?.currency ?? "USD",
    payerEmail: data.payer?.email ?? "",
    externalId: data.externalInvoiceRefId,
  }
}
