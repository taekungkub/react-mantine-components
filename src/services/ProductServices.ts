import Api from "./Api"

export default {
  products() {
    return Api.get("/products")
  },
  product(id: string) {
    return Api.get("/products/" + id)
  },
  categories() {
    return Api.get("/products/categories")
  },
}
