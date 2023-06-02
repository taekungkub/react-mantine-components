import { useEffect, useState } from "react"
import DummyServices from "../services/DummyServices"
import { TodoTy } from "../type"

function useTodos() {
  const [todos, setTodos] = useState<TodoTy[]>([])
  const [completed, setCompleted] = useState<TodoTy[]>([])
  const [incomplete, setIncomplete] = useState<TodoTy[]>([])
  const [board2, setBoard2] = useState<TodoTy[]>()

  async function getTodos() {
    try {
      const res = await DummyServices.todos()
      setTodos(res.data.todos)
      setCompleted(res.data.todos.filter((task: TodoTy) => task.completed))
      setIncomplete(res.data.todos.filter((task: TodoTy) => !task.completed))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])
  return {
    todos,
    setTodos,
    completed,
    incomplete,
    setCompleted,
    setIncomplete,
    setBoard2,
    board2
  }
}

export default useTodos
