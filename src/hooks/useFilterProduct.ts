import _ from "lodash"
import { useMemo } from "react"
import { ProductTy } from "../type"

interface Props {
  data: Array<ProductTy>
  searchQuery?: string
  sort?: {
    price?: string
    brand?: string
  }
}

export default function useFilterProduct(props: Props) {
  const productFilter = useMemo(() => {
    return _.chain(props.data)
      .filter((product: ProductTy) => {
        let searchBySetTitle = product.title.toLowerCase().match(props.searchQuery ? props.searchQuery.toLowerCase() : "")
        if (searchBySetTitle) {
          return true
        }

        let searchByBrand = product.brand.toLowerCase().match(props.searchQuery ? props.searchQuery.toLowerCase() : "")
        if (searchByBrand) {
          return true
        }

        return false
      })
      .thru((result) => {
        if (props.sort?.price === "lowest_price") {
          return _.orderBy(result, ["price"], ["asc"])
        }
        if (props.sort?.price === "highest_price") {
          return _.orderBy(result, ["price"], ["desc"])
        }

        return result
      })
      .value()
  }, [props.searchQuery, props.sort])

  return {
    productFilter,
  }
}
