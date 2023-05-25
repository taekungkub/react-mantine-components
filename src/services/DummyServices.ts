import Api from "./Api"

export default {
  customers() {
    return Api.get("/users")
  },
}
