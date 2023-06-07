import { Paper } from "@mantine/core"
import useWagmi from "../context/WagmiContext"
import { fetchBalance } from "@wagmi/core"
import { useEffect } from "react"

function TokenBalance() {
  const { account } = useWagmi()

  return (
    <>
      <h2>Token Balance</h2>
      <Paper withBorder p={"md"} mt={"md"}>
        <p>Token tBNB: {account.tokenBalance.tbnb}</p>
        <p>Token A : {account.tokenBalance.a}</p>
        <p>Token b : {account.tokenBalance.b}</p>
      </Paper>
    </>
  )
}

export default TokenBalance
