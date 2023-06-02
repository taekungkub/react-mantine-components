import { createStyles, Text, rem, Grid, Box } from "@mantine/core"
import { useListState } from "@mantine/hooks"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import dataTest from "./data.json"
import { useEffect, useState } from "react"
import useTodos from "../../hooks/useTodos"
import { TodoTy } from "../../type"

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
  board: {
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "200px",
    borderRadius: "10px",
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

export default function DndList() {
  const { classes, cx } = useStyles()
  const [data, setData] = useState(dataTest.props.data)
  const [state, handlers] = useListState(data)

  const { todos, setCompleted, setIncomplete, completed, incomplete } = useTodos()

  // const handleDragEnd = (result: any) => {
  //   const { destination, source, draggableId } = result
  //   console.log("Dropable ID", destination?.droppableId)
  //   console.log("source", source?.droppableId)

  //   if (source.droppableId == 2) {
  //     setCompleted(removeItemById(draggableId, completed))
  //   } else {
  //     setIncomplete(removeItemById(draggableId, incomplete))
  //   }

  //   const task = findItemById(draggableId, [...incomplete, ...completed])

  //   if (destination.droppableId == 2) {
  //     setCompleted([{ ...task, completed: !task.completed }, ...completed])
  //   } else {
  //     setIncomplete([{ ...task, completed: !task.completed }, ...incomplete])
  //   }
  // }

  // function findItemById(id: number, array: TodoTy[]) {
  //   return array.find((item) => item.id == id)
  // }

  // function removeItemById(id: number, array: TodoTy[]) {
  //   return array.filter((item) => item.id != id)
  // }

  const items = todos?.map((item, index) => (
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

  const items2 = completed.map((item, index) => (
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
      <DragDropContext onDragEnd={({ destination, source }) => handlers.reorder({ from: source.index, to: destination?.index || 0 })}>
        <Grid>
          <Grid.Col sm={6}>
            <Box className={classes.board} bg="yellow">
              <Droppable droppableId="1" direction="vertical">
                {(provided) => (
                  <Box className={classes.board} {...provided.droppableProps} ref={provided.innerRef}>
                    {items}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </Box>
          </Grid.Col>
          <Grid.Col sm={6}>
            <Box className={classes.board} bg="teal">
              <Droppable droppableId="2" direction="vertical">
                {(provided) => (
                  <Box className={classes.board} {...provided.droppableProps} ref={provided.innerRef}>
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </Box>
          </Grid.Col>
        </Grid>
      </DragDropContext>
    </>
  )
}
