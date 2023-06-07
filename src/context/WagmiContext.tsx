import { Children, createContext, useContext, useEffect, useState } from "react"
import { configureChains, useAccount, useNetwork, useDisconnect } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask"
import { mainnet, optimism, polygon, bscTestnet } from "@wagmi/core/chains"
import { fetchBalance } from "@wagmi/core"
import TokanAAbi from "@/constant/abi/TokenAABI"

const { chains, publicClient, webSocketPublicClient } = configureChains([mainnet], [publicProvider()])
import { switchNetwork } from "@wagmi/core"
import { InjectedConnector } from "wagmi/connectors/injected"
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
  const { address, isConnected } = useAccount()
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
