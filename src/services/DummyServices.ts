import Api from "./Api"

export default {
  customers() {
    return Api.get("/users")
  },

  categories(){
    return Api.get('/products/categories')
  },
  categoryProducts(category:string){
    return Api.get('/products/category/' +category)

  }
}
