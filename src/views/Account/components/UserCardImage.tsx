import { createStyles, Card, Avatar, Text, Group, Button, rem, ActionIcon, Box, Flex, ThemeIcon } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `${rem(2)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white}`,
  },
}));

interface UserCardImageProps {
  image: string;
  name: string;
  job: string;
  stats: { label: string; icon: React.FC<any> }[];
}

export function UserCardImage({ image, name, job, stats }: UserCardImageProps) {
  const { classes, theme } = useStyles();

  const items = stats.map((stat) => (
    <Flex key={stat.label} direction={"column"} justify={"center"} align={"center"}>
      <ActionIcon variant="subtle" key={stat.label}>
        <stat.icon size="1.225rem" color="gray" />
      </ActionIcon>
      <Text ta="center" fz="sm" c="dimmed" mt={5}>
        {stat.label}
      </Text>
    </Flex>
  ));

  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section />
      <Avatar src={image} size={120} radius={80} mx="auto" mt={30} className={classes.avatar} />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {job}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>
    </Card>
  );
}
