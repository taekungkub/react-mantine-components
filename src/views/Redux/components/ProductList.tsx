import { fetchProducts, getAllProducts } from "@/store/slices/productSlice"
import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import useFilterProducts from "../hooks/useFilterProducts"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/store/store"
import { Grid } from "@mantine/core"
import CardProduct from "@/components/Cards/CardProduct"
import { ProductTy } from "@/type"
import { addtoCart, cartSelector } from "../../../store/slices/cartSlice"
import useToast from "../../../hooks/useToast"

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
  const dispatch = useAppDispatch()
  const toast = useToast()

  return (
    <>
      <Grid>
        {productFilter.map((product) => (
          <Grid.Col span={6} md={6} lg={4} xl={4} key={product.id}>
            <CardProduct
              key={product.id}
              data={product}
              onToggle={() => navigate(`/redux/product/${product.category}/${product.id}`)}
              onAddToCart={() => {
                if (product) {
                  dispatch(
                    addtoCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      quantity: 1,
                      total: product.stock,
                      discountPercentage: product.discountPercentage,
                    })
                  )
                  toast.success(`Add product successfully !`)
                }
              }}
            />
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}

export default ProductsList
