import { Drawer, Navbar, ScrollArea, createStyles } from "@mantine/core"
import { NavbarLinksGroup } from "../components/NavbarLinksGroup"

const useStyles = createStyles((theme) => ({
  navbar: {
    transition: "all 200ms ease",
  },
}))

interface PropsTheNavbar {
  isCollapse?: boolean
  opened?: boolean
}

//Sidebar
export function TheNavbar({ isCollapse }: PropsTheNavbar) {
  const { classes } = useStyles()

  return (
    <Navbar hidden width={{ sm: isCollapse ? 0 : 250 }} height={"100vh-60px"} hiddenBreakpoint={"sm"} className={classes.navbar}>
      <Navbar.Section grow component={ScrollArea}>
        <NavbarLinksGroup />
      </Navbar.Section>
    </Navbar>
  )
}
interface Props {
  opened: boolean
  handleOpened: () => void
}
export function TheDrawer({ opened, handleOpened }: Props) {
  return (
    <Drawer
      opened={opened}
      onClose={handleOpened}
      title="Default Text"
      size={"250px"}
      transitionProps={{ transition: "rotate-left", duration: 150, timingFunction: "linear" }}
    >
      <Navbar.Section grow component={ScrollArea}>
        <NavbarLinksGroup />
      </Navbar.Section>
    </Drawer>
  )
}
