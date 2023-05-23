import Api from "./Api";

export default {
  product() {
    return Api.get("/products");
  },
};
