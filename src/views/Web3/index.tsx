import { Button, Flex, Group, Paper, Text } from "@mantine/core"
import { IconUser } from "@tabler/icons-react"

import { ethers } from "ethers"
import { useEffect } from "react"
import { useAccount, useConnect, useContractRead, useDisconnect, useEnsName, useNetwork, useSwitchNetwork } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import { bscTestnet } from "wagmi/chains"
import useWagmi from "../../context/WagmiContext"
import { mainnet, optimism, polygon } from "@wagmi/core/chains"
import TokanAAbi from "@/constant/abi/TokenAABI"
import TokenInfo from "../../components/TokenInfo"
import TokenBalance from "../../components/TokenBalance"

function Web3Page() {
  const { address, isConnected } = useAccount()

  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

  const { chain } = useNetwork()
  const { disconnect } = useDisconnect()
  const { account } = useWagmi()

  return (
    <>
      {!isConnected && (
        <Group>
          {connectors.map((connector) => (
            <Button disabled={!connector.ready} key={connector.id} onClick={() => connect({ connector })}>
              {connector.name}
              {!connector.ready && " (unsupported)"}
              {isLoading && connector.id === pendingConnector?.id && " (connecting)"}
            </Button>
          ))}
        </Group>
      )}

      <Group>
        {isConnected && (
          <Button color="red" onClick={() => disconnect()}>
            Disconnect
          </Button>
        )}
      </Group>

      <h2>Account Information</h2>
      <Paper p={"md"} mt={"md"} withBorder>
        <p>Address: {account.address}</p>
        <p>ChainId: {account.chainId}</p>
      </Paper>
      <TokenInfo />
      <TokenBalance />
    </>
  )
}

export default Web3Page
