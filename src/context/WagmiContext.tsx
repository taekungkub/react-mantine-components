import { Children, createContext, useContext, useEffect, useState } from "react"
import { WagmiConfig, createConfig, configureChains, useAccount, useNetwork, useSwitchNetwork, useConnect, useBalance, useContractRead } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask"
import { mainnet, optimism, polygon, bscTestnet } from "@wagmi/core/chains"
import { fetchBalance } from "@wagmi/core"
import TokanAAbi from "@/constant/abi/tokena.json"

const { chains, publicClient, webSocketPublicClient } = configureChains([mainnet], [publicProvider()])
import { switchNetwork } from "@wagmi/core"
import { InjectedConnector } from "wagmi/connectors/injected"

interface Props {
  children: React.ReactNode
}

interface AccountTy {
  address: string | undefined
  chainId: number | undefined
}

interface WagmiContextType {
  account: AccountTy
}

const WagmiContext = createContext<WagmiContextType>({} as WagmiContextType)

export const WagmiProvider = ({ children }: Props) => {
  const supportChain = 97
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()

  const [account, setAccount] = useState<AccountTy>({
    address: "",
    chainId: 0,
  })

  async function handleSwitch() {
    console.log("connect ")
    const network = await switchNetwork({
      chainId: 97,
    })
  }

  useEffect(() => {
    setAccount({ ...account, address: address?.toString(), chainId: chain?.id })
  }, [address, chain?.id])

  useEffect(() => {
    if (chain?.id) {
      if (chain?.id != supportChain) {
        handleSwitch()
        alert("Chain not support")
      }
    }
  }, [chain?.id])

  async function getBalance() {}

  useEffect(() => {
    if (account.address) {
      getBalance()
    }
  }, [account.address])

  const memoedValue = {
    account,
  }

  return <WagmiContext.Provider value={memoedValue}>{children}</WagmiContext.Provider>
}

export default function useWagmi() {
  return useContext(WagmiContext)
}
