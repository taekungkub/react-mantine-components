import { useEffect, useState } from "react"
import { fetchBalance, multicall } from "@wagmi/core"
import { bscTokens } from "../constant/bscTokens"
import { useAccount } from "wagmi"
import { toEther } from "../helper/utils"

function useMyTokenbalance() {
  const [tokenBalance, setTokenBalance] = useState({
    tbnb: "",
    a: "",
    b: "",
  })

  const { address } = useAccount()

  useEffect(() => {
    if (address) {
      getTokenBalance()
    }
  }, [address])

  async function getTokenBalance() {
    try {
      const [data, data2, data3] = await Promise.all([
        fetchBalance({
          address: address as any,
        }),
        fetchBalance({
          address: address as any,
          token: `0x${bscTokens.a.address}`,
        }),
        fetchBalance({
          address: address as any,
          token: `0x${bscTokens.b.address}`,
        }),
      ])

      setTokenBalance({
        tbnb: toEther(data.value as bigint),
        a: toEther(data2.value as bigint),
        b: toEther(data3.value as bigint),
      })
    } catch (error) {
      console.log(error)
    }
  }

  return { tokenBalance }
}

export default useMyTokenbalance
