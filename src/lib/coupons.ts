/**
 * Coupon codes and their discount in USD (flat dollar amount off).
 * Code lookup is case-insensitive.
 */
const COUPONS: Record<string, number> = {
  c10zerna: 10,
  SSCZKZDa: 15,
  scqn4p8a: 20,
  cup2rg5j: 25,
  a47r7pwm: 30,
  ZRJ4C4Dw: 35,
  BSWZRK8q: 40,
  rdn8d2wi: 45,
  tcq5x3el: 50,
  UNZDMjK4: 55,
  Crsbavkq: 60,
  "9ary8xob": 65,
  hd8cj2mg: 70,
  "5G6BVmGV": 75,
  Drnjdteo: 80,
  "244XS6GT": 85,
  "8xaerel4": 90,
  z78b6wqa: 100,
  ydne6skm: 110,
  Z48RQ8YA: 120,
}

export function getCouponDiscountUsd(code: string | undefined | null): number {
  if (!code || typeof code !== "string") return 0
  const normalized = code.trim().toLowerCase()
  if (!normalized) return 0
  const discount = Object.entries(COUPONS).find(
    ([key]) => key.toLowerCase() === normalized
  )?.[1]
  return typeof discount === "number" ? discount : 0
}
