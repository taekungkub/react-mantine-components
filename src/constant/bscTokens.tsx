import TokenAABI from "./abi/TokenAABI"
import TokenBABI from "./abi/TokenBABI"

class Token {
  address: string
  decimals: number
  symbol: string
  name: string
  abi: any
  image?: string

  constructor(address: string, decimals: number, symbol: string, name: string, abi: any, image: string) {
    this.address = address
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
    this.abi = abi
    this.image = image
  }
}

export const bscTokens = {
  a: new Token("A003ae671959ae20D328f9b122BD0F18Cc53Bf5d", 18, "ZA", "zono a", TokenAABI, ""),
  b: new Token("2B93006D9C7b61e96ad433003A652158B250B8f4", 18, "ZB", "zono b", TokenBABI, ""),
}
