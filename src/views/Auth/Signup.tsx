import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button, Flex } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import { IconArrowLeft } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"
import { signupSchema } from "../../constant/form.schema"

export default function SignupPage() {
  const navigate = useNavigate()

  const form = useForm({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validate: zodResolver(signupSchema),
  })

  return (
    <Container size={420} style={{ height: "100vh", display: "grid", alignItems: "center" }}>
      <div>
        <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
          Create account!
        </Title>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" {...form.getInputProps("email")} />
            <PasswordInput label="Password" placeholder="Your password" mt="md" {...form.getInputProps("password")} />
            <PasswordInput label="Confirm password" placeholder="Your confirm password" mt="md" {...form.getInputProps("confirmPassword")} />

            <Button fullWidth mt="xl" type="submit">
              Sign up
            </Button>
            <Flex justify={"center"}>
              <Button variant="subtle" leftIcon={<IconArrowLeft size="0.9rem" />} onClick={() => navigate("/signin")}>
                Sign in
              </Button>
            </Flex>
          </Paper>
        </form>
      </div>
    </Container>
  )
}
