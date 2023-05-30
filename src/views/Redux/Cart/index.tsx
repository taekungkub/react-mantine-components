import { useSelector } from "react-redux"
import { cartSelector } from "../../../store/slices/cartSlice"
import { Box, Card, Grid } from "@mantine/core"
import TableCartList from "./TableCartList"
import SummarySection from "./SummarySection"
import { useState } from "react"

function CartPage() {
  const cartReducer = useSelector(cartSelector)
  const carts = cartReducer.carts
 
  const items = carts.map((v, i) => (
    <>
      <Card withBorder key={i} mt={12}>
        <Card.Section p={"lg"}>{v.title}</Card.Section>

        <Card.Section p={"lg"}>{v.title}</Card.Section>
      </Card>
    </>
  ))
  return (
    <Box>
      <Grid>
        <Grid.Col md={8}>
          <TableCartList data={carts}  />
        </Grid.Col>
        <Grid.Col md={4}>
          <SummarySection  />
        </Grid.Col>
      </Grid>
    </Box>
  )
}

export default CartPage
