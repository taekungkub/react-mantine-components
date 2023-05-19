import { AppShell, Navbar, Header, Button, Burger, Box, Flex, MediaQuery, Drawer, Text, ScrollArea, createStyles, Transition } from "@mantine/core";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { LinksGroup } from "../components/NavbarLinksGroup";
import { mockdata } from "../constant/menu";

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
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <>
      <AppShell
        padding="lg"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar hidden width={{ sm: 250 }} height={"100vh-60px"} hiddenBreakpoint={"sm"}>
            <Navbar.Section grow component={ScrollArea}>
              {links}
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            <Flex justify={"space-between"} align={"center"}>
              <Flex>
                <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
                  <Burger opened={opened} onClick={handleOpened} title={"title"} size="sm" />
                </MediaQuery>
                <Box pl={"sm"}>
                  <Text fz="lg" weight={"bold"}>
                    Default text
                  </Text>
                </Box>
              </Flex>
              <Flex gap={4}>
                <Button>Header {opened}</Button>

                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <Button>Header</Button>
                </MediaQuery>
              </Flex>
            </Flex>
          </Header>
        }
      >
        <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
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
        </MediaQuery>

        <Outlet />
      </AppShell>
    </>
  );
}

export default DashboardLayout;
