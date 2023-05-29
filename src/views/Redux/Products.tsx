import { useSelector } from "react-redux";
import { fetchProducts, getAllProducts } from "../../store/slices/productSlice";
import { useAppDispatch } from "../../store/store";
import { useEffect } from "react";

import ProductsList from "./components/ProductList";

function ProductReduxPage() {
  const dispatch = useAppDispatch();
  const products = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div>
        <ProductsList data={products} />
      </div>
    </>
  );
}

export default ProductReduxPage;
