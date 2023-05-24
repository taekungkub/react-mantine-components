import { useDisclosure } from "@mantine/hooks"
import { Modal, Button, Group, Grid, TextInput, createStyles, Input } from "@mantine/core"
import { IMaskInput } from "react-imask"
import React from "react"
import { IconPlus } from "@tabler/icons-react"

interface Props {
  opened: boolean
  open: () => void
  close: () => void
}

export default function ModalCreditCard({ opened, open, close }: Props) {
  const useStyles = createStyles((theme) => ({}))

  const { classes } = useStyles()

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add Credit Card">
        <Grid>
          <Grid.Col sm={12}>
            <TextInput label="Card holder name" />
          </Grid.Col>
          <Grid.Col sm={12}>
            <Input.Wrapper label="Credit Card number" required>
              <Input<any> component={IMaskInput} mask="0000 0000 0000 0000" />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col sm={6}>
            <Input.Wrapper label="Expiration date" required>
              <Input<any> component={IMaskInput} mask="00/00" />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col sm={6}>
            <Input.Wrapper label="CVV" required>
              <Input<any> component={IMaskInput} mask="000" />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col sm={12}>
            <Button fullWidth>Add</Button>
          </Grid.Col>
        </Grid>
      </Modal>
    </>
  )
}
