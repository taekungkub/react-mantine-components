import { ButtonStylesParams, CardProps, ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core"
import { useHotkeys, useLocalStorage } from "@mantine/hooks"
import { Notifications } from "@mantine/notifications"

interface Props {
  children: React.ReactNode
}

function MyTheme({ children }: Props) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  useHotkeys([["mod+J", () => toggleColorScheme()]])

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            fontFamily: "Poppins",
            components: {
              Button: {},
              Card: {
                styles: (theme, params: CardProps, { variant }) => ({
                  root: {
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
                  },
                }),
              },
              Menu: {
                styles: (theme) => ({
                  dropdown: {
                    boxShadow: theme.shadows.lg,
                  },
                }),
              },
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Notifications position="top-right" />

          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default MyTheme
