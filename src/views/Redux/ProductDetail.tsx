import { useSelector } from "react-redux"
import { fetchOneProducts, productSelector } from "../../store/slices/productSlice"
import { useAppDispatch } from "../../store/store"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function ProductReduxDetailPage() {
  const productReducer = useSelector(productSelector)
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const product = productReducer.productData
  useEffect(() => {
    dispatch(fetchOneProducts(id as string))
  }, [])
  return (
    <>
      <div>Product Detail Page</div>
      <div>{product?.title}</div>
    </>
  )
}

export default ProductReduxDetailPage
