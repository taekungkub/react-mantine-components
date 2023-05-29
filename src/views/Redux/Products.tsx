import { useSelector } from "react-redux"
import { fetchProducts, getAllProducts } from "../../store/slices/productSlice"
import { useAppDispatch } from "../../store/store"
import { useEffect, useState } from "react"
import { fetchCategories, getAllCategories } from "@/store/slices/categorySlice"
import { Badge, Box, Button, Card, Flex, Grid, Group, SimpleGrid } from "@mantine/core"
import { ProductTy } from "@/type"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import CardProduct from "@/components/Cards/CardProduct"
import useFilterProducts from "./hooks/useFilterProducts"

function ProductReduxPage() {
  const dispatch = useAppDispatch()
  const products = useSelector(getAllProducts)

  const [searchParams, setSearchParams] = useSearchParams()

  const { productFilter } = useFilterProducts({
    data: products,
    sort: {
      price: searchParams.get("sortBy") ?? "",
      minPrice: searchParams.get("minPrice") ?? "",
      maxPrice: searchParams.get("maxPrice") ?? "",
      rating: searchParams.get("rating") ?? "",
    },
  })

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  function ProductList() {
    return (
      <>
        <Grid>
          {productFilter.map((product) => (
            <Grid.Col md={6} lg={4} key={product.id}>
              <CardProduct key={product.id} data={product} onToggle={() => navigate("/redux/product/" + product.id)} />
            </Grid.Col>
          ))}
        </Grid>
      </>
    )
  }

  return (
    <>
      <div>
        <ProductList />
      </div>

      <div></div>
    </>
  )
}

export default ProductReduxPage
