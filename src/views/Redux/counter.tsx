import { useSelector } from "react-redux"
import { counterSelector, decrease, increase } from "../../store/slices/counterSlice"
import { Button, Paper, Title } from "@mantine/core"
import { useAppDispatch } from "@/store/store"
import { useBearStore } from "@/store/bearCounter"

function BearCounter() {
  console.log("Counter:render")
  const { count, inc, dec } = useBearStore()
  return (
    <>
      <Paper p={10} withBorder mt={20}>
        <Title order={6}>Zustand Bear Counter</Title>
        <Button onClick={() => inc()}>Increase Counter +</Button>
        <Button onClick={() => dec()}>Decrease Counter -</Button>
        <div>{count}</div>
      </Paper>
    </>
  )
}

function ReduxCounter() {
  console.log("Redux:render")
  const counterStore = useSelector(counterSelector)
  const dispatch = useAppDispatch()
  return (
    <>
      <Paper p={10} withBorder>
        <Title order={6}>Redux Counter</Title>
        <Button onClick={() => dispatch(increase())}>Increase Counter +</Button>
        <Button onClick={() => dispatch(decrease())}>Decrease Counter -</Button>
        <div>{counterStore.counter}</div>
      </Paper>
    </>
  )
}

function CounterPage() {
  console.log(`App:render`)
  return (
    <>
      <ReduxCounter />
      <BearCounter />
    </>
  )
}

export default CounterPage
