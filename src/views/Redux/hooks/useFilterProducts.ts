import _ from "lodash"
import { useMemo } from "react"
import { ProductTy } from "@/type"

interface Props {
  data: Array<ProductTy>
  searchQuery?: string
  sort?: {
    price?: string
    brand?: string
    rating?: string
    minPrice?: string
    maxPrice?: string
  }
}

export default function useFilterProducts(props: Props) {
  const productFilter = useMemo(() => {
    return _.chain(props.data)
      .thru((result) => {
        if (props.sort?.price === "lowest_price") {
          return _.orderBy(result, ["price"], ["asc"])
        }
        if (props.sort?.price === "highest_price") {
          return _.orderBy(result, ["price"], ["desc"])
        }
        return result
      })
      .filter((v) => {
        if (props.sort?.maxPrice && props.sort.minPrice) {
          if (v.price >= Number(props.sort?.minPrice) && v.price <= Number(props.sort?.maxPrice)) {
            return true
          }
          return false
        } else if (props.sort?.minPrice) {
          if (v.price >= Number(props.sort?.minPrice)) {
            return true
          }
          return false
        } else if (props.sort?.maxPrice) {
          if (v.price <= Number(props.sort?.maxPrice)) {
            return true
          }
          return false
        } else {
          return true
        }
      })
      .filter((v) => {
        if (props.sort?.rating) {
          if (v.rating >= Number(props.sort.rating)) {
            return true
          }
          return false
        } else {
          return true
        }
      })
      .value()
  }, [props.sort])

  return {
    productFilter,
  }
}
