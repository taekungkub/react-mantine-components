import { Button, Flex, Grid, Menu, Text, Title } from "@mantine/core"
import { Outlet, useParams } from "react-router-dom"
import FilterProducts from "../components/Ecommerce/FilterProducts"
import { IconSortAscending2 } from "@tabler/icons-react"
import { useSelector } from "react-redux"
import { productSelector } from "../store/slices/productSlice"
import { categorySelector } from "../store/slices/categorySlice"

export default function ProductLayout() {
  const productReducer = useSelector(productSelector)
  const categoryReducer = useSelector(categorySelector)

  const { name } = useParams()

  return (
    <Grid>
      <Grid.Col sm={3}>
        <FilterProducts />
      </Grid.Col>
      <Grid.Col sm={9}>
        <Grid>
          <Grid.Col span={12}>
            <Flex justify={"space-between"}>
              <Title order={4}>
                {name ? name : "Product All"} ({name ? categoryReducer.categoryProducts.length : productReducer.products.length})
              </Title>
              <Menu width={200} shadow="md">
                <Menu.Target>
                  <Button variant="outline" leftIcon={<IconSortAscending2 />}>
                    Recommend
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>Date</Menu.Item>
                  <Menu.Item>Best Seller</Menu.Item>
                  <Menu.Item>Price</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Flex>
          </Grid.Col>
        </Grid>
        <Outlet />
      </Grid.Col>
    </Grid>
  )
}
