import React from "react"
import PageTitle from "../../components/PageTitle"
import { Badge, Button, Flex, Group } from "@mantine/core"
import useGlobalModal from "../../hooks/useGlobalModal"

type Props = {}

export default function TestPage({}: Props) {
  const globalModal = useGlobalModal()

  return (
    <div>
      <Flex direction={"column"} gap={20}>
        <div>
          <PageTitle title={"Global modal with zustand"} />
          <Button onClick={() => globalModal.open()}>Open </Button>
        </div>

        <div>
          <PageTitle title={"Mantine + Tailwind"} />

          <Group>
            <Button classNames={{ root: "bg-blue-400 hover:bg-blue-200 " }}>Button Edit Root</Button>
            <Badge variant="gradient" classNames={{ root: "bg-gradient-to-r from-cyan-500 to-yellow-500" }}>
              cyan to yellow
            </Badge>
            <Button classNames={{ root: "bg-blue-400 hover:bg-blue-200 dark:bg-red-500 rounded-lg " }}>Dark mode</Button>
          </Group>
        </div>
      </Flex>
    </div>
  )
}
