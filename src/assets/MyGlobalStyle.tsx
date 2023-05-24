import { Global, MantineProvider } from "@mantine/core"

export default function MyGlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": { boxSizing: "border-box" },
        body: {
          ...theme.fn.fontStyles(),
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
        },
        ".your-class": {
          backgroundColor: "red",
        },
      })}
    />
  )
}
