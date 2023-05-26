import { useSelector } from "react-redux"
import { fetchProducts, productSelector } from "../../store/slices/productSlice"
import { useAppDispatch } from "../../store/store"
import { useEffect } from "react"
import {  fetchCategories, getAllCategories } from "@/store/slices/categorySlice"

function ProductReduxPage() {
  const productReducer = useSelector(productSelector)
  const dispatch = useAppDispatch()
  const products = productReducer.products

  const categories = useSelector(getAllCategories)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [dispatch])

  const renderedProduct = products.map((product) => (
    <ul key={product.id}>
      <li>{product.id}</li>
    </ul>
  ))



  return (
    <>
      <div>
        <ul>{renderedProduct}</ul>
        {categories ? categories[0] : 'No categories'}
      </div>
    </>
  )
}

export default ProductReduxPage
