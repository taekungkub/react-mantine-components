import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
  ThemeIcon,
  Avatar,
  Flex,
  Box,
  Container,
  Grid,
} from "@mantine/core"
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconAt, IconPhone, IconMapPin, IconSun } from "@tabler/icons-react"

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
    height: "100vh",
    display: "grid",
    alignItems: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}))

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram]

export default function ContactPage() {
  const { classes } = useStyles()

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ))

  const MOCKDATA = [
    { title: "Email", description: "hello@mantine.dev", icon: IconAt },
    { title: "Phone", description: "+49 (800) 335 35 35", icon: IconPhone },
    { title: "Address", description: "844 Morris Park avenue", icon: IconMapPin },
    { title: "Working hours", description: "8 a.m. – 11 p.m.", icon: IconSun },
  ]

  const ContractList = MOCKDATA.map((v) => (
    <>
      <Flex gap={"md"} mt={20}>
        <ThemeIcon size={"md"}>
          <v.icon size={"1.5rem"} />
        </ThemeIcon>
        <div>
          <Text size={"xs"} color="white" fw={300}>
            {v.title}
          </Text>
          <Text color="white" fs={"sm"}>
            {v.description}
          </Text>
        </div>
      </Flex>
    </>
  ))

  return (
    <div className={classes.wrapper}>
      <div>
        <Grid>
          <Grid.Col sm={4} offsetSm={2}>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you within 24 hours
            </Text>

            {ContractList}

            <Group mt="xl">{icons}</Group>
          </Grid.Col>
          <Grid.Col sm={4} className={classes.form}>
            <TextInput label="Email" placeholder="your@email.com" required classNames={{ input: classes.input, label: classes.inputLabel }} />
            <TextInput label="Name" placeholder="John Doe" mt="md" classNames={{ input: classes.input, label: classes.inputLabel }} />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group position="right" mt="md">
              <Button className={classes.control}>Send message</Button>
            </Group>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  )
}
