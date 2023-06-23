import { AppShell, Box, Burger, Button, Container, Drawer, Flex, Group, Header, MediaQuery, Title, useMantineTheme } from "@mantine/core"
import { useDisclosure, useMediaQuery } from "@mantine/hooks"
import { Icon24Hours, IconAB } from "@tabler/icons-react"
import AboutSection from "./About"
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionFour from "./SectionFour"
import SectionFive from "./SectionFive"
import Footer from "./Footer"
import { Link } from "react-scroll"
import ButtonToTop from "./components/ButtonToTop"
import DrawerSidebar from "./components/DrawerSidebar"

interface Props {
  children: React.ReactNode
}

function Navbar({ children }: Props) {
  const [opened, { toggle, close }] = useDisclosure(false)

  const menus = [
    { title: "Home", value: "about" },
    { title: "About", value: "about" },
    { title: "Fearute", value: "section-four" },
    { title: "FAQ", value: "section-five" },
  ]

  const Items = menus.map((v) => {
    return (
      <Button color={"yellow"} variant={"subtle"} key={v.title}>
        <Link to={v.value} smooth duration={500}>
          {v.title}
        </Link>
      </Button>
    )
  })

  const theme = useMantineTheme()
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)

  return (
    <>
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            <Container size={"xl"}>
              <Flex justify={"space-between"} align={"center"} h={"100%"}>
                <IconAB size={32} />
                <div>
                  <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
                    <Group spacing={12}>
                      {Items}
                      <Button color={"yellow"} component="a" target="_blank" rel="noopener noreferrer" href="https://mantine.dev/">
                        Checkout mantine
                      </Button>
                    </Group>
                  </MediaQuery>
                  <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
                    <Burger opened={opened} onClick={toggle} size="sm" />
                  </MediaQuery>
                </div>
              </Flex>
            </Container>
          </Header>
        }
        footer={<Footer />}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        {children}
      </AppShell>

      {matches && <DrawerSidebar opened={opened} close={close} menus={menus} />}
    </>
  )
}

function LandingPage() {
  return (
    <>
      <Navbar>
        <AboutSection />
        <SectionOne />
        <SectionTwo />
        <SectionFour />
        <SectionFive />
        <ButtonToTop />
      </Navbar>
    </>
  )
}

export default LandingPage
