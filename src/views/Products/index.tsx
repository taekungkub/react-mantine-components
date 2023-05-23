import PageTitle from "../../components/PageTitle";
import ProductTable from "./components/ProductsTable";
import useProduct from "./hooks/useProduct";

function ProductListPage() {
  const { products } = useProduct();

  function ProductList() {
    const listItems = products.map((v) => <li key={v.id.toString()}>{v.title}</li>);
    return <ul>{listItems}</ul>;
  }

  return (
    <div>
      {<ProductTable data={products} />}
      <PageTitle subtitle="">Product List</PageTitle>
    </div>
  );
}

export default ProductListPage;
