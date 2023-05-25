import axios from "axios"

export default function MyApi() {
  const ApiTae = axios.create({
    baseURL: "http://localhost:8000",
    headers: { "Content-Type": "application/json" },
  })

  ApiTae.interceptors.request.use(
    async (config: any) => {
      const token = localStorage.getItem("token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      if (config.isUploadFile) {
        config.headers["Content-Type"] = "multipart/form-data"
      }

      return config
    },
    (error) => {
      Promise.reject(error)
    }
  )

  ApiTae.interceptors.response.use(
    (response) => {
      const successCode = "200"
      const { statusCode } = response.data
      if (successCode.includes(statusCode)) {
        return response
      }

      return Promise.reject(response.data.error.description ?? response) // return another status code
    },
    (error) => {
      return Promise.reject(error.data ?? error)
    }
  )

  return {
    ApiTae,
  }
}
