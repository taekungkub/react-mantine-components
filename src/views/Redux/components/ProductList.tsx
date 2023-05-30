import { fetchProducts, getAllProducts } from "@/store/slices/productSlice"
import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import useFilterProducts from "../hooks/useFilterProducts"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/store/store"
import { Grid } from "@mantine/core"
import CardProduct from "@/components/Cards/CardProduct"
import { ProductTy } from "@/type"

interface Props {
  data: ProductTy[]
}

function ProductsList(props: Props) {
  const [searchParams, setSearchParams] = useSearchParams()

  const { productFilter } = useFilterProducts({
    data: props.data,
    sort: {
      price: searchParams.get("sortBy") ?? "",
      minPrice: searchParams.get("minPrice") ?? "",
      maxPrice: searchParams.get("maxPrice") ?? "",
      rating: searchParams.get("rating") ?? "",
    },
  })

  const navigate = useNavigate()

  return (
    <>
      <Grid>
        {productFilter.map((product) => (
          <Grid.Col span={6} md={6} lg={4} xl={3} key={product.id}>
            <CardProduct key={product.id} data={product} onToggle={() => navigate(`/redux/product/${product.category}/${product.id}`)} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}

export default ProductsList
