declare module "@paypal/react-paypal-js" {
  // Lightweight module declaration to satisfy TypeScript when using
  // "moduleResolution": "bundler" and packages with restrictive exports.
  // If you prefer full typings, switch TS moduleResolution or add proper types.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const PayPalScriptProvider: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const PayPalButtons: any
}

