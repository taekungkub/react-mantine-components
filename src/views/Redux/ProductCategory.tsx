import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { categorySelector, getAllCategoryProduct } from "@/store/slices/categorySlice";
import { fetchCategoryProducts } from "@/store/slices/categorySlice";
import { Grid } from "@mantine/core";
import CardProduct from "@/components/Cards/CardProduct";

function ProductCategory() {
  const dispatch = useAppDispatch();

  const { name } = useParams();

  const productReducer = useSelector(categorySelector);
  const products = useSelector(getAllCategoryProduct);

  const status = productReducer.categoryProductsStatus;

  useEffect(() => {
    dispatch(fetchCategoryProducts(name as string));
  }, []);

  function ProductList() {
    return (
      <>
        <Grid>
          {products.map((product) => (
            <>
              <Grid.Col md={6} lg={3}>
                <CardProduct key={product.id} data={product} />
              </Grid.Col>
            </>
          ))}
        </Grid>
      </>
    );
  }

  function ProductSection() {
    if (status === "loading") {
      return (
        <>
          <div>Loading</div>
        </>
      );
    } else if (status === "succeeded") {
      return (
        <>
          <div>
            <ProductList />
          </div>
        </>
      );
    }
  }

  return <>{ProductSection()}</>;
}

export default ProductCategory;
