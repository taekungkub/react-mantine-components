import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button, Flex } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordPage() {
  const navigate = useNavigate();

  return (
    <Container size={500} style={{ height: "100vh", display: "grid", alignItems: "center" }}>
      <div>
        <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
          Reset Password!
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <PasswordInput label="New Password" placeholder="New Password" required mt="md" />
          <PasswordInput label="Confirm password" placeholder="Confirm new password" required mt="md" />

          <Button fullWidth mt="xl">
            Reset password
          </Button>
          <Flex justify={"center"}></Flex>
        </Paper>
      </div>
    </Container>
  );
}
