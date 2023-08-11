import { createStyles, Text, rem, Grid, Box, Container, ScrollArea, Flex } from "@mantine/core"
import { useListState } from "@mantine/hooks"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import dataTest from "./data.json"
import { useEffect, useState } from "react"
import useTodos from "../../hooks/useTodos"
import { TodoTy } from "../../type"
import BoardTask from "./Board"

const useStyles = createStyles((theme) => ({
  item: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
    marginBottom: theme.spacing.sm,
  },

  itemDragging: {
    boxShadow: theme.shadows.sm,
    border: `2px solid ${theme.colors.blue[4]}`,
  },

  symbol: {
    fontSize: rem(30),
    fontWeight: 700,
    width: rem(60),
  },
}))

interface DndListProps {
  data: {
    position: number
    mass: number
    symbol: string
    name: string
  }[]
}

type BoardTy = "board1" | "board2" | "boardTrash"

export default function DndList() {
  const { classes, cx } = useStyles()
  const [data, setData] = useState(dataTest.props.data)
  const [state, handlers] = useListState(data)

  const { todos, setCompleted, setIncomplete, completed, incomplete, setTodos, board2, setBoard2, boardTrash, setBoardTrash } = useTodos()
  const [destination, setDestination] = useState<BoardTy[]>([])

  const handleDragEnd = (result: any) => {
    if (!result.destination) return // Item dropped outside the list
    const sourceBoard = result.source?.droppableId
    const destinationBoard = result.destination?.droppableId

    if (sourceBoard === "board1" && destinationBoard === "board2") {
      const updatedBoard1 = Object.assign([], todos)
      const [removed] = updatedBoard1.splice(result.source.index, 1)

      const updatedBoard2 = Object.assign([], board2)
      updatedBoard2.splice(result.destination.index, 0, removed)

      console.log(updatedBoard2)
      setTodos(updatedBoard1)
      setBoard2(updatedBoard2)
    }

    if (sourceBoard === "board2" && destinationBoard === "board1") {
      const updatedBoard2 = Object.assign([], board2)
      const [removed] = updatedBoard2.splice(result.source.index, 1)
      const updatedBoard1 = Object.assign([], todos)
      updatedBoard1.splice(result.destination.index, 0, removed)
      setTodos(updatedBoard1)
      setBoard2(updatedBoard2)
    }

    if (sourceBoard === "board1" && destinationBoard === "boardTrash") {
      const updatedBoard1 = Object.assign([], todos)
      const [removed] = updatedBoard1.splice(result.source.index, 1)

      const updatedBoardTrash = Object.assign([], boardTrash)
      updatedBoardTrash.splice(result.destination.index, 0, removed)

      console.log(updatedBoardTrash)
      setTodos(updatedBoard1)
      setBoardTrash(updatedBoardTrash)
    }

    if (sourceBoard === "boardTrash" && destinationBoard === "board1") {
      const updatedBoardTrash = Object.assign([], boardTrash)
      const [removed] = updatedBoardTrash.splice(result.source.index, 1)

      const updatedBoard1 = Object.assign([], todos)
      updatedBoard1.splice(result.destination.index, 0, removed)

      setBoardTrash(updatedBoardTrash)
      setTodos(updatedBoard1)
    }

    setDestination([])
  }

  async function handleDragStart(result: any) {
    const sourceBoard = result.source?.droppableId
    if (sourceBoard === "board1") {
      setDestination(["board2", "boardTrash"])
    }

    if (sourceBoard === "board2") {
      setDestination(["board1"])
    }

    if (sourceBoard === "boardTrash") {
      setDestination(["board1"])
    }
  }

  const items = todos?.map((item, index) => (
    <Draggable key={item.id} index={index} draggableId={`${item.id}`}>
      {(provided, snapshot) => {
        return (
          <div
            className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Text className={classes.symbol}>{item.id}</Text>
            <div>
              <Text>{item.todo}</Text>
              <Text color="dimmed" size="sm">
                UserID: {item.userId} • Complete: {item.completed.toString()}
              </Text>
            </div>
          </div>
        )
      }}
    </Draggable>
  ))

  const items2 = board2?.map((item, index) => (
    <Draggable key={item.id} index={index} draggableId={`${item.id}`}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Text className={classes.symbol}>{item.id}</Text>
          <div>
            <Text>{item.todo}</Text>
            <Text color="dimmed" size="sm">
              UserID: {item.userId} • Complete: {item.completed.toString()}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ))

  const itemsTrash = boardTrash?.map((item, index) => (
    <Draggable key={item.id} index={index} draggableId={`${item.id}`}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Text className={classes.symbol}>{item.id}</Text>
          <div>
            <Text>{item.todo}</Text>
            <Text color="dimmed" size="sm">
              UserID: {item.userId} • Complete: {item.completed.toString()}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ))

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <Flex gap={20} justify={"space-between"} miw={1000} p={20}>
          <Box w={"100%"}>
            <Droppable droppableId="board1" direction="vertical">
              {(provided) => (
                <BoardTask title="Todo" background="yellow" isDragging={destination.includes("board1")}>
                  <Box {...provided.droppableProps} ref={provided.innerRef}>
                    {items}
                    {provided.placeholder}
                  </Box>
                </BoardTask>
              )}
            </Droppable>
          </Box>
          <Box w={"100%"}>
            <Droppable droppableId="board2" direction="vertical">
              {(provided) => (
                <BoardTask title="Done" background="teal" isDragging={destination.includes("board2")}>
                  <Box mih={250} {...provided.droppableProps} ref={provided.innerRef}>
                    {items2}
                    {provided.placeholder}
                  </Box>
                </BoardTask>
              )}
            </Droppable>
          </Box>
          <Box w={"100%"}>
            <Droppable droppableId="boardTrash" direction="vertical">
              {(provided) => (
                <BoardTask title="Trash" background="red" isDragging={destination.includes("boardTrash")}>
                  <Box mih={250} {...provided.droppableProps} ref={provided.innerRef}>
                    {itemsTrash}
                    {provided.placeholder}
                  </Box>
                </BoardTask>
              )}
            </Droppable>
          </Box>
        </Flex>
      </DragDropContext>
    </>
  )
}
