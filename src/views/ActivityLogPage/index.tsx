import React from "react";
import { Avatar, Badge, Box, Card, Flex, Group, Text, Timeline } from "@mantine/core";
import { IconGitCommit } from "@tabler/icons-react";
import PageTitle from "@/components/PageTitle";

type Props = {};

export default function ActivityLogPage({}: Props) {
  return (
    <div>
      <PageTitle pageTitle="Activity Log" />

      <Card withBorder h={"100%"} mt={"lg"}>
        <Card.Section withBorder inheritPadding py="xs">
          <Group position="apart">
            <Text weight={500}>Activity</Text>
          </Group>
          <Box mt={14}>
            <Timeline active={3} bulletSize={14} lineWidth={2} reverseActive mt={14}>
              <Timeline.Item fz={"sm"}>
                <Flex gap={4}>
                  <Text fz={"sm"} fw={500}>
                    Carolyn Perkins has change PD-979 status to Completed 10:20 PM
                  </Text>
                  <Badge color="green">Completed</Badge>
                </Flex>
              </Timeline.Item>

              <Timeline.Item fz={"sm"}>
                <Text fw={500}>Tara Fletcher mentioned you in a comment Post 06:17 PM</Text>
                <Card withBorder p={"md"} my={"md"} maw={500}>
                  Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples
                  of what applications SHOULDN'T be like.
                </Card>
              </Timeline.Item>

              <Timeline.Item
                fz={"sm"}
                bullet={
                  <Avatar
                    size={22}
                    radius="xl"
                    src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                  />
                }
              >
                <Text fw={500}>Ron Vargas comment on your Post 09:53 PM</Text>
                <Card withBorder p={"md"} my={"md"} maw={500}>
                  Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples
                  of what applications SHOULDN'T be like.
                </Card>
              </Timeline.Item>
              <Timeline.Item fz={"sm"}>
                <Text fw={500}>Lee Wheeler assigned ticket PD-1092 to Gail Barnes 03:13 PM </Text>
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
  );
}
