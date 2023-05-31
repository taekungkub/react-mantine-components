import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useAppDispatch } from "../../../store/store"
import { fetchSearchProducts, getAllProducts, getProductStatus, searchSelector } from "../../../store/slices/searchSlice"
import { useSelector } from "react-redux"
import ProductsList from "../components/ProductList"
import EmptyComponent from "../../../components/EmptyComponent"
import { Group } from "@mantine/core"

function SearchProductPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useAppDispatch()
  const products = useSelector(getAllProducts)
  const productStatus = useSelector(getProductStatus)

  useEffect(() => {
    if (searchParams.get("keyword")) {
      dispatch(fetchSearchProducts(searchParams.get("keyword") as string))
    }
  }, [searchParams.get("keyword")])

  return (
    <div>
      {productStatus === "loading" && <Group position="center">Loading...</Group>}
      {!products.length && productStatus != "loading" ? <EmptyComponent /> : undefined}
      {products.length >= 1 && productStatus === "succeeded" && <ProductsList data={products} />}
    </div>
  )
}

export default SearchProductPage
