import { WagmiConfig, createConfig, configureChains } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import { mainnet, optimism, polygon, bscTestnet } from "@wagmi/core/chains"

import { InjectedConnector } from "wagmi/connectors/injected"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"

const { chains, publicClient } = configureChains([mainnet, bscTestnet], [publicProvider()])

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new MetaMaskConnector(),

    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
})

interface Props {
  children: React.ReactNode
}

export const WagmiConfigProvider = ({ children }: Props) => {
  return <WagmiConfig config={config}>{children} </WagmiConfig>
}
