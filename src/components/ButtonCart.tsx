import { ActionIcon, Indicator } from "@mantine/core"
import { IconShoppingCart } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"
import { cartSelector, getCartTotal } from "../store/slices/cartSlice"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../store/store"
import { useEffect } from "react"

function ButtonCart() {
  const navigate = useNavigate()
  const cart = useSelector(cartSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart.carts])

  return (
    <>
      <Indicator inline label={cart.itemsCount} size={16}>
        <ActionIcon variant="default" color="blue" size={"lg"} onClick={() => navigate("/cart")}>
          <IconShoppingCart size="1.125rem" />
        </ActionIcon>
      </Indicator>
    </>
  )
}

export default ButtonCart
