import { useState } from "react"
import DummyServices from "../../../services/DummyServices"

export default function useOneProduct() {
  const initProduct = {
    title: "",
    description: "",
    sku: "",
    price: "",
    stock: "",
    category: "",
    tags: "",
    vendor: "",
    brand: "",
    images: [],
  }

  const [data, setData] = useState(initProduct)
  const [category, setCategory] = useState()

  async function getProduct(id: string) {
    try {
      const res = await DummyServices.product(id)
      setData({
        ...res.data,
        images: res.data.images,
      })
    } catch (error) {}
  }

  async function getCategory() {
    try {
      const res = await DummyServices.categories()
      const newMap = res.data.map((v: string) => {
        return {
          value: v,
          label: v.charAt(0).toLocaleUpperCase() + v.slice(1),
        }
      })
      setCategory(newMap)
    } catch (error) {}
  }

  return {
    getProduct,
    getCategory,
    setData,
    data,
    category,
    initProduct,
  }
}
