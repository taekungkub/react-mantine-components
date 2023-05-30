import { Box, Card, Flex, Text, Title } from "@mantine/core"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { cartSelector, getCartTotal } from "../../../store/slices/cartSlice"
import { useAppDispatch } from "../../../store/store"
import { IconReceipt } from "@tabler/icons-react"

function SummarySection() {
  const cartReducer = useSelector(cartSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch, cartReducer.carts])

  return (
    <Card withBorder radius={"md"}>
      <Card.Section p={"sm"}>
        <Flex align={"center"}>
          <IconReceipt size={"1.125rem"} />
          <Title order={5} ml={"md"}>
            Summary
          </Title>
        </Flex>
      </Card.Section>

      <Card.Section p={"sm"}>
        <Flex justify={"space-between"}>
          <Text>Total product {`(${cartReducer.itemsCount} item)`}: </Text>
          <Text>${cartReducer.totalAmount}</Text>
        </Flex>
        <Flex justify={"space-between"}>
          <Text>discount: </Text>
          <Text>$0</Text>
        </Flex>
        <Flex justify={"space-between"}>
          <Text>delivery: </Text>

          <Text>$0</Text>
        </Flex>
      </Card.Section>

      <Card.Section p={"sm"}>
        <Flex justify={"space-between"}>
          <Box>
            <Text>Total Price: </Text>
            <Text fz={12}>(VAT)</Text>
          </Box>

          <Text>${cartReducer.totalAmount}</Text>
        </Flex>
      </Card.Section>
    </Card>
  )
}

export default SummarySection
