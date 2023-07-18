import { Avatar, Box, Group, Image, Table, Text, ThemeIcon, useMantineTheme } from "@mantine/core"
import { OrderListDetail } from "@/constant/constant"
export default function TableOrder() {
  const theme = useMantineTheme()

  const rows = OrderListDetail.map((order) => (
    <tr key={order.name}>
      <td>
        <Group align={"center"}>
          <ThemeIcon variant="light" color="gray" size={"5rem"}>
            <Image src={order.image} />
          </ThemeIcon>
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {order.name}
            </Text>
            <Text size="sm" color="dimmed" weight={400} mt={4}>
              Color: {order.color}
            </Text>
            {order.size && (
              <Text size="sm" color="dimmed" weight={400} mt={4}>
                Size: {order.size}
              </Text>
            )}
          </div>
        </Group>
      </td>
      <td>{order.price}</td>
      <td>{order.qty}</td>
      <td>{order.total}</td>
    </tr>
  ))

  return (
    <Table>
      <thead style={{ background: theme.colorScheme != "dark" ? theme.colors.gray[0] : theme.colors.gray[9] }}>
        <tr>
          <th>PRODUCT </th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
