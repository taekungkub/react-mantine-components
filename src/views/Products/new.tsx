import { Box, Divider, Grid } from "@mantine/core";
import PageTitle from "../../components/PageTitle";
import FormAddProduct from "./components/FormAddProduct";

function ProductNewPage() {
  return (
    <div>
      <PageTitle pageTitle="Add New Product"></PageTitle>

      <Box mt={20}>
        <PageTitle title="Basic Information" subtitle="Section to config basic product information"></PageTitle>
        <FormAddProduct />
      </Box>
    </div>
  );
}

export default ProductNewPage;
