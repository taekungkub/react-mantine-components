import { Box, Divider, Grid } from "@mantine/core";
import PageTitle from "../../components/PageTitle";
import FormAddProduct from "./components/FormAddProduct";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useOneProduct from "./hooks/useOneProduct";

function ProductNewPage() {
  const params = useParams();

  const { data, category, initProduct, getProduct, getCategory, setData } = useOneProduct();

  useEffect(() => {
    if (!params.id) {
      setData({
        ...initProduct,
        images: [],
      });
      getCategory();

      return;
    }
    getProduct(params.id as string);
    getCategory();
  }, [params.id]);

  return (
    <div>
      <PageTitle pageTitle="Add New Product"></PageTitle>
      <Box mt={20}>
        <PageTitle title="Basic Information" subtitle="Section to config basic product information"></PageTitle>
        <FormAddProduct inititialForm={data} category={category} />
      </Box>
    </div>
  );
}

export default ProductNewPage;
