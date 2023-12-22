import { WagmiConfig, createConfig, configureChains } from "wagmi"
import { mainnet, optimism, polygon, bscTestnet } from "@wagmi/core/chains"

import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

import { InjectedConnector } from "wagmi/connectors/injected"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect"
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet"

// import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react"
// // 1. Get projectId at https://cloud.walletconnect.com
// const projectId = ""
// // 2. Create wagmiConfig
// const metadata = {
//   name: "Web3Modal",
//   description: "Web3Modal Example",
//   url: "https://web3modal.com",
//   icons: ["https://avatars.githubusercontent.com/u/37784886"],
// }
// const chains = [mainnet, bscTestnet]
// const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
// // 3. Create modal
// createWeb3Modal({ wagmiConfig, projectId, chains })

const { chains, publicClient, webSocketPublicClient } = configureChains([mainnet, bscTestnet], [publicProvider()]) // from wagmi

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector(),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "...",
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

interface Props {
  children: React.ReactNode
}

export const WagmiConfigProvider = ({ children }: Props) => {
  return <WagmiConfig config={config}>{children} </WagmiConfig>
}
