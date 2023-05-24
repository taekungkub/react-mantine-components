import { Box, Divider, Grid } from "@mantine/core"
import PageTitle from "../../components/PageTitle"
import FormAddProduct from "./components/FormAddProduct"
import { useState } from "react"

function ProductNewPage() {
  const [data, setData] = useState({
    title: "",
    description: "",
    sku: "",
    price: "",
    category: "",
    tags: "",
    vendor: "",
    brand: "",
    images: [],
  })
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
