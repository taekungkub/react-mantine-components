import { Box, Button, Drawer, Flex } from "@mantine/core"
import { Link } from "react-scroll"

interface Props {
  opened: boolean
  close: () => void
  menus: { title: string; value: string }[]
}

function DrawerSidebar({ opened, close, menus }: Props) {
  const Items = menus.map((v) => {
    return (
      <Button color={"yellow"} variant={"subtle"} key={v.title}>
        <Link to={v.value} smooth duration={500} onClick={close}>
          {v.title}
        </Link>
      </Button>
    )
  })

  return (
    <>
      <Drawer opened={opened} onClose={close} position={"right"} size={"sm"} transitionProps={{ transition: "rotate-left", duration: 150, timingFunction: "linear" }}>
        <Flex direction={"column"} justify={"start"} align={"start"} gap={20}>
          {Items}
          <Button color={"yellow"} component="a" target="_blank" rel="noopener noreferrer" href="https://mantine.dev/">
            Checkout mantine
          </Button>
        </Flex>
      </Drawer>
    </>
  )
}

export default DrawerSidebar
