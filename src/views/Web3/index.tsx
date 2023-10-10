import { Button, Flex, Group, Paper, Text } from "@mantine/core"

import { useEffect } from "react"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import useWagmi from "../../context/WagmiContext"
import TokenInfo from "../../components/TokenInfo"
import TokenBalance from "../../components/TokenBalance"
import { motion } from "framer-motion"
import useToast from "../../hooks/useToast"
import "wagmi/window"
import PageTitle from "../../components/PageTitle"

function Web3Page() {
  const { address, isConnected } = useAccount()

  const { connect, connectors, error, isLoading, pendingConnector } = useConnect({
    chainId: 97,
    onMutate(connector) {
      console.log("Before Connect", connector)
    },
    onSuccess(data) {
      toast.success("Connected")
    },

    onError(error) {
      console.log("Error", error)
      toast.error(error?.message)
    },
  })

  const { disconnect } = useDisconnect()
  const { account } = useWagmi()
  const toast = useToast()

  useEffect(() => {
    //@ts-ignore
    const isMetaMask = window.ethereum?.isMetaMask
    if (!isMetaMask) {
      toast.error("Please install metamask !")
    }
  }, [])

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}></motion.div>

      <motion.div key={isConnected ? "active" : "empty"} initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        {isConnected && (
          <Button color="red" onClick={() => disconnect()}>
            Disconnect
          </Button>
        )}
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
      </motion.div>
      <br />
      <PageTitle pageTitle={"Account Information"} />

      <Paper p={"md"} mt={"md"} withBorder>
        <p>Address: {account.address}</p>
        <p>ChainId: {account.chainId}</p>
      </Paper>
      <br />
      <TokenInfo />
      <br />
      <TokenBalance />
    </>
  )
}

export default Web3Page
