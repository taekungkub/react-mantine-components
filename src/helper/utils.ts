import { formatUnits } from "viem"

export function strongPassword(val: string) {
  const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-]).{8,}$")
  if (!regexPassword.test(val)) return regexPassword.test(val)
  else return true
}

export function removeWhiteSpace(val: string) {
  return val.replace(/\s/g, "")
}

export const regexStrongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-]).{8,}$")

export function toEther(amount: bigint, decimals = 18) {
  return formatUnits(amount, decimals)
}
