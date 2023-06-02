import { Box, Card, Divider, ScrollArea, Title, createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  item: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
    marginBottom: theme.spacing.sm,
  },

  itemDragging: {
    boxShadow: theme.shadows.sm,
    border: `2px solid ${theme.colors.blue[4]}`,
  },

  symbol: {
    fontSize: rem(30),
    fontWeight: 700,
    width: rem(60),
  },
  board: {
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "250px",
    borderRadius: "10px",
    maxHeight: "250px",
    overflowY: "auto",
  },
}));

interface Props {
  children: React.ReactNode;
  title: string;
  background: string;
}

function BoardTask({ children, title, background }: Props) {
  const { classes, cx } = useStyles();

  return (
    <>
      <Card bg={background}>
        <Title order={4} mb={20} color="white">
          {title}
        </Title>
        <ScrollArea.Autosize mah={500}>{children}</ScrollArea.Autosize>
      </Card>
    </>
  );
}

export default BoardTask;
