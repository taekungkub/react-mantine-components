import { useEffect, useState } from "react"
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, createStyles, rem } from "@mantine/core"
import { IconChevronLeft, IconChevronRight, IconLogout } from "@tabler/icons-react"
import { useLocation, useNavigate } from "react-router-dom"
import useAuth from "../context/AuthContext"
import { mockdata } from "../constant/menu"

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
      color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[4],
    },
  },

  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    paddingLeft: rem(31),
    marginLeft: rem(30),
    borderLeft: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[4],
    },
    transition: "color 200ms ease",
  },

  linkActive: {
    color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[4],
    "&:hover": {
      color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[4],
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
  links?: { label: string; link: string; roles?: string[] }[]
  link?: string
  roles?: string[]
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, link, roles }: LinksGroupProps) {
  const { classes, theme, cx } = useStyles()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft
  const navigate = useNavigate()
  const location = useLocation()
  const [active, setActive] = useState(location.pathname ?? "")
  const { user } = useAuth()
  const splitLocation = location.pathname.split("/")
  const [subLinkActive, setSubLinkActive] = useState("")

  useEffect(() => {
    setSubLinkActive(location.pathname)

    if (hasLinks) {
      links?.map((menu) => {
        if (splitLocation[1]) {
          if (splitLocation[1] === menu.link.split("/")[1]) {
            setOpened(true)
          } else {
            setOpened(false)
          }
        }
      })
    } else {
      setActive(location.pathname)
    }
  }, [location.pathname])

  const items = (hasLinks ? links : []).map((menu) => {
    const ItemDropdown = (
      <>
        <Text<"a">
          component="a"
          className={cx(classes.link, { [classes.linkActive]: menu.link === subLinkActive })}
          href={menu.link}
          key={menu.label}
          onClick={(event) => {
            event.preventDefault()
            navigate(`${menu.link}`)
          }}
        >
          {menu.label}
        </Text>
      </>
    )
    if (menu.roles) {
      if (menu.roles.find((role) => user?.roles.includes(role))) {
        return <div key={menu.label}>{ItemDropdown}</div>
      } else {
        return null
      }
    } else {
      return <div key={menu.label}>{ItemDropdown}</div>
    }
  })

  const ItemsNoDropdown = () => {
    if (link) {
      return (
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
      )
    }
  }

  const MenuItem = (
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

  if (roles) {
    if (roles?.find((role) => user?.roles.includes(role))) {
      return <>{MenuItem}</>
    } else {
      return null
    }
  }

  return <>{MenuItem}</>
}

export function NavbarLinksGroup() {
  const Items = mockdata.map((item) => <LinksGroup {...item} key={item.label} />)
  return (
    <Box
      sx={(theme) => ({
        minHeight: rem(220),
        padding: theme.spacing.sm,
      })}
    >
      {Items}
    </Box>
  )
}
