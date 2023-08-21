import * as Yup from "yup"
import { regexStrongPassword } from "../helper/utils"
import { z } from "zod"

const passwordStrongText = "Password must contain at least 8 characters, one uppercase, one number and one special case character"
// export const signinSchema = Yup.object({
//   email: Yup.string().email().required(),
//   password: Yup.string().required().matches(regexStrongPassword, passwordStrongText),
// })

// export const signupSchema = Yup.object().shape({
//   email: Yup.string().email().required(),
//   password: Yup.string().required().matches(regexStrongPassword, passwordStrongText),
//   confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Your passwords do not match."),
// })

export const signinSchema = z.object({
  email: z.string().nonempty({ message: "Email cant empty" }).email({ message: "Invalid email" }),
  password: z.string().nonempty({ message: "Password cant empty" }),
})

export const signupSchema = z
  .object({
    email: z.string().nonempty().email(),
    password: z
      .string()
      .nonempty()
      .refine((value) => regexStrongPassword.test(value), passwordStrongText),
    confirmPassword: z.string().nonempty(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })
