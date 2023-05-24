import { Drawer, Navbar, ScrollArea } from "@mantine/core";
import { mockdata } from "../constant/menu";
import { LinksGroup } from "../components/NavbarLinksGroup";

//Sidebar
export function TheNavbar() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar hidden width={{ sm: 250 }} height={"100vh-60px"} hiddenBreakpoint={"sm"}>
      <Navbar.Section grow component={ScrollArea}>
        {links}
      </Navbar.Section>
    </Navbar>
  );
}
interface Props {
  opened: boolean;
  handleOpened: () => void;
}
export function TheDrawer({ opened, handleOpened }: Props) {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

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
  );
}
