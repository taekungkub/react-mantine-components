import { Header, Burger, Box, Flex, MediaQuery, Text, createStyles, Button, ActionIcon, ThemeIcon, TextInput, Indicator, Menu } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import ButtonCart from "../components/ButtonCart"
import { useState } from "react"
import { IconAlignJustified, IconSearch } from "@tabler/icons-react"
import { useAppDispatch } from "../store/store"
import { setSearchTerms } from "../store/slices/searchSlice"
import ButtonToggleTheme from "../components/ButtonToggleTheme"
import LanguagePicker from "@/components/LanguagePicker"
import MenuDropdownProfile from "../components/MenuDropdownProfile"

interface Props {
  opened: boolean
  toggleCollapse: () => void
  toggleBurger: () => void
}

function TheHeader({ toggleCollapse, toggleBurger, opened }: Props) {
  const [keyword, setKeyword] = useState("")

  function handleSearchTerms() {
    if (!keyword) return
    dispatch(setSearchTerms(keyword))
    navigate(`/ecommerce/search?keyword=${keyword}`)
  }

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return (
    <>
      {
        <Header height={60} p="xs">
          <Flex justify={"space-between"} align={"center"} px={"sm"}>
            <Flex>
              <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
                <ThemeIcon variant="light" color="gray" size={"lg"}>
                  <Burger opened={opened} onClick={() => toggleBurger()} title={"title"} size="sm" />
                </ThemeIcon>
              </MediaQuery>
              <Flex wrap={"nowrap"} gap={20} align={"center"}>
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <ActionIcon variant="light" color="gray" size={"lg"} onClick={() => toggleCollapse()}>
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
    </>
  )
}

export default TheHeader
