import { useEffect, useState } from "react"
import { ProductTy } from "../../../type"
import DummyServices from "../../../services/DummyServices"
import useSWR from "swr"

function useProduct() {
  const [products, setProducts] = useState<Array<ProductTy>>([])
  const { data, isLoading } = useSWR("/api/products", DummyServices.products)

  useEffect(() => {
    setProducts(data?.data.products)
  }, [data])

  return {
    products,
    isLoading,
  }
}

export default useProduct
