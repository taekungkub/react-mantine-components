import { ActionIcon, ColorScheme, Tooltip, useMantineColorScheme, useMantineTheme } from "@mantine/core"
import { IconMoonStars, IconSun } from "@tabler/icons-react"
import { useLocalStorage } from "@mantine/hooks"
import { useEffect } from "react"

function ButtonToggleTheme() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  })

  const { toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"
  const theme = useMantineTheme()

  //for tailwind dark mode
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  return (
    <Tooltip label="Change Theme" withArrow>
      <ActionIcon variant="default" color="blue" size={"lg"} onClick={() => toggleColorScheme()}>
        {colorScheme === "dark" && <IconSun size={"1.125rem"} />}
        {colorScheme === "light" && <IconMoonStars size={"1.125rem"} />}
      </ActionIcon>
    </Tooltip>
  )
}

export default ButtonToggleTheme
