import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { categorySelector, getAllCategoryProduct } from "@/store/slices/categorySlice";
import { fetchCategoryProducts } from "@/store/slices/categorySlice";
import { Box } from "@mantine/core";
import ProductsList from "./components/ProductList";

function ProductCategory() {
  const dispatch = useAppDispatch();
  const { name } = useParams();
  const productReducer = useSelector(categorySelector);
  const products = useSelector(getAllCategoryProduct);
  const status = productReducer.categoryProductsStatus;

  useEffect(() => {
    dispatch(fetchCategoryProducts(name as string));
  }, [dispatch, name]);

  function ProductSection() {
    if (status === "loading") {
      return <div>Loading</div>;
    } else if (status === "succeeded") {
      return (
        <div>
          <ProductsList data={products} />
        </div>
      );
    } else {
      return <></>;
    }
  }

  return (
    <div>
      <Box>
        <ProductSection />
      </Box>
    </div>
  );
}

export default ProductCategory;
