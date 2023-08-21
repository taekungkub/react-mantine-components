import { Button, Card, Input, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import React, { useEffect } from "react"
import { NoteTy } from "@/type"
import useNote from "@/context/NoteContext"

type Props = {}

export default function NoteForm({}: Props) {
  const { onAdd, selectedNote, onUpdate, onSelectNote } = useNote()

  const form = useForm({
    initialValues: { title: "", desc: "" },
  })

  async function handleSubmit() {
    try {
      if (!selectedNote) {
        onAdd(form.values as NoteTy)
      } else if (selectedNote) {
        onUpdate(form.values as NoteTy)
      }

      form.setValues({
        title: "",
        desc: "",
      })
    } catch (error) {}
  }

  useEffect(() => {
    if (selectedNote) {
      form.setValues({ ...selectedNote })
    }
  }, [selectedNote])

  return (
    <Card withBorder padding="xl" radius="md">
      <form onSubmit={form.onSubmit((values) => handleSubmit())}>
        <TextInput label="Title" {...form.getInputProps("title")} required />
        <TextInput label="Desc" {...form.getInputProps("desc")} required mt={4} />
        <Button type="submit" mt={8} color={selectedNote ? "yellow" : "blue"}>
          {selectedNote ? "Edit" : "Submit"}
        </Button>
        {selectedNote && (
          <Button variant={"subtle"} color="yellow" onClick={() => onSelectNote({ title: "", desc: "" })}>
            Cancel
          </Button>
        )}
      </form>
    </Card>
  )
}
