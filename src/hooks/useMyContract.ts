import { bscTokens } from "../constant/bscTokens"

export default function useMyContract() {
  const tokenAContract = {
    adddress: `0x${bscTokens.a.address}`,
    abi: bscTokens.a.abi,
  }
  return {
    tokenAContract,
  }
}
