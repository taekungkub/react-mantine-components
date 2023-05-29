import { useSelector } from "react-redux"
import { fetchProducts, getAllProducts } from "../../store/slices/productSlice"
import { useAppDispatch } from "../../store/store"
import { useEffect, useState } from "react"
import { fetchCategories, getAllCategories } from "@/store/slices/categorySlice"
import { Badge, Box, Button, Card, Flex, Grid, Group, SimpleGrid } from "@mantine/core"
import { ProductTy } from "@/type"
import { useNavigate } from "react-router-dom"
import CardProduct from "@/components/Cards/CardProduct"

function ProductReduxPage() {
  const dispatch = useAppDispatch()
  const products = useSelector(getAllProducts)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  function ProductList() {
    return (
      <>
        <Grid>
          {products.map((product) => (
            <>
              <Grid.Col md={6} lg={3}>
                <CardProduct key={product.id} data={product} onToggle={() => navigate("/redux/product/" + product.id)} />
              </Grid.Col>
            </>
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
