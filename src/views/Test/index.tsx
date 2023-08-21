import React from "react"
import PageTitle from "../../components/PageTitle"
import { Button, Flex, Group } from "@mantine/core"
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
          <PageTitle title={"Mantine + Tailwind"}></PageTitle>
        </div>
      </Flex>
    </div>
  )
}
