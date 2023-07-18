import { Avatar, Button, Card, Divider, Grid, Group, Image, Text } from "@mantine/core"
import React from "react"

type Props = {}

export default function BoxShippingInfo({}: Props) {
  return (
    <Grid my={20}>
      <Grid.Col sm={6}>
        <Card withBorder h={"100%"}>
          <Card.Section withBorder inheritPadding py="xs">
            <Group position="apart">
              <Text weight={500}>Shipping</Text>
            </Group>
            <Group mt={20}>
              <Avatar color="blue" size={"lg"}>
                <Image src={"https://elstar.themenate.net/img/others/img-11.jpg"} />
              </Avatar>
              <div style={{ flex: 1 }}>
                <Text size="sm" weight={500}>
                  FedEx
                </Text>
                <Text size="sm" color="dimmed" weight={400}>
                  Delivery in 1 ~ 3 days
                </Text>
              </div>
              <Text fz={"sm"} fw={500}>
                $15.00
              </Text>
            </Group>
            <Button fullWidth variant="outline" color="gray" mt={20} py={8}>
              View Carrier Detail
            </Button>
          </Card.Section>
        </Card>
      </Grid.Col>
      <Grid.Col sm={6}>
        <Card withBorder h={"100%"}>
          <Card.Section withBorder inheritPadding py="xs">
            <Group position="apart">
              <Text weight={500}>Payment Summary</Text>
            </Group>
            <Group position="apart" mt={20}>
              <Text fz={"sm"} color={"dimmed"}>
                Subtotal
              </Text>
              <Text fz={"sm"} fw={500}>
                $1,762.00
              </Text>
            </Group>
            <Group position="apart" mt={14}>
              <Text fz={"sm"} color={"dimmed"}>
                Delivery fee
              </Text>
              <Text fz={"sm"} fw={500}>
                $15.00
              </Text>
            </Group>
            <Group position="apart" mt={14}>
              <Text fz={"sm"} color={"dimmed"}>
                Tax(6%)
              </Text>
              <Text fz={"sm"} fw={500}>
                $105.72
              </Text>
            </Group>
            <Divider mt={14} />
            <Group position="apart" mt={14}>
              <Text fz={"sm"} color={"dimmed"}>
                Total
              </Text>
              <Text fz={"sm"} fw={500}>
                $1,870.72
              </Text>
            </Group>
          </Card.Section>
        </Card>
      </Grid.Col>
    </Grid>
  )
}
