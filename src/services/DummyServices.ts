import Api from "./Api"

export default {
  products() {
    return Api.get("/products")
  },
  product(id: string) {
    return Api.get("/products/" + id)
  },
  customers() {
    return Api.get("/users")
  },

  categories() {
    return Api.get("/products/categories")
  },
  categoryProducts(category: string) {
    return Api.get("/products/category/" + category)
  },
  login() {
    return Api.post("auth/login", {
      username: "kminchelle",
      password: "0lelplR",
      expiresInMins: 120, // optional
    })
  },
  searchProduct(search: string) {
    return Api.get(`/products/search?q=${search}`)
  },
  todos() {
    return Api.get(`/todos`)
  },
  comments() {
    return Api.get("/comments")
  },
}
