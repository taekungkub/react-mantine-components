import { AppShell, Header, Burger, Box, Flex, MediaQuery, Text, createStyles, Button, ActionIcon, ThemeIcon } from "@mantine/core"
import { Outlet } from "react-router-dom"
import { TheNavbar, TheDrawer } from "./TheNavbar"
import MenuLang from "../components/MenuLangs"
import ButtonToggleTheme from "../components/ButtonToggleTheme"
import MenuDropdownProfile from "../components/MenuDropdownProfile"
import useSidebar from "../hooks/useSidebar"
import { IconShoppingCart } from "@tabler/icons-react"

function DashboardLayout() {
  const { opened, setOpened, handleOpened } = useSidebar()

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
              <Flex gap={20} align={"center"}>
                <ActionIcon variant="light"  color="blue" size={'lg'}>
                  <IconShoppingCart size="1.125rem"  />
                </ActionIcon>
                <ButtonToggleTheme />

                <MenuDropdownProfile />

                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <div>
                    <MenuLang />
                  </div>
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
