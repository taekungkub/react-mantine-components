import { AppShell, MediaQuery, Text, createStyles } from "@mantine/core"
import { Outlet } from "react-router-dom"
import { TheNavbar, TheDrawer } from "./TheNavbar"
import TheHeader from "./TheHeader"
import { useState } from "react"
import useSidebar from "../hooks/useSidebar"

const useStyles = createStyles((theme) => ({
  main: {
    transition: "padding-left 400ms ease",
  },
}))

function DashboardLayout() {
  const { classes } = useStyles()
  const [isCollapse, setIsCollapse] = useState(false)
  const { opened, setOpened, handleOpened } = useSidebar()

  return (
    <>
      <AppShell
        classNames={{
          main: classes.main,
        }}
        padding="lg"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<TheNavbar isCollapse={isCollapse} />}
        header={<TheHeader opened={opened} toggleCollapse={() => setIsCollapse(!isCollapse)} toggleBurger={handleOpened} />}
      >
        <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
          <TheDrawer opened={opened} handleOpened={handleOpened} />
        </MediaQuery>
        <Outlet />
      </AppShell>
    </>
  )
}

export default DashboardLayout
