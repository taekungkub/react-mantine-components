import { useEffect, useState } from "react"
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, createStyles, rem, getStylesRef, Navbar, ScrollArea, Checkbox, Divider } from "@mantine/core"
import { IconCalendarStats, IconChevronLeft, IconChevronRight, IconLogout } from "@tabler/icons-react"
import { useLocation, useNavigate } from "react-router-dom"

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colors.blue[4],
    },
  },

  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colors.blue[4],
    },
    transition: "color 200ms ease",
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}))

interface LinksGroupProps {
  label: string
  initiallyOpened?: boolean
  links?: { label: string; value: string }[]
}

export function FilterLinkGroup({ label, initiallyOpened, links }: LinksGroupProps) {
  const { classes, theme, cx } = useStyles()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft

  const items = (hasLinks ? links : []).map((link, index) => (
    <Box className={cx(classes.link)} key={index}>
      <Checkbox label={link.label} value={link.value} />
    </Box>
  ))

  return (
    <>
      <Divider my={10} />
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o)
        }}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box> {label} </Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size="1rem"
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)` : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? (
        <ScrollArea.Autosize mah={200}>
          <Collapse in={opened}>{items}</Collapse>
        </ScrollArea.Autosize>
      ) : null}
    </>
  )
}
