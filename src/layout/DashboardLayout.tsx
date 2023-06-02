import { AppShell, Header, Burger, Box, Flex, MediaQuery, Text, createStyles, Button, ActionIcon, ThemeIcon, TextInput, Indicator } from "@mantine/core"
import { Outlet, useNavigate, useSearchParams } from "react-router-dom"
import { TheNavbar, TheDrawer } from "./TheNavbar"
import MenuLang from "../components/MenuLangs"
import ButtonToggleTheme from "../components/ButtonToggleTheme"
import MenuDropdownProfile from "../components/MenuDropdownProfile"
import useSidebar from "../hooks/useSidebar"
import { IconAlignJustified, IconSearch } from "@tabler/icons-react"
import LanguagePicker from "@/components/LanguagePicker"
import { useState } from "react"
import { useAppDispatch } from "../store/store"
import { setSearchTerms } from "../store/slices/searchSlice"
import ButtonCart from "../components/ButtonCart"

const useStyles = createStyles((theme) => ({
  main: {
    transition: "padding-left 400ms ease",
  },
}))

function DashboardLayout() {
  const { opened, setOpened, handleOpened } = useSidebar()
  const [isCollapse, setIsCollapse] = useState(false)
  const { classes } = useStyles()

  const [keyword, setKeyword] = useState("")
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  function handleSearchTerms() {
    if (!keyword) return
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

                <ButtonCart />

                <ButtonToggleTheme />

                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <LanguagePicker />
                </MediaQuery>

                <MenuDropdownProfile />
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
