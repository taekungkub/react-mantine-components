import { Button, Flex, Group, Pagination, TextInput } from "@mantine/core";
import PageTitle from "../../components/PageTitle";
import useProduct from "./hooks/useProduct";
import { useEffect, useState } from "react";
import useMyPagination from "../../hooks/useMyPagination";
import ProductsTable2 from "./components/ProductsTable2";
import { useNavigate } from "react-router";
import useFilterProduct from "../../hooks/useFilterProduct";

function ProductListPage() {
  const { products } = useProduct();
  const [searchQuery, setSearchQuery] = useState("");
  const { productFilter } = useFilterProduct({
    data: products,
    searchQuery: searchQuery,
    sort: {
      price: "",
    },
  });
  const { currentRecords, totalPage, currentPage, setCurrentPage } = useMyPagination({ data: productFilter, pageSize: 5 });

  const nagigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);
  return (
    <div>
      <Flex justify={"space-between"} mb={20}>
        <PageTitle pageTitle="Product List" />
        <Flex wrap={"wrap"} gap={10} justify={"end"}>
          <TextInput placeholder="Seacrch" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

          <Button onClick={() => nagigate("/sales/products/new")}>Add Product</Button>
        </Flex>
      </Flex>
      <ProductsTable2 data={currentRecords} />
      <Group position="center" my={20}>
        <Pagination total={totalPage} siblings={2} value={currentPage} onChange={setCurrentPage} />
      </Group>
    </div>
  );
}

export default ProductListPage;
