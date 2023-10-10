import { WagmiConfig, createConfig, configureChains } from "wagmi"
import { mainnet, optimism, polygon, bscTestnet } from "@wagmi/core/chains"

import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

import { InjectedConnector } from "wagmi/connectors/injected"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect"
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet"

const { chains, publicClient, webSocketPublicClient } = configureChains([mainnet, bscTestnet], [publicProvider()])

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector(),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: "wagmi",
    //   },
    // }),
    // new WalletConnectConnector({
    //   chains,
    //   options: {
    //     projectId: "...",
    //   },
    // }),
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
