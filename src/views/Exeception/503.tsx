import { createStyles, Container, Title, Text, Button, Group, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
    height: "100vh",
  },

  inner: {
    position: "relative",
  },

  image: {
    ...theme.fn.cover(),
    opacity: 0.65,
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4],

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(120),
    },
  },

  content: {
    position: "relative",
    zIndex: 1,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(460),
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

export default function ServerOverload() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.inner}>
          <div className={classes.label}>503</div>
          <div className={classes.content}>
            <Title className={classes.title}>All of our servers are busy</Title>
            <Text size="lg" align="center" className={classes.description}>
              We cannot handle your request right now, please wait for a couple of minutes and refresh the page. Our team is already working on this issue.
            </Text>
            <Group position="center">
              <Button size="md" variant="white">
                Refresh the page
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}
