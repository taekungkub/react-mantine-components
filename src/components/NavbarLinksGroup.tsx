import { useEffect, useState } from "react"
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, createStyles, rem, getStylesRef, Navbar, ScrollArea } from "@mantine/core"
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
    paddingLeft: rem(63),

    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colors.blue[4],
    },
    transition: "color 200ms ease",
  },

  linkActive: {
    color: theme.colors.blue[4],
    "&:hover": {
      color: theme.colors.blue[4],
    },
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}))

interface LinksGroupProps {
  icon: React.FC<any>
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string }[]
  link?: string
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, link }: LinksGroupProps) {
  const { classes, theme, cx } = useStyles()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft
  const navigate = useNavigate()
  const location = useLocation()
  const [active, setActive] = useState(location.pathname ?? "")

  useEffect(() => {
    setActive(location.pathname)

    links?.map((link) => {
      if (location.pathname === link.link) {
        setOpened(true)
      }
      if (location.pathname.split("/").length >= 2) {
        if (location.pathname.split("/")[1] !== link.link.split("/")[1]) {
          setOpened(false)
        }
      }
    })
  }, [location.pathname])

  const items = (hasLinks ? links : []).map((link) => (
    <Text<"a">
      component="a"
      className={cx(classes.link, { [classes.linkActive]: link.link === active })}
      href={link.link}
      key={link.label}
      onClick={(event) => {
        event.preventDefault()

        navigate(`${link.link}`)
      }}
    >
      {link.label}
    </Text>
  ))

  const ItemsNoDropdown = () => {
    if (link)
      return (
        <>
          <Text<"a">
            component="a"
            className={cx({ [classes.linkActive]: link === active })}
            href={link}
            key={label}
            onClick={(event) => {
              event.preventDefault()
            }}
          >
            {label}
          </Text>
        </>
      )
  }

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o)

          if (!hasLinks) {
            navigate(`${link}`)
          }
        }}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size="1.1rem" />
            </ThemeIcon>
            <Box ml="md">{links ? label : ItemsNoDropdown()} </Box>
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
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}

const mockdata = {
  label: "Releases",
  icon: IconCalendarStats,
  links: [
    { label: "Upcoming releases", link: "/" },
    { label: "Previous releases", link: "/" },
    { label: "Releases schedule", link: "/" },
  ],
}

// export function NavbarLinksGroup() {
//   return (
//     <Box
//       sx={(theme) => ({
//         minHeight: rem(220),
//         padding: theme.spacing.md,
//         backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
//       })}
//     >
//       <LinksGroup {...mockdata} />
//     </Box>
//   );
// }
