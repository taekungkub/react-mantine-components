import { useSelector } from "react-redux"
import { counterSelector, decrease, increase } from "../../store/slices/counterSlice"
import { Button } from "@mantine/core"
import { useAppDispatch } from "../../store/store"

function CounterPage() {
  const counterStore = useSelector(counterSelector)
  const dispatch = useAppDispatch()

  return (
    <>
      <Button onClick={() => dispatch(increase())}>Increase Counter +</Button>
      <Button onClick={() => dispatch(decrease())}>Decrease Counter -</Button>

      <div>{counterStore.counter}</div>
    </>
  )
}

export default CounterPage
