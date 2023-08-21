import { Button, Card, Input, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import React, { useEffect } from "react"
import { NoteTy } from "@/type"
import useNote from "@/context/NoteContext"

type Props = {}

export default function NoteForm({}: Props) {
  const { onAdd, selectedNote, onUpdate, onSelectNote, isEdit, onSetEdit } = useNote()

  const form = useForm({
    initialValues: { title: "", desc: "" },
  })

  async function handleSubmit() {
    try {
      if (!selectedNote) {
        onAdd(form.values as NoteTy)
      } else if (selectedNote) {
        onUpdate(form.values as NoteTy)
        onSetEdit()
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

  useEffect(() => {
    if (!isEdit) {
      form.setValues({
        title: "",
        desc: "",
      })
    }
  }, [isEdit])

  return (
    <Card withBorder padding="xl" radius="md">
      <form onSubmit={form.onSubmit((values) => handleSubmit())}>
        <TextInput label="Title" {...form.getInputProps("title")} required />
        <TextInput label="Desc" {...form.getInputProps("desc")} required mt={4} />
        <Button type="submit" mt={8} color={isEdit ? "yellow" : "blue"}>
          {isEdit ? "Edit" : "Submit"}
        </Button>
        {isEdit && (
          <Button variant={"subtle"} color="yellow" onClick={() => onSetEdit()}>
            Cancel
          </Button>
        )}
      </form>
    </Card>
  )
}
