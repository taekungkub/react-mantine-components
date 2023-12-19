import { Box, Button, Card, Flex, Group, Input, Modal, Select, Text, Textarea } from "@mantine/core"
import { Icon123, IconHome } from "@tabler/icons-react"

interface Props {
  opened: boolean
  open: () => void
  close: () => void
  submit: (data: any) => void
}

export default function ModalFormAddress({ opened, open, close, submit }: Props) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      size={"lg"}
      title={
        <Flex align={"center"}>
          <IconHome />
          <Flex direction={"column"} ml={"sm"}>
            <Text fw={"bold"}>Address</Text>
          </Flex>
        </Flex>
      }
      centered
    >
      <Modal.Title></Modal.Title>
      <Card>
        <Card.Section>
          <Flex direction={"column"} gap={"sm"}>
            <Input placeholder="ชื่อ" />
            <Input placeholder="นามสกุล" />
            <Textarea placeholder="ที่อยู่" />
            <Input placeholder="แขวง" />
            <Input placeholder="เขต" />
            <Select
              placeholder="จังหวัด"
              data={[
                { value: "กรุงเทพมหานคร", label: "กรุงเทพมหานคร" },
                { value: "เชียงใหม่", label: "เชียงใหม่" },
              ]}
            />
            <Input placeholder="รหัสไปรษณีย์" />
          </Flex>
        </Card.Section>
        <Card.Section mt={"lg"}>
          <Flex justify="flex-end" align="flex-start" direction="row">
            <Button variant="subtle">Close</Button>
            <Button onClick={() => submit("formData")}>Confirm</Button>
          </Flex>
        </Card.Section>
      </Card>
    </Modal>
  )
}
