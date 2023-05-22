import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button, Flex } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  return (
    <Container size={420} style={{ height: "100vh", display: "grid", alignItems: "center" }}>
      <div>
        <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
          Create account!
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <PasswordInput label="Confirm password" placeholder="Your confirm password" required mt="md" />

          <Button fullWidth mt="xl">
            Sign up
          </Button>
          <Flex justify={"center"}>
            <Button variant="subtle" leftIcon={<IconArrowLeft size="0.9rem" />} onClick={() => navigate("/signin")}>
              Sign in
            </Button>
          </Flex>
        </Paper>
      </div>
    </Container>
  );
}
