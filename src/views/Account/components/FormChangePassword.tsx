import { Box, Button, Divider, Grid, TextInput, Text, Flex, Title, Card, List, ThemeIcon, Avatar, Group, Badge } from "@mantine/core";
import MyCard from "../../../components/MyCard";
import { IconCircleCheck, IconCircleDashed, IconDeviceDesktopStar, IconDeviceIpad, IconDeviceIpadHorizontal, IconStar } from "@tabler/icons-react";

function FormChagePassword() {
  return (
    <Box p={"xl"}>
      <Grid align="center">
        <Grid.Col xs={4}>
          <Text>Current Password</Text>
        </Grid.Col>
        <Grid.Col xs={8}>
          <TextInput placeholder="Current Password" />
        </Grid.Col>
      </Grid>
      <Divider my="lg" />
      <Grid align="center">
        <Grid.Col xs={4}>
          <Text>New Password</Text>
        </Grid.Col>
        <Grid.Col xs={8}>
          <TextInput placeholder="New Password" />
        </Grid.Col>
      </Grid>
      <Divider my="lg" />

      <Grid align="center">
        <Grid.Col xs={4}>
          <Text>Confirm New Password</Text>
        </Grid.Col>
        <Grid.Col xs={8}>
          <TextInput placeholder="Confirm New Password" />
        </Grid.Col>
      </Grid>
      <Divider my="lg" />

      <Flex mt={"md"}>
        <Button>Update password</Button>
        <Button variant="subtle">Reset </Button>
      </Flex>

      <Box mt={50} mb={20}>
        <Text fw={600}>Where you're signed in</Text>
        <Text fz="sm">You're signed in to your account on these devices.</Text>
      </Box>
      <MyCard>
        <Card.Section>
          <Group noWrap p={"xl"}>
            <Avatar color="blue" radius="sm">
              <IconDeviceDesktopStar size="1.5rem" />
            </Avatar>
            <div style={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                Desktop FKL-278{" "}
                <Badge color="teal" ml={"sm"}>
                  Current
                </Badge>
              </Text>
              <Text size="xs" color="dimmed" weight={400}>
                Manhattan, United State • 09-Mar-2022, 04:32 PM
              </Text>
            </div>
          </Group>
          <Divider />
          <Group noWrap p={"xl"}>
            <Avatar color="blue" radius="sm">
              <IconDeviceIpad size="1.5rem" />
            </Avatar>
            <div style={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                iPhone 13 Pro Max
              </Text>{" "}
              <Text size="xs" color="dimmed" weight={400}>
                Manhattan, United State • 04-Mar-2022, 07:15 PM
              </Text>
            </div>
          </Group>
        </Card.Section>
      </MyCard>
    </Box>
  );
}

export default FormChagePassword;
