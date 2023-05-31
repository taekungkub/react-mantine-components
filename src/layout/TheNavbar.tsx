import { Drawer, Navbar, ScrollArea, createStyles } from "@mantine/core"
import { mockdata } from "../constant/menu"
import { LinksGroup } from "../components/NavbarLinksGroup"
import { boolean } from "joi"

const useStyles = createStyles((theme) => ({
  navbar: {
    transition: "all 200ms ease",
  },
}))

interface PropsTheNavbar {
  isCollapse?: boolean
}

//Sidebar
export function TheNavbar({ isCollapse }: PropsTheNavbar) {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />)
  const { classes } = useStyles()

  return (
    <Navbar hidden width={{ sm: isCollapse ? 0 : 250 }} height={"100vh-60px"} hiddenBreakpoint={"sm"} className={classes.navbar}>
      <Navbar.Section grow component={ScrollArea}>
        {links}
      </Navbar.Section>
    </Navbar>
  )
}
interface Props {
  opened: boolean
  handleOpened: () => void
}
export function TheDrawer({ opened, handleOpened }: Props) {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />)

  return (
    <Drawer
      opened={opened}
      onClose={handleOpened}
      title="Default Text"
      size={"250px"}
      transitionProps={{ transition: "rotate-left", duration: 150, timingFunction: "linear" }}
    >
      <Navbar.Section grow component={ScrollArea}>
        {links}
      </Navbar.Section>
    </Drawer>
  )
}
