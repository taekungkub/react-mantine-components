import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet, optimism, polygon, bscTestnet } from "@wagmi/core/chains";

import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const { chains, publicClient, webSocketPublicClient } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  autoConnect: false,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new MetaMaskConnector({
      chains: [mainnet, optimism, polygon, bscTestnet],
    }),

    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
});

interface Props {
  children: React.ReactNode;
}

export const WagmiConfigProvider = ({ children }: Props) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};
