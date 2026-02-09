"use client"

import { useEffect } from "react"

const CHECKOUT_DRAFT_KEY = "resumes_uplift_checkout_draft"

export function ClearCheckoutDraft() {
  useEffect(() => {
    try {
      sessionStorage.removeItem(CHECKOUT_DRAFT_KEY)
    } catch {
      // ignore
    }
  }, [])
  return null
}
