import { ButtonStylesParams, CardProps, ColorScheme, ColorSchemeProvider, MantineProvider, useMantineTheme } from "@mantine/core"
import { useHotkeys, useLocalStorage } from "@mantine/hooks"
import { Notifications } from "@mantine/notifications"
import { ModalsProvider } from "@mantine/modals"
import { DatePickerInput, DatesProvider, MonthPickerInput } from "@mantine/dates"
import "dayjs/locale/ru"

interface Props {
  children: React.ReactNode
}

function ThemeProvider({ children }: Props) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  useHotkeys([["mod+J", () => toggleColorScheme()]])

  const dark = colorScheme === "dark"
  const theme = useMantineTheme()

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            primaryColor: dark ? "yellow" : "",
            loader: "bars",
            colorScheme,
            fontFamily: "Poppins, sans-serif",
            fontFamilyMonospace: "Monaco, Courier, monospace",
            headings: { fontFamily: "Greycliff CF, sans-serif" },
            components: {
              Button: {
                // styles: (theme, params: ButtonStylesParams, { variant }) => ({
                //   root: {
                //     height: "2.625rem",
                //     padding: "0 1.875rem",
                //     backgroundColor: variant === "filled" ? theme.colors[params.color || theme.primaryColor][9] : undefined,
                //   },
                // }),

                variants: {
                  danger: (theme) => ({
                    root: {
                      backgroundColor: theme.colors.red[9],
                      color: theme.colors.red[0],
                      ...theme.fn.hover({ backgroundColor: theme.colors.red[8] }),
                    },
                  }),
                  success: (theme) => ({
                    root: {
                      backgroundImage: theme.fn.linearGradient(
                        45,
                        theme.colors.cyan[theme.fn.primaryShade()],
                        theme.colors.teal[theme.fn.primaryShade()],
                        theme.colors.green[theme.fn.primaryShade()]
                      ),
                      color: theme.white,
                    },
                  }),
                },
              },
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
          <Notifications position="top-center" />
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default ThemeProvider
