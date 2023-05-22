import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button, Flex, Avatar } from "@mantine/core";
import { IconArrowLeft, IconCheck, IconDiscountCheck, IconX } from "@tabler/icons-react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function VerifyEmailPage() {
  const navigate = useNavigate();

  const { code } = useParams();

  useEffect(() => {
    console.log(code);
  }, [code]);

  return (
    <Container size={500} style={{ height: "100vh", display: "grid", alignItems: "center" }}>
      <div>
        <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
          Verify Email!
        </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Group position="center">
            <Avatar color="teal" radius="sm">
              <IconCheck size="1.5rem" />
            </Avatar>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel veniam accusantium maiores quisquam porro asperiores repellat at quidem. Hic
              quisquam atque aspernatur sapiente officiis in quidem. Eum, repellendus excepturi.
            </Text>
            <Group position="center">
              <Avatar color="red" radius="sm">
                <IconX size="1.5rem" />
              </Avatar>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel veniam accusantium maiores quisquam porro asperiores repellat at quidem. Hic
                quisquam atque aspernatur sapiente officiis in quidem. Eum, repellendus excepturi.
              </Text>
            </Group>
          </Group>
        </Paper>
      </div>
    </Container>
  );
}
