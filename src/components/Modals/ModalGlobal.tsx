import { useDisclosure } from "@mantine/hooks"
import { Modal, Button, Group, Grid, TextInput, createStyles, Input, Card } from "@mantine/core"
import useGlobalModal from "@/hooks/useGlobalModal"

export default function ModalGlobal() {
  const { opened, close, open } = useGlobalModal()

  return (
    <>
      <Modal opened={opened} onClose={close} title="Modal Global">
        <Card>
          <Card.Section>Test Modal Global</Card.Section>
        </Card>
      </Modal>
    </>
  )
}
