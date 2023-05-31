import { useEffect, useState } from "react"
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, rem, Flex, Box, ActionIcon } from "@mantine/core"
import { CartItemTy } from "../../../type"
import InputQty from "../ProductDetail/components/InputQty"
import { useAppDispatch } from "../../../store/store"
import { addtoCart, editCartItemQuantity, removeFromCart, setSelected } from "../../../store/slices/cartSlice"
import { IconTrash } from "@tabler/icons-react"

const useStyles = createStyles((theme) => ({}))

interface TableSelectionProps {
  data: CartItemTy[]
}

export default function TableCartList({ data }: TableSelectionProps) {
  const { classes, cx } = useStyles()
  const [selection, setSelection] = useState(data.map((v) => v.id))

  const toggleRow = (id: number) => setSelection((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  const toggleAll = () => setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)))
  const dispatch = useAppDispatch()

  function handleChange(value: number, item: CartItemTy) {
    dispatch(
      editCartItemQuantity({
        ...item,
        quantity: value,
      })
    )
  }

  useEffect(() => {
    dispatch(setSelected(selection))
  }, [selection])

  const rows = data.map((item) => {
    const selected = selection.includes(item.id)
    return (
      <tr key={item.id}>
        <td>
          <Checkbox checked={selection.includes(item.id)} onChange={() => toggleRow(item.id)} transitionDuration={0} />
        </td>
        <td>
          <Group spacing="sm">
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
          </Group>
        </td>
        <td>{item.price}</td>
        <td>
          <Group position="center">
            <Flex align={"center"}>
              <InputQty max={item.total} qty={item.quantity} handleChange={(value) => handleChange(value, item)} />
            </Flex>
          </Group>
        </td>
        <td>{item.totalPrice}</td>
        <td>
          <ActionIcon ml={"md"} color="red" onClick={() => dispatch(removeFromCart(item))}>
            <IconTrash />
          </ActionIcon>
        </td>
      </tr>
    )
  })

  return (
    <ScrollArea>
      <Table miw={500} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{ width: rem(50) }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={selection.length > 0 && selection.length !== data.length}
                transitionDuration={0}
              />
            </th>
            <th>Product</th>
            <th>Unit Price</th>
            <th style={{ textAlign: "center" }}>Qty</th>
            <th>Total Price</th>

            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      {!rows.length && (
        <Box sx={{ textAlign: "center" }} mt={25}>
          No Data{" "}
        </Box>
      )}
    </ScrollArea>
  )
}
