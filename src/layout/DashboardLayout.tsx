import { AppShell, Navbar, Header, Button, Burger, Box, Flex, MediaQuery, Drawer, Text, ScrollArea, createStyles, Transition } from "@mantine/core";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { LinksGroup } from "../components/NavbarLinksGroup";
import { mockdata } from "../constant/menu";
import { TheNavbar, TheDrawer } from "./TheNavbar";
import MenuLang from "../components/MenuLangs";
import { IconMoon } from "@tabler/icons-react";
import ButtonToggleTheme from "../components/ButtonToggleTheme";

function DashboardLayout() {
  const [opened, setOpened] = useState(false);

  function handleOpened() {
    setOpened(!opened);
  }

  const useStyles = createStyles((theme) => ({
    navbar: {
      transition: "all 200ms ease",
    },
  }));

  const { classes } = useStyles();

  return (
    <>
      <AppShell
        padding="lg"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<TheNavbar />}
        header={
          <Header height={60} p="xs">
            <Flex justify={"space-between"} align={"center"}>
              <Flex>
                <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
                  <Burger opened={opened} onClick={handleOpened} title={"title"} size="sm" />
                </MediaQuery>
                <Box pl={"sm"}>
                  <Text fz="lg" weight={"bold"}>
                    My App
                  </Text>
                </Box>
              </Flex>
              <Flex gap={4} align={"center"}>
                <ButtonToggleTheme />
                <MenuLang />
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <Button>Header</Button>
                </MediaQuery>
              </Flex>
            </Flex>
          </Header>
        }
      >
        <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
          {/* <Drawer
            opened={opened}
            onClose={handleOpened}
            title="Default Text"
            size={"250px"}
            transitionProps={{ transition: "rotate-left", duration: 150, timingFunction: "linear" }}
          >
            <Navbar.Section grow component={ScrollArea}>
              {links}
            </Navbar.Section>
          </Drawer> */}
          <TheDrawer opened={opened} handleOpened={handleOpened} />
        </MediaQuery>
        <Outlet />
      </AppShell>
    </>
  );
}

export default DashboardLayout;
