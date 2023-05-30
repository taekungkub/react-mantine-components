import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { categorySelector, fetchCategories, getAllCategories } from "../store/slices/categorySlice"
import { useAppDispatch } from "../store/store"
import { ActionIcon, Anchor, Badge, Box, Breadcrumbs, Button, Card, Flex, MediaQuery, ScrollArea, Skeleton } from "@mantine/core"

function CategoryList() {
  const categories = useSelector(getAllCategories)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const categoryReducer = useSelector(categorySelector)
  const status = categoryReducer.categoriesStatus

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <Flex gap={10} wrap={"wrap"}>
      {status === "loading" && Array.from(Array(22), (e, i) => <Skeleton height={30} maw={100} key={i} />)}

      {status === "succeeded" &&
        categories.map((v: string, i) => (
          <Button
            size="xs"
            variant="light"
            key={i}
            onClick={() => {
              navigate("/redux/product/category/" + v)
            }}
          >
            {v}
          </Button>
        ))}
    </Flex>
  )
}

function EcommerceLayout() {
  return (
    <div>
      <MediaQuery smallerThan={"xs"} styles={{ display: "none" }}>
        <Card px={0} py={20} sx={{ position: "sticky", top: "60px", zIndex: 5 }}>
          <CategoryList />
        </Card>
      </MediaQuery>
      <Box mt={20}>
        <Outlet />
      </Box>
    </div>
  )
}

export default EcommerceLayout
