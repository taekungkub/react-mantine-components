import { createStyles, Paper, Title, Text, TextInput, Button, Container, Group, Anchor, Center, Box, rem, NumberInput, Flex, Progress } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(26),
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  input: {
    textAlign: "center",
  },
}))

export default function CodeVerifyPage() {
  const { classes } = useStyles()
  const navigate = useNavigate()

  const [pin1, setPin1] = useState("")
  const [pin2, setPin2] = useState("")
  const [pin3, setPin3] = useState("")
  const [pin4, setPin4] = useState("")

  const inputRef2 = useRef<HTMLInputElement>(null)
  const inputRef3 = useRef<HTMLInputElement>(null)
  const inputRef4 = useRef<HTMLInputElement>(null)

  function handleChange(e: any) {
    if (!pin1) {
      setPin1(e.target.value)
      inputRef2.current?.focus()
    } else if (!pin2) {
      setPin2(e.target.value)
      inputRef3.current?.focus()
    } else if (!pin3) {
      setPin3(e.target.value)
      inputRef4.current?.focus()
    } else if (!pin4) {
      setPin4(e.target.value)
      inputRef4.current?.blur()
    }
  }

  return (
    <Container size={450} style={{ height: "100vh", display: "grid", alignItems: "center" }}>
      <div>
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <Title className={classes.title}>Enter Verification Code</Title>
            <Text c="dimmed" fz="sm" mt={4}>
              We send you on mail.
            </Text>
            <Text fz="sm" mt={12}>
              We ve send you code on jone. ****@company.com
            </Text>
            <Flex mt={20} gap={20} justify={"space-between"}>
              <TextInput required maxLength={1} value={pin1} onChange={handleChange} classNames={{ input: classes.input }} />
              <TextInput required ref={inputRef2} maxLength={1} value={pin2} onChange={handleChange} classNames={{ input: classes.input }} />
              <TextInput required ref={inputRef3} maxLength={1} value={pin3} onChange={handleChange} classNames={{ input: classes.input }} />
              <TextInput required ref={inputRef4} maxLength={1} value={pin4} onChange={handleChange} classNames={{ input: classes.input }} />
            </Flex>

            <Button my={"md"} fullWidth type="submit">
              Continue
            </Button>
          </form>
          <Flex mt={"lg"} justify={"space-between"} className={classes.controls}>
            <Anchor color="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <Box ml={5}>Did not receive the email? Check your spam filter, or</Box>
              </Center>
            </Anchor>
            <Button variant="subtle" className={classes.control}>
              Resend
            </Button>
          </Flex>
        </Paper>
      </div>
    </Container>
  )
}
