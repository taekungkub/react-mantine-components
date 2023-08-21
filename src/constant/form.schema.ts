import * as Yup from "yup"
import { regexStrongPassword } from "../helper/utils"

const passwordStrongText = "Password must contain at least 8 characters, one uppercase, one number and one special case character"
export const signinSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().matches(regexStrongPassword, passwordStrongText),
})

export const signupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().matches(regexStrongPassword, passwordStrongText),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Your passwords do not match."),
})
