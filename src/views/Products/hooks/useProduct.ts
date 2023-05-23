import { useEffect, useState } from "react";
import ProductServices from "../../../services/ProductServices";

function useProduct() {
  const [products, setProducts] = useState<Array<ProductTy>>([]);

  useEffect(() => {
    getProducts();

    return () => {};
  }, []);

  async function getProducts() {
    try {
      const res = await ProductServices.product();
      setProducts(res.data.products);
    } catch (error) {}
  }
  return {
    products,
  };
}

export default useProduct;
