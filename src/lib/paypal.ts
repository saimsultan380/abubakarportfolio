export const runtime = "nodejs"

type PayPalEnv = "sandbox" | "live"

function getPayPalEnv(): PayPalEnv {
  const v = (process.env.PAYPAL_ENV ?? "sandbox").toLowerCase()
  return v === "live" ? "live" : "sandbox"
}

export function getPayPalBaseUrl() {
  return getPayPalEnv() === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com"
}

export function getPayPalClientId() {
  return process.env.PAYPAL_CLIENT_ID ?? ""
}

export function getPayPalClientSecret() {
  return process.env.PAYPAL_CLIENT_SECRET ?? ""
}

export async function getPayPalAccessToken() {
  const clientId = getPayPalClientId()
  const clientSecret = getPayPalClientSecret()
  if (!clientId || !clientSecret) {
    throw new Error("PayPal is not configured. Set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET.")
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")
  const res = await fetch(`${getPayPalBaseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  })

  const data = (await res.json()) as { access_token?: string; error?: string; error_description?: string }
  if (!res.ok || !data.access_token) {
    throw new Error(data.error_description ?? data.error ?? "Unable to get PayPal access token.")
  }
  return data.access_token
}

