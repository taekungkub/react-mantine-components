import { AppShell, Header, Burger, Box, Flex, MediaQuery, Text, createStyles, Button, ActionIcon, ThemeIcon } from "@mantine/core"
import { Outlet, useNavigate } from "react-router-dom"
import { TheNavbar, TheDrawer } from "./TheNavbar"
import MenuLang from "../components/MenuLangs"
import ButtonToggleTheme from "../components/ButtonToggleTheme"
import MenuDropdownProfile from "../components/MenuDropdownProfile"
import useSidebar from "../hooks/useSidebar"
import { IconShoppingCart } from "@tabler/icons-react"
import LanguagePicker from "@/components/LanguagePicker"

function DashboardLayout() {
  const { opened, setOpened, handleOpened } = useSidebar()
  const navigate = useNavigate()
  return (
    <>
      <AppShell
        padding="lg"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<TheNavbar />}
        header={
          <Header height={60} p="xs">
            <Flex justify={"space-between"} align={"center"} px={"sm"}>
              <Flex>
                <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
                  <Burger opened={opened} onClick={handleOpened} title={"title"} size="sm" />
                </MediaQuery>
                <Box>
                  <Text fz="lg" weight={"bold"}>
                    My App
                  </Text>
                </Box>
              </Flex>
              <Flex gap={15} align={"center"}>
                <ActionIcon variant="light" color="blue" size={"lg"} onClick={() => navigate("/cart")}>
                  <IconShoppingCart size="1.125rem" />
                </ActionIcon>
                <ButtonToggleTheme />

                <MenuDropdownProfile />

                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  {/* <MenuLang /> */}
                  <LanguagePicker />
                </MediaQuery>
              </Flex>
            </Flex>
          </Header>
        }
      >
        <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
          <TheDrawer opened={opened} handleOpened={handleOpened} />
        </MediaQuery>
        <Outlet />
      </AppShell>
    </>
  )
}

export default DashboardLayout
