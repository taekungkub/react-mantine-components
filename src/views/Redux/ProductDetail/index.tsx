import { useSelector } from "react-redux";
import { fetchOneProducts, productSelector, getOneProduct } from "@/store/slices/productSlice";
import { RootState, useAppDispatch } from "@/store/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import InfoSection from "./InfoSection";
import { SimpleGrid } from "@mantine/core";
import ImageSection from "./ImageSection";

function ProductReduxDetailPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const productReducer = useSelector(productSelector);
  const product = useSelector(getOneProduct);
  const productStatus = productReducer.productDataStatus;

  useEffect(() => {
    dispatch(fetchOneProducts(id as string));
  }, []);

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
 
      <SimpleGrid cols={4} breakpoints={[
        { maxWidth: 'xl', cols: 3, },
        { maxWidth: 'md', cols: 2, },
        { maxWidth: 'sm', cols: 2,  },
        { maxWidth: 'xs', cols: 1, },
      ]}>
        <ImageSection />
        <InfoSection data={product} />
      </SimpleGrid>
    </>
  );
}

export default ProductReduxDetailPage;
