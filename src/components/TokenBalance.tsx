import { Box, Grid } from "@mantine/core"
import useWagmi from "../context/WagmiContext"
import PageTitle from "./PageTitle"
import CardTokenBalance from "./Cards/CardTokenBalance"

import Bitcoin from "@/assets/media/bitcoin.png"
import Ethereum from "@/assets/media/ethereum.png"

function TokenBalance() {
  const { account } = useWagmi()

  return (
    <>
      <PageTitle pageTitle="Wallet" />

      <Box mt={12}>
        <Grid>
          <Grid.Col sm={6}>
            <CardTokenBalance name="BTC" symbol="BTC" dollar="500" image={Bitcoin} />
          </Grid.Col>
          <Grid.Col sm={6}>
            <CardTokenBalance name="Ethereum" symbol="ETH" dollar="12,353" image={Ethereum} />
          </Grid.Col>
          <Grid.Col sm={6}>
            <CardTokenBalance name="tBNB" symbol="BNB" dollar="-" amount={account.tokenBalance.tbnb} />
          </Grid.Col>
          <Grid.Col sm={6}>
            <CardTokenBalance name="ZA" symbol="ZA" dollar="-" amount={account.tokenBalance.a} />
          </Grid.Col>
          <Grid.Col sm={6}>
            <CardTokenBalance name="ZB" symbol="ZB" dollar="-" amount={account.tokenBalance.b} />
          </Grid.Col>
        </Grid>
      </Box>
    </>
  )
}

export default TokenBalance
