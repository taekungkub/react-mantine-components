import React from "react"
import PageTitle from "../../components/PageTitle"
import { Badge, Box, Button, Flex, Group } from "@mantine/core"
import useGlobalModal from "../../hooks/useGlobalModal"
import NoteApps from "../../components/Notes"

type Props = {}

export default function TestPage({}: Props) {
  const globalModal = useGlobalModal()

  return (
    <div>
      <Flex direction={"column"} gap={20}>
        <Box>
          <PageTitle title={"Global modal with zustand"} />
          <Button onClick={() => globalModal.open()}>Open </Button>
        </Box>

        <Box>
          <PageTitle title={"Mantine + Tailwind"} />

          <Group>
            <Button classNames={{ root: "bg-blue-400 hover:bg-blue-200 " }}>Button Edit Root</Button>
            <Badge variant="gradient" classNames={{ root: "bg-gradient-to-r from-cyan-500 to-yellow-500" }}>
              cyan to yellow
            </Badge>
            <Button classNames={{ root: "bg-blue-400 hover:bg-blue-200 dark:bg-red-500 rounded-lg " }}>Dark mode</Button>
          </Group>
        </Box>

        <Box>
          <PageTitle title={"useNotes"} />
          <NoteApps />
        </Box>
      </Flex>
    </div>
  )
}
