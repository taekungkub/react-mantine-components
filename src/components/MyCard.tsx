import { Card, createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
}));
interface Props {
  children: React.ReactNode;
}

export default function MyCard({ children }: Props) {
  const { classes, theme } = useStyles();

  return (
    <>
      <Card withBorder padding="xl" radius="md" className={classes.card}>
        {children}
      </Card>
    </>
  );
}
