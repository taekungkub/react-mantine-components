import ApiTae from "./ApiTae"

export default {
  login(user_email: string, user_password: string) {
    return ApiTae().ApiTae.post("/auth/login", {
      user_email: user_email,
      user_password: user_password,
    })
  },
  profile() {
    return ApiTae().ApiTae.get("/auth/profile")
  },
}
