import { useSelector } from "react-redux"
import { cartSelector } from "../../../store/slices/cartSlice"
import { Box, Card, Container, Grid, Stepper } from "@mantine/core"
import TableCartList from "./components/TableCartList"
import SummarySection from "./components/SummarySection"
import { useState } from "react"

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
        {active === 0 && (
          <>
            <Grid>
              <Grid.Col md={8}>
                <Card withBorder>
                  <TableCartList data={carts} />
                </Card>
              </Grid.Col>
              <Grid.Col md={4}>
                <SummarySection handlePay={handlePay} />
              </Grid.Col>
            </Grid>
          </>
        )}
      </Box>
    </Box>
  )
}

export default CartPage
