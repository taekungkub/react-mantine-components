import { useSelector } from "react-redux"
import { fetchOneProducts, productSelector, getOneProduct } from "@/store/slices/productSlice"
import { RootState, useAppDispatch } from "@/store/store"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import InfoSection from "./InfoSection"
import { Anchor, Breadcrumbs, Grid, SimpleGrid } from "@mantine/core"
import ImageSection from "./ImageSection"
import MyBreadcrumbs from "../../../components/MyBreadcrumbs"

function ProductReduxDetailPage() {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const productReducer = useSelector(productSelector)
  const product = useSelector(getOneProduct)
  const productStatus = productReducer.productDataStatus

  useEffect(() => {
    dispatch(fetchOneProducts(id as string))
  }, [id])

  // function ProductSection() {
  //   if (productStatus === "loading") {
  //     return (
  //       <>
  //         <div>Loading</div>
  //       </>
  //     );
  //   } else if (productStatus === "succeeded") {
  //     return (
  //       <>
  //         <div>
  //           <div>{product?.title}</div>
  //         </div>
  //       </>
  //     );
  //   } else {
  //     return <></>;
  //   }
  // }

  return (
    <>
      <MyBreadcrumbs
        items={[
          { title: "Products", href: "/redux/products" },
          { title: product?.category, href: `/redux/product/category/${product?.category}` },
          { title: product?.title, href: "" },
        ]}
      />
      <Grid>
        <Grid.Col md={4}>
          <ImageSection data={product} loading={productStatus} />
        </Grid.Col>
        <Grid.Col md={4}>
          <InfoSection data={product} />
        </Grid.Col>
      </Grid>
    </>
  )
}

export default ProductReduxDetailPage
