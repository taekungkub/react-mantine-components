import { AppShell, Header, Burger, Box, Flex, MediaQuery, Text, createStyles, Button, ActionIcon, ThemeIcon, TextInput } from "@mantine/core"
import { Outlet, useNavigate, useSearchParams } from "react-router-dom"
import { TheNavbar, TheDrawer } from "./TheNavbar"
import MenuLang from "../components/MenuLangs"
import ButtonToggleTheme from "../components/ButtonToggleTheme"
import MenuDropdownProfile from "../components/MenuDropdownProfile"
import useSidebar from "../hooks/useSidebar"
import { IconAlignJustified, IconSearch, IconShoppingCart } from "@tabler/icons-react"
import LanguagePicker from "@/components/LanguagePicker"
import { useState } from "react"
import { useAppDispatch } from "../store/store"
import { setSearchTerms } from "../store/slices/searchSlice"

const useStyles = createStyles((theme) => ({
  main: {
    transition: "padding-left 400ms ease",
  },
}))

function DashboardLayout() {
  const { opened, setOpened, handleOpened } = useSidebar()
  const [isCollapse, setIsCollapse] = useState(false)
  const { classes } = useStyles()
  const [searchParams, setSearchParams] = useSearchParams()
  const [keyword, setKeyword] = useState("")
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  function handleSearchTerms() {
    dispatch(setSearchTerms(keyword))
    navigate(`/redux/search?keyword=${keyword}`)
  }

  return (
    <>
      <AppShell
        classNames={{
          main: classes.main,
        }}
        padding="lg"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<TheNavbar isCollapse={isCollapse} />}
        header={
          <Header height={60} p="xs">
            <Flex justify={"space-between"} align={"center"} px={"sm"}>
              <Flex>
                <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
                  <Burger opened={opened} onClick={handleOpened} title={"title"} size="sm" />
                </MediaQuery>
                <Flex wrap={"nowrap"} gap={20} align={"center"}>
                  <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <ActionIcon variant="light" color="gray" size={"lg"} onClick={() => setIsCollapse(!isCollapse)}>
                      <IconAlignJustified size="1.125rem" />
                    </ActionIcon>
                  </MediaQuery>
                  <Text fz="lg" weight={"bold"} sx={{ whiteSpace: "nowrap" }}>
                    My App
                  </Text>
                </Flex>
              </Flex>
              <Flex gap={15} align={"center"}>
                <TextInput
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Search product"
                  rightSection={
                    <ActionIcon variant="light" color="blue" size={"md"} onClick={() => handleSearchTerms()}>
                      <IconSearch size="1.125rem" />
                    </ActionIcon>
                  }
                  rightSectionWidth={36}
                />

                <ActionIcon variant="default" color="blue" size={"lg"} onClick={() => navigate("/cart")}>
                  <IconShoppingCart size="1.125rem" />
                </ActionIcon>
                <ButtonToggleTheme />

                <MenuDropdownProfile />

                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
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
