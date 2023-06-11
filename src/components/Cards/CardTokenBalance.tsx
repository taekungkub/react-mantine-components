import { ActionIcon, Avatar, Box, Card, Center, Group, Image, Text, TextInput, Title, Tooltip, UnstyledButton } from "@mantine/core"
import Bitcoin from "@/assets/media/bitcoin.png"
import { IconCopy, IconInfoCircle } from "@tabler/icons-react"
import { TokenInfoTy } from "../../type"

interface Props {
  address?: string
  amount?: string
  symbol?: string
  name?: string
  dollar?: string
  image?: string
}

function CardTokenBalance({
  symbol = "BTC",
  amount = "0.5832112",
  name = "BTC",
  address = "n1RyjN4dyBDA9cKzAzAKfWoHEZkGMizFDo",
  dollar = "123,546",
  image,
}: Props) {
  const rightSection = (
    <Tooltip label="Copy" position="top-end" withArrow transitionProps={{ transition: "pop-bottom-right" }}>
      <ActionIcon>
        <IconCopy size="1.1rem" stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  )

  return (
    <>
      <Card withBorder>
        <Box w={"100%"}>
          <Group noWrap>
            <Avatar src={image ?? ""} size={40} color="blue" radius={"xl"}>
              {!image ? symbol : ""}
            </Avatar>
            <div style={{ flex: 1 }}>
              <Text weight={600}>{name}</Text>
            </div>
            <Text>{dollar} USD</Text>
          </Group>
        </Box>
        <Text size="lg" my={12}>
          {amount ? amount : "-"}
          <span style={{ marginLeft: "4px" }}> {symbol}</span>
        </Text>
        <TextInput my={12} rightSection={rightSection} placeholder="Your email" value={address} readOnly />
      </Card>
      <br />
    </>
  )
}

export default CardTokenBalance
