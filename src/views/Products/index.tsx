import { Group, Pagination } from "@mantine/core"
import PageTitle from "../../components/PageTitle"
import ProductTable from "./components/ProductsTable"
import useProduct from "./hooks/useProduct"
import { usePagination } from "@mantine/hooks"
import { useEffect, useState } from "react"
import useMyPagination from "../../hooks/useMyPagination"
import ProductsTable2 from "./components/ProductsTable2"

function ProductList() {
  const { products } = useProduct()
  const listItems = products.map((v) => <li key={v.id.toString()}>{v.title}</li>)
  return <ul>{listItems}</ul>
}

function ProductListPage() {
  const { products } = useProduct()
  const { currentRecords, totalPage, currentPage, setCurrentPage } = useMyPagination({ data: products, pageSize: 5 })

  return (
    <div>
      <PageTitle subtitle="">Product List</PageTitle>
      <ProductsTable2 data={currentRecords} />
      <Group position="center" my={20}>
        <Pagination total={totalPage} siblings={2} value={currentPage} onChange={setCurrentPage} />
      </Group>
    </div>
  )
}

export default ProductListPage
