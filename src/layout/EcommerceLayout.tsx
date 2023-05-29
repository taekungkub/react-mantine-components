import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { fetchCategories, getAllCategories } from "../store/slices/categorySlice"
import { useAppDispatch } from "../store/store"
import { Anchor, Badge, Box, Breadcrumbs, Card, Flex, ScrollArea } from "@mantine/core"

function CategoryList() {
  const categories = useSelector(getAllCategories)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <Flex gap={10} wrap={"wrap"}>
      {categories.map((v: string, i) => (
        <Badge
          key={i}
          onClick={() => {
            navigate("/redux/product/category/" + v)
          }}
        >
          {v}
        </Badge>
      ))}
    </Flex>
  )
}

function EcommerceLayout() {
  return (
    <div>
      <Card px={0} py={20} sx={{ position: "sticky", top: "60px", zIndex: 5 }}>
        <CategoryList />
      </Card>

      <Box mt={20}>
        <Outlet />
      </Box>
    </div>
  )
}

export default EcommerceLayout
