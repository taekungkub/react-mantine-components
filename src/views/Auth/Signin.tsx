import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches, yupResolver, zodResolver } from "@mantine/form"
import { regexStrongPassword } from "../../helper/utils"
import AuthAervices from "../../services/AuthServices"
import useAuth from "../../context/AuthContext"
import { signinSchema } from "@/constant/form.schema"

export default function SigninPage() {
  const navigate = useNavigate()

  const { login, loadingSubmit } = useAuth()

  const form = useForm({
    initialValues: { email: "tae@hotmail.com", password: "!Test123456" },
    validate: zodResolver(signinSchema),
  })

  async function handleSubmit() {
    try {
      console.log("Submit !")
      console.log(form.values)
      login(form.values.email, form.values.password)
    } catch (error) {}
  }

  return (
    <Container size={420} style={{ height: "100vh", display: "grid", alignItems: "center" }}>
      <div>
        <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" component="button" onClick={() => navigate("/signup")}>
            Create account
          </Anchor>
        </Text>

        <form onSubmit={form.onSubmit((values) => handleSubmit())}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" {...form.getInputProps("email")} autoComplete="username" />
            <PasswordInput label="Password" placeholder="Your password" mt="md" {...form.getInputProps("password")} autoComplete="current-password" />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm" onClick={() => navigate("/forgotpassword")}>
                Forgot password?
              </Anchor>
            </Group>
            <Button type="submit" fullWidth mt="xl" loading={loadingSubmit}>
              Sign in
            </Button>
          </Paper>
        </form>
      </div>
    </Container>
  )
}
