import { Burger, Button, Flex, Header, MediaQuery } from "@mantine/core";
import useSidebar from "../hooks/useSidebar";

function TheHeader() {
  const { opened, setOpened, handleOpened } = useSidebar();
  return (
    <Header height={60} p="xs">
      <Flex justify={"space-between"}>
        <Burger opened={opened} onClick={handleOpened} title={"title"} size="sm" />

        <Flex gap={4}>
          <Button>Header {opened}</Button>
          <Button>Header</Button>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Button>Header</Button>
          </MediaQuery>
        </Flex>
      </Flex>
    </Header>
  );
}

export default TheHeader;
