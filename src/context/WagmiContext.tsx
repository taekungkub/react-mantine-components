import { createContext, useContext, useEffect, useState } from "react"
import { useAccount, useNetwork, useDisconnect } from "wagmi"

import { switchNetwork } from "@wagmi/core"
import useMyTokenbalance from "../hooks/useMyTokenBalance"
import useToast from "../hooks/useToast"

interface Props {
  children: React.ReactNode
}

interface AccountTy {
  address: string | undefined
  chainId: number | undefined
  tokenBalance: {
    tbnb: string
    a: string
    b: string
  }
}

interface WagmiContextType {
  account: AccountTy
}

const WagmiContext = createContext<WagmiContextType>({} as WagmiContextType)

export const WagmiProvider = ({ children }: Props) => {
  const supportChain = 97
  const { address } = useAccount()
  const { chain } = useNetwork()
  const { disconnect } = useDisconnect()
  const { tokenBalance } = useMyTokenbalance()

  const [account, setAccount] = useState<AccountTy>({
    address: address ?? "",
    chainId: chain?.id ?? undefined,
    tokenBalance: {
      tbnb: "",
      a: "",
      b: "",
    },
  })

  const toast = useToast()

  async function handleSwitch() {
    await switchNetwork({
      chainId: 97,
    })
  }

  useEffect(() => {
    setAccount((prevState) => Object.assign({ ...prevState }, { address: address, chainId: chain?.id }))
  }, [address, chain?.id])

  useEffect(() => {
    if (chain?.id) {
      if (chain?.id != supportChain) {
        disconnect()
        handleSwitch()
        toast.error("Chain not supprt , Current support chain 97")
      }
    }
  }, [chain?.id])

  useEffect(() => {
    setAccount({
      ...account,
      tokenBalance: {
        tbnb: tokenBalance.tbnb,
        a: tokenBalance.a,
        b: tokenBalance.b,
      },
    })
  }, [tokenBalance])

  useEffect(() => {
    if (!address) {
      setAccount({
        address: "",
        chainId: undefined,
        tokenBalance: {
          tbnb: "",
          a: "",
          b: "",
        },
      })
    }
  }, [address])

  const memoedValue = {
    account,
  }

  return <WagmiContext.Provider value={memoedValue}>{children}</WagmiContext.Provider>
}

export default function useWagmi() {
  return useContext(WagmiContext)
}
