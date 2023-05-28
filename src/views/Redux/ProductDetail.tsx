import { useSelector } from "react-redux";
import { fetchOneProducts, productSelector, getOneProduct } from "../../store/slices/productSlice";
import { RootState, useAppDispatch } from "../../store/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductReduxDetailPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const product = useSelector(getOneProduct);
  const productReducer = useSelector(productSelector);

  const productStatus = productReducer.productDataStatus;

  useEffect(() => {
    dispatch(fetchOneProducts(id as string));
  }, []);

  function ProductSection() {
    if (productStatus === "loading") {
      return (
        <>
          <div>Loading</div>
        </>
      );
    } else if(productStatus === 'succeeded') {
      return (
        <>
          <div>
            <div>{product?.title}</div>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div>Product Detail Page</div>
      {ProductSection()}
    
    </>
  );
}

export default ProductReduxDetailPage;
