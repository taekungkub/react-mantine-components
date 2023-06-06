import { Button, Flex, Group, Text } from "@mantine/core"
import { IconUser } from "@tabler/icons-react"

import { ethers } from "ethers"
import { useEffect } from "react"
import { useAccount, useConnect, useContractRead, useDisconnect, useEnsName, useNetwork, useSwitchNetwork } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import { bscTestnet } from "wagmi/chains"
import useWagmi from "../../context/WagmiContext"
import { mainnet, optimism, polygon } from "@wagmi/core/chains"
import TokanAAbi from "@/constant/abi/tokena.json"
import wagmigotchiABI from "@/constant/abi/wagmi.json"

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
      {address && <Text>ChainId {Number(chain?.id)}</Text>}
      {isConnected && <div>Connected to {address}</div>}
    </>
  )
}

export default Web3Page
