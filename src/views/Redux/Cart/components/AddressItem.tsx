import { Box, Flex, Paper, Radio, Text } from "@mantine/core"
import React from "react"

type Props = {
  value: string
  select: () => void
}

export default function AddressItem({ value, select }: Props) {
  return (
    <Paper withBorder p={"md"} className="cursor-pointer">
      <Flex onClick={() => select()} align={"start"}>
        <Radio value={value} mt={7} />
        <Box ml={"sm"}>
          <Text>xxxxxxxxxxxx</Text>
          <Text>xxxxxx xxxxxx xxxxxx xxxxxx xxxxxx</Text>
          <Text>xxxxxx xxxxxx </Text>
        </Box>
      </Flex>
    </Paper>
  )
}
