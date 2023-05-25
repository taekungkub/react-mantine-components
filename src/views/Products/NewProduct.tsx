import { Box, Divider, Grid } from "@mantine/core"
import PageTitle from "../../components/PageTitle"
import FormAddProduct from "./components/FormAddProduct"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductServices from "../../services/ProductServices"

function ProductNewPage() {
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

  const params = useParams()

  useEffect(() => {
    if (!params.id) {
      setData({
        ...initProduct,
        images: [],
      })
    }
    getProduct()
  }, [params.id])

  async function getProduct() {
    try {
      const res = await ProductServices.product(params.id as string)
      setData({
        ...res.data,
        images: res.data.images,
      })
    } catch (error) {}
  }

  return (
    <div>
      <PageTitle pageTitle="Add New Product"></PageTitle>
      <Box mt={20}>
        <PageTitle title="Basic Information" subtitle="Section to config basic product information"></PageTitle>
        <FormAddProduct inititialForm={data} />
      </Box>
    </div>
  )
}

export default ProductNewPage
