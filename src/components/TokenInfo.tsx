import { useEffect, useState } from "react"

import { erc20ABI, usePublicClient, useContractRead, useAccount } from "wagmi"
import { getContract, multicall, fetchToken } from "@wagmi/core"
import { formatUnits } from "viem"
import { bscTokens } from "../constant/bscTokens"
import { Paper } from "@mantine/core"

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
    <div>
      <h2>Token Information</h2>

      <Paper p={"md"} withBorder>
        <p>Name: {token.name}</p>
        <p>Symbol: {token.symbol}</p>
        <p>Decimals: {token.decimals}</p>
        <p>
          Total Supply : {token.totalSupply} {token.symbol}
        </p>
      </Paper>
      <Paper p={"md"} mt={"md"} withBorder>
        <p>Name: {token2.name}</p>
        <p>Symbol: {token2.symbol}</p>
        <p>Decimals: {token2.decimals}</p>
        <p>
          Total Supply : {token2.totalSupply} {token2.symbol}
        </p>
      </Paper>
    </div>
  )
}
