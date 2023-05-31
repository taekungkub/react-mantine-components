import { ActionIcon, Badge, Box, Button, Flex, Group, Text, Title } from "@mantine/core"
import InputQty from "./components/InputQty"
import { CartItemTy, ProductTy } from "@/type"
import { IconHeart, IconShoppingCart, IconShoppingCartPlus } from "@tabler/icons-react"
import { useSelector } from "react-redux"
import { addtoCart, cartSelector } from "../../../store/slices/cartSlice"
import { useAppDispatch } from "../../../store/store"
import { useState } from "react"
import useToast from "../../../hooks/useToast"

interface Props {
  data: ProductTy | null
}

function InfoSection(props: Props) {
  const cartReducer = useSelector(cartSelector)
  const dispatch = useAppDispatch()

  const [qty, setQty] = useState(1)
  const toast = useToast()
  function handleAddToCart() {
    if (props.data) {
      dispatch(
        addtoCart({
          id: props.data.id,
          title: props.data.title,
          price: props.data.price,
          quantity: qty,
          total: props.data.stock,
          discountPercentage: props.data.discountPercentage,
        })
      )

      toast.success("Add successfully")
    }
  }

  return (
    <>
      <Box>
        <Badge> {props.data?.brand}</Badge>
        <Text fz={"xl"} fw={600} mt={12}>
          {props.data?.title}
        </Text>

        <Flex align={"center"} mt={12}>
          <Badge color="yellow">-{props.data?.discountPercentage}%</Badge>
          <Text fz={"xl"} ml={"sm"}>
            ${props.data?.price}
          </Text>
        </Flex>

        <Flex align={"center"} mt={20} gap={10}>
          <Text>Quantity : </Text>
          <InputQty max={props.data?.stock} handleChange={(value: number) => setQty(value)} />
        </Flex>

        <Group mt={20}>
          <ActionIcon variant="default" radius="md" size={36}>
            <IconHeart size="1.1rem" stroke={1.5} color="red" />
          </ActionIcon>
          <Button radius="md" style={{ flex: 1 }} variant="outline">
            Buy now
          </Button>
          <Button radius="md" style={{ flex: 1 }} leftIcon={<IconShoppingCartPlus />} onClick={() => handleAddToCart()}>
            Add cart
          </Button>
        </Group>
      </Box>
    </>
  )
}

export default InfoSection
