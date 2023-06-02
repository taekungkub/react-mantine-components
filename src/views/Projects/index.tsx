import { createStyles, Text, rem, Grid, Box, Container, ScrollArea, Flex } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import dataTest from "./data.json";
import { useEffect, useState } from "react";
import useTodos from "../../hooks/useTodos";
import { TodoTy } from "../../type";
import BoardTask from "./Board";

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
}));

interface DndListProps {
  data: {
    position: number;
    mass: number;
    symbol: string;
    name: string;
  }[];
}

export default function DndList() {
  const { classes, cx } = useStyles();
  const [data, setData] = useState(dataTest.props.data);
  const [state, handlers] = useListState(data);

  const { todos, setCompleted, setIncomplete, completed, incomplete, setTodos, board2, setBoard2 } = useTodos();

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

  const handleDragEnd = (result: any) => {
    if (!result.destination) return; // Item dropped outside the list
    const sourceBoard = result.source?.droppableId;
    const destinationBoard = result.destination?.droppableId;

    if (sourceBoard === "board1" && destinationBoard === "board2") {
      const updatedBoard1 = Object.assign([], todos);
      const [removed] = updatedBoard1.splice(result.source.index, 1);

      const updatedBoard2 = Object.assign([], board2);
      updatedBoard2.splice(result.destination.index, 0, removed);

      setTodos(updatedBoard1);
      setBoard2(updatedBoard2);
    }

    if (sourceBoard === "board2" && destinationBoard === "board1") {
      const updatedBoard2 = Object.assign([], board2);
      const [removed] = updatedBoard2.splice(result.source.index, 1);

      const updatedBoard1 = Object.assign([], todos);
      updatedBoard1.splice(result.destination.index, 0, removed);

      setTodos(updatedBoard1);
      setBoard2(updatedBoard2);
    }
  };

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
  ));

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
  ));
  return (
    <>
    <DragDropContext onDragEnd={handleDragEnd}>
        <Flex gap={20} justify={'space-between'} miw={1000} p={20}>
            <Box w={'100%'}>
            <Droppable droppableId="board1" direction="vertical">
              {(provided) => (
                <BoardTask title="Todo" background="yellow">
                  <Box {...provided.droppableProps} ref={provided.innerRef}>
                    {items}
                    {provided.placeholder}
                  </Box>
                </BoardTask>
              )}
            </Droppable>
            </Box>
            <Box w={'100%'}>
            <Droppable droppableId="board2" direction="vertical">
              {(provided) => (
                <BoardTask title="Done" background="teal">
                  <Box mih={250} {...provided.droppableProps} ref={provided.innerRef}>
                    {items2}
                    {provided.placeholder}
                  </Box>
                </BoardTask>
              )}
            </Droppable>
            </Box>
         <Box w={'100%'}>
         <BoardTask title="Trash" background="red">
              <Box mih={250}></Box>
            </BoardTask></Box>
        </Flex>
      </DragDropContext>
    </>
  );
}
