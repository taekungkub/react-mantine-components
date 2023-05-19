import { AppShell, Navbar, Header, Button, Burger, Box, Flex, MediaQuery, Drawer, Text, ScrollArea, createStyles } from "@mantine/core";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { LinksGroup } from "../components/NavbarLinksGroup";
import { IconAdCircle, IconCalendarStats, IconCompass, IconFileAnalytics, IconHome, IconLock, IconNotes, IconUser } from "@tabler/icons-react";
function DashboardLayout() {
  const [opened, setOpened] = useState(false);

  function handleOpened() {
    setOpened(!opened);
  }
  const mockdata = [
    {
      label: "Home",
      icon: IconHome,
      link: "/",
    },
    {
      label: "Dashboard",
      icon: IconNotes,
      link: "/dashboard",
    },
    {
      label: "Account",
      icon: IconUser,
      initiallyOpened: false,

      links: [
        { label: "Profile", link: "/profile" },
        { label: "Settings", link: "/settings" },
      ],
    },
    {
      label: "Components",
      icon: IconCompass,
      links: [{ label: "Card", link: "/profile" }],
    },
    {
      label: "Market news",
      icon: IconNotes,
      initiallyOpened: false,
      links: [
        { label: "Overview", link: "" },
        { label: "Forecasts", link: "" },
        { label: "Outlook", link: "" },
        { label: "Real time", link: "" },
      ],
    },
    {
      label: "Releases",
      icon: IconCalendarStats,
      initiallyOpened: false,

      links: [
        { label: "Upcoming releases", link: "" },
        { label: "Previous releases", link: "" },
        { label: "Releases schedule", link: "" },
      ],
    },
    { label: "Analytics", icon: IconCalendarStats, link: "/analytics" },
    { label: "Contracts", icon: IconFileAnalytics, link: "/contracts" },
    { label: "Settings", icon: IconAdCircle, link: "/settings" },
  ];

  const useStyles = createStyles((theme) => ({
    navbar: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.blue[5],
    },
  }));
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
          <Drawer opened={opened} onClose={handleOpened} title="Default Text" size={"250px"}>
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
