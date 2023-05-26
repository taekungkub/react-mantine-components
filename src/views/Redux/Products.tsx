import { useSelector } from "react-redux"
import { fetchProducts, productSelector } from "../../store/slices/productSlice"
import { useAppDispatch } from "../../store/store"
import { useEffect } from "react"

function ProductReduxPage() {
  const productReducer = useSelector(productSelector)
  const dispatch = useAppDispatch()
  const products = productReducer.products

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const renderedUsers = products.map((product) => (
    <ul key={product.id}>
      <li>{product.id}</li>
    </ul>
  ))
  return (
    <>
      <div>
        <ul>{renderedUsers}</ul>
      </div>
    </>
  )
}

export default ProductReduxPage
