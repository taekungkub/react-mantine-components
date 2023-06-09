import { useEffect, useState } from "react"

import { erc20ABI, usePublicClient, useContractRead, useAccount } from "wagmi"
import { getContract, multicall, fetchToken } from "@wagmi/core"
import { formatUnits } from "viem"
import { bscTokens } from "../constant/bscTokens"
import { Grid, Paper } from "@mantine/core"
import PageTitle from "./PageTitle"
import CardTokenInfo from "./Cards/CardTokenInfo"

interface Token {
  name: string
  symbol: string
  decimals: number
  totalSupply: string
}

export default function TokenInfo() {
  const [token, setToken] = useState<Token>({
    name: "-",
    symbol: "-",
    decimals: 0,
    totalSupply: "0",
  })

  const [token2, setToken2] = useState({
    name: "-",
    symbol: "-",
    decimals: 0,
    totalSupply: "0",
  })

  const { address } = useAccount()

  const tokenAContract = {
    address: `0x${bscTokens.a.address}`,
    abi: bscTokens.a.abi,
  }

  useEffect(() => {
    if (address) {
      readContractType1()
      readContractType2()
    }
  }, [address])

  const readContractType1 = async () => {
    const [data1, data2, data3, data4] = await multicall({
      contracts: [
        {
          ...tokenAContract,
          functionName: "totalSupply",
        },
        {
          ...tokenAContract,
          functionName: "name",
        },
        {
          ...tokenAContract,
          functionName: "symbol",
        },
        {
          ...tokenAContract,
          functionName: "decimals",
        },
      ] as any,
    })

    setToken({
      ...token,
      name: data2.result as string,
      symbol: data3.result as string,
      decimals: data4.result as number,
      totalSupply: formatUnits(data1.result as bigint, data4.result as number),
    })
  }

  const readContractType2 = async () => {
    const token = await fetchToken({
      address: `0x${bscTokens.b.address}`,
      formatUnits: "ether",
    })

    setToken2({
      ...token,
      name: token.name as string,
      symbol: token.symbol as string,
      decimals: token.decimals as number,
      totalSupply: token.totalSupply.formatted,
    })
  }

  return (
    <>
      <PageTitle pageTitle={"Token information"} />
      <Grid>
        <Grid.Col sm={6}>
          <CardTokenInfo data={token} />
        </Grid.Col>
        <Grid.Col sm={6}>
          <CardTokenInfo data={token2} />
        </Grid.Col>
      </Grid>
    </>
  )
}
