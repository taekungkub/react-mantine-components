import { Box, Button, Card, Group, Text, Title } from "@mantine/core"
import React, { useEffect } from "react"
import useNote from "@/context/NoteContext"

type Props = {}

export default function NoteLists({}: Props) {
  const { notes, onDelete, onSelectNote } = useNote()

  const Items = notes.map((v) => {
    return (
      <Box mt={20} key={v.id}>
        <Text>ID {v.id} </Text>
        <Title order={5}>{v.title}</Title>
        <Text>{v.desc}</Text>
        <Group>
          <Button onClick={() => onSelectNote(v)}>Update</Button>
          <Button onClick={() => onDelete(v.id as string)}>Delete</Button>
        </Group>
      </Box>
    )
  })
  return (
    <Card withBorder radius="md">
      <Title order={6}>Note Lists</Title>
      {Items}
    </Card>
  )
}
