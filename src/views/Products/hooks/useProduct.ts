import { useEffect, useState } from "react"
import ProductServices from "../../../services/ProductServices"
import { ProductTy } from "../../../type"

function useProduct() {
  const [products, setProducts] = useState<Array<ProductTy>>([])

  useEffect(() => {
    getProducts()

    return () => {}
  }, [])

  async function getProducts() {
    try {
      const res = await ProductServices.products()
      setProducts(res.data.products)
    } catch (error) {}
  }
  return {
    products,
  }
}

export default useProduct
