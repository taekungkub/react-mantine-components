import { Box, Button, Card, Divider, Drawer, Group, Navbar, ScrollArea, TextInput } from "@mantine/core"
import { CustomerTy } from "../../../type"
import { useForm } from "@mantine/form"
import { useEffect } from "react"

interface Props {
  opened: boolean
  close: () => void
  open: () => void
  customerData?: CustomerTy | null
}

function EditCustomerDrawer({ opened, close, open, customerData }: Props) {
  const form = useForm({
    initialValues: customerData,
  })

  useEffect(() => {
    form.setValues({
      ...customerData,
    })
  }, [customerData])

  return (
    <Drawer opened={opened} onClose={close} title={`Edit ${customerData?.firstName}`} position="right" scrollAreaComponent={ScrollArea.Autosize}>
      <form>
        <ScrollArea>
          <TextInput label="Firstname" {...form.getInputProps("firstName")} />
          <TextInput label="Lastname" mt={20} {...form.getInputProps("lastName")} />
          <TextInput label="Email" mt={20} {...form.getInputProps("email")} />
          <TextInput label="Phone" mt={20} {...form.getInputProps("phone")} />
        </ScrollArea>

        <Card px={0} sx={{ position: "sticky", bottom: 0 }} py={20}>
          <Group>
            <Button>Update</Button>
            <Button variant="subtle" onClick={close}>
              Cancel
            </Button>
          </Group>
        </Card>
      </form>
    </Drawer>
  )
}

export default EditCustomerDrawer
