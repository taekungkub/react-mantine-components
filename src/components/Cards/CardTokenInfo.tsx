import { Avatar, Card, Group, Text } from "@mantine/core"
import { TokenInfoTy } from "../../type"

interface Props {
  data: TokenInfoTy
}

function CardTokenInfo({ data }: Props) {
  return (
    <>
      <Card withBorder>
        <Group noWrap>
          <Avatar size={94} radius="md">
            {data.symbol}
          </Avatar>
          <div>
            <Text fz={"sm"} mt={3}>
              Token name: {data.name}
            </Text>
            <Text fz={"sm"} mt={3}>
              Symbol: {data.symbol}
            </Text>
            <Text fz={"sm"} mt={3}>
              Decimals: {data.decimals}
            </Text>
            <Text fz={"sm"} mt={3}>
              Total Supply: {data.totalSupply}
            </Text>
          </div>
        </Group>
      </Card>
    </>
  )
}

export default CardTokenInfo
