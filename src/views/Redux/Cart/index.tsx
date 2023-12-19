import { useSelector } from "react-redux"
import { cartSelector } from "../../../store/slices/cartSlice"
import { Box, Button, Card, Center, Checkbox, Collapse, Container, Flex, Grid, Radio, Stepper, Text, Title } from "@mantine/core"
import TableCartList from "./components/TableCartList"
import SummarySection from "./components/SummarySection"
import { useState } from "react"
import { IconAddressBook, IconPlus } from "@tabler/icons-react"
import { useDisclosure } from "@mantine/hooks"
import ModalFormAddress from "./components/ModalFormAddress"
import AddressItem from "./components/AddressItem"

function CartPage() {
  const cartReducer = useSelector(cartSelector)
  const carts = cartReducer.carts

  const [active, setActive] = useState(0)
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current))
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))
  const [highestStepVisited, setHighestStepVisited] = useState(active)

  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step

  function handlePay() {
    nextStep()
  }

  const [isTaxRequest, setIsTaxRequest] = useState(false)
  const [opened, { open, close }] = useDisclosure(false)

  function handleSubmitAddress(data: any) {
    console.log(data)
  }

  const [value, setValue] = useState("react")

  return (
    <Box>
      <Card withBorder>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="Cart" allowStepSelect={shouldAllowSelectStep(0)}></Stepper.Step>
          <Stepper.Step label="Shipping Infomation" allowStepSelect={shouldAllowSelectStep(1)}></Stepper.Step>
          <Stepper.Step label="Payment" allowStepSelect={shouldAllowSelectStep(2)}></Stepper.Step>
          <Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
        </Stepper>
      </Card>

      <Box mt={20}>
        <>
          <Grid>
            <Grid.Col md={8}>
              {active === 0 && (
                <Card withBorder>
                  <TableCartList data={carts} />
                </Card>
              )}
              {active === 1 && (
                <>
                  <Flex justify={"space-between"} align={"center"}>
                    <Flex>
                      <IconAddressBook />
                      <Text>Address</Text>
                    </Flex>
                    <Button variant={"subtle"}>Manage address</Button>
                  </Flex>

                  <Card withBorder>
                    <Card.Section p={"lg"}>
                      <Radio.Group value={value} onChange={setValue}>
                        <Flex direction={"column"} gap={"md"}>
                          <AddressItem value="vue" select={() => setValue("vue")} />
                          <AddressItem value="react" select={() => setValue("react")} />
                        </Flex>
                      </Radio.Group>
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py="xs">
                      <Checkbox label="Request a receipt/tax invoice" checked={isTaxRequest} onChange={(event) => setIsTaxRequest(event.currentTarget.checked)} />

                      <Collapse in={isTaxRequest}>
                        <Text fz={"sm"} fw={300} c={"dimmed"} align="center">
                          Not found address
                        </Text>
                        <Center>
                          <Button variant="subtle" size="sm" leftIcon={<IconPlus />} onClick={open}>
                            Add address
                          </Button>
                        </Center>
                      </Collapse>
                    </Card.Section>
                  </Card>
                </>
              )}
            </Grid.Col>
            <Grid.Col md={4}>
              <SummarySection handlePay={handlePay} />
            </Grid.Col>
          </Grid>
        </>
      </Box>

      <ModalFormAddress opened={opened} open={open} close={close} submit={handleSubmitAddress} />
    </Box>
  )
}

export default CartPage
