import { useEffect, useState } from "react"
import { ProductTy } from "../../../type"
import DummyServices from "../../../services/DummyServices"

function useProduct() {
  const [products, setProducts] = useState<Array<ProductTy>>([])

  useEffect(() => {
    getProducts()

    return () => {}
  }, [])

  async function getProducts() {
    try {
      const res = await DummyServices.products()
      setProducts(res.data.products)
    } catch (error) {}
  }
  return {
    products,
  }
}

export default useProduct
