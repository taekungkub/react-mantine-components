import { Badge, Box, Flex, Grid, Text } from "@mantine/core"
import React from "react"
import TableOrder from "./components/TableOrder"
import CustomerDetail from "./components/CustomerDetail"
import BoxShipping from "./components/BoxShippingInfo"
import BoxShippingInfo from "./components/BoxShippingInfo"
import BoxExpressInfo from "./components/BoxExpressInfo"
import { IconCalendarEvent } from "@tabler/icons-react"

type Props = {}

export default function OrderDetailPage({}: Props) {
  return (
    <div>
      <Box mb={20}>
        <Flex align={"center"}>
          <Text fz={"xl"} fw={500}>
            Order#95954
          </Text>
          <Badge ml={8} color={"green"} radius={"sm"}>
            Paid
          </Badge>

          <Badge ml={8} radius={"sm"}>
            Fulfilled
          </Badge>
        </Flex>
        <Flex align={"center"}>
          <IconCalendarEvent size="1.125rem" color="gray" />
          <Text ml={8} color={"dimmed"} mt={2}>
            Fri 04-Mar-2022, 07:15 PM
          </Text>
        </Flex>
      </Box>

      <Grid>
        <Grid.Col md={8}>
          <TableOrder />
          <BoxShippingInfo />
          <BoxExpressInfo />
        </Grid.Col>
        <Grid.Col md={4}>
          <CustomerDetail />
        </Grid.Col>
      </Grid>
    </div>
  )
}
