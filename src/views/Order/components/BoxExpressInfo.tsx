import { Box, Card, Group, Text, Timeline } from "@mantine/core"
import { IconGitCommit } from "@tabler/icons-react"
import React from "react"

type Props = {}

export default function BoxExpressInfo({}: Props) {
  return (
    <div>
      <Card withBorder h={"100%"}>
        <Card.Section withBorder inheritPadding py="xs">
          <Group position="apart">
            <Text weight={500}>Activity</Text>
          </Group>
          <Box mt={14}>
            <Text fz={"sm"} weight={500} mt={20} color={"dimmed"}>
              SUNDAY, 06 MARCH
            </Text>
            <Timeline active={2} bulletSize={14} lineWidth={2} reverseActive mt={14}>
              <Timeline.Item fz={"sm"}>
                <Text fw={500} color="green">
                  Parcel has been delivered
                </Text>
                <Text color="dimmed" mt={4}>
                  Recipient: Lloyd Obrien
                </Text>
                <Text color="dimmed" mt={4}>
                  03:13 PM
                </Text>
              </Timeline.Item>
              <Timeline.Item fz={"sm"}>
                <Text fw={500}>Parcel is out for delivery</Text>
                <Text color="dimmed" mt={4}>
                  10:32 AM
                </Text>
              </Timeline.Item>

              <Timeline.Item fz={"sm"}>
                <Text fw={500}>Parcel has arrived at delivery station</Text>
                <Text color="dimmed" mt={4}>
                  08:15 AM
                </Text>
              </Timeline.Item>
            </Timeline>
          </Box>

          <Box mt={14}>
            <Text fz={"sm"} weight={500} mt={20} color={"dimmed"}>
              SATURDAY, 05 MARCH
            </Text>
            <Timeline active={1} bulletSize={14} lineWidth={2} reverseActive mt={14}>
              <Timeline.Item fz={"sm"}>
                <Text fw={500}>Parcel has been picked up by courier</Text>
                <Text color="dimmed" mt={4}>
                  01:43 PM
                </Text>
              </Timeline.Item>

              <Timeline.Item fz={"sm"}>
                <Text fw={500}>Seller is preparing to ship your parcel</Text>
                <Text color="dimmed" mt={4}>
                  10:32 AM
                </Text>
              </Timeline.Item>
            </Timeline>
          </Box>
        </Card.Section>
      </Card>
    </div>
  )
}
