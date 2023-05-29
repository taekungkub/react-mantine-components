import { useSelector } from "react-redux"
import { useAppDispatch } from "../../store/store"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { categorySelector, getAllCategoryProduct } from "@/store/slices/categorySlice"
import { fetchCategoryProducts } from "@/store/slices/categorySlice"
import { Box, Button, Flex, Grid, Menu, Title } from "@mantine/core"
import CardProduct from "@/components/Cards/CardProduct"
import { IconFilter, IconFilterCog, IconFilters, IconSort09, IconSortAZ, IconSortAscending2 } from "@tabler/icons-react"

function ProductCategory() {
  const dispatch = useAppDispatch()
  const { name } = useParams()
  const productReducer = useSelector(categorySelector)
  const products = useSelector(getAllCategoryProduct)
  const status = productReducer.categoryProductsStatus

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCategoryProducts(name as string))
  }, [dispatch, name])

  function ProductList() {
    return (
      <>
        <Grid>
          {products.map((product) => (
            <Grid.Col md={6} lg={4} key={product.id}>
              <CardProduct key={product.id} data={product} onToggle={() => navigate("/redux/product/" + product.id)} />
            </Grid.Col>
          ))}
        </Grid>
      </>
    )
  }

  function ProductSection() {
    if (status === "loading") {
      return <div>Loading</div>
    } else if (status === "succeeded") {
      return (
        <div>
          <ProductList />
        </div>
      )
    } else {
      return <></>
    }
  }

  return (
    <div>
      <Box>
        <ProductSection />
      </Box>
    </div>
  )
}

export default ProductCategory
