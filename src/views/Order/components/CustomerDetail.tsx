import React from "react"
import MyCard from "../../../components/MyCard"
import { ActionIcon, Avatar, Box, Button, Card, Divider, Flex, Group, Image, Text } from "@mantine/core"
import { IconAdjustments, IconBrandVisa, IconExternalLink, IconMail, IconPhone } from "@tabler/icons-react"

type Props = {}

export default function CustomerDetail({}: Props) {
  return (
    <div>
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Group position="apart">
            <Text weight={500}>Customer</Text>
          </Group>
          <Group p={"xl"}>
            <Avatar color="blue" radius={"xl"}>
              <Image src={"https://elstar.themenate.net/img/avatars/thumb-11.jpg"} />
            </Avatar>
            <div style={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                Kieattisak Suparit
              </Text>
              <Text size="sm" color="dimmed" weight={400}>
                11 Previous orders
              </Text>
            </div>
            <ActionIcon variant={"light"}>
              <IconExternalLink size="1.125rem" />
            </ActionIcon>
          </Group>
          <Divider />
          <Box my={14}>
            <Flex align={"center"}>
              <IconMail size="1.125rem" color="gray" />
              <Text fz={"sm"} ml={8} mt={2}>
                handsome-obrien@hotmail.com
              </Text>
            </Flex>
            <Flex align={"center"} mt={8}>
              <IconPhone size="1.125rem" color="gray" />
              <Text fz={"sm"} ml={8} mt={2}>
                +1 (541) 754-3010
              </Text>
            </Flex>
          </Box>
          <Divider />

          <Box my={14}>
            <Text weight={500} mb={8}>
              Shipping Address
            </Text>
            <address>
              <Text fz={"sm"} color={"dimmed"}>
                100 Main ST
              </Text>
              <Text fz={"sm"} color={"dimmed"}>
                PO Box 1022
              </Text>
              <Text fz={"sm"} color={"dimmed"}>
                Seattle WA 98104
              </Text>
              <Text fz={"sm"} color={"dimmed"}>
                United States of America
              </Text>
            </address>
          </Box>
          <Divider />
          <Box my={14}>
            <Text weight={500} mb={8}>
              Billing address
            </Text>
            <address>
              <Text fz={"sm"} color={"dimmed"}>
                1527 Pond Reef Rd
              </Text>
              <Text fz={"sm"} color={"dimmed"}>
                Ketchikan
              </Text>
              <Text fz={"sm"} color={"dimmed"}>
                Alaska 99901
              </Text>
              <Text fz={"sm"} color={"dimmed"}>
                United States of America
              </Text>
            </address>
          </Box>
        </Card.Section>
      </Card>
    </div>
  )
}
