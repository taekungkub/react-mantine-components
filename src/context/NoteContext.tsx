import { ReactNode, createContext, useContext, useState } from "react"
import { NoteTy } from "@/type"
import { useId } from "@mantine/hooks"

interface NoteContextType {
  notes: NoteTy[]
  onAdd: (note: NoteTy) => void
  onDelete: (id: string) => void
  onUpdate: (note: NoteTy) => void
  onSelectNote: (note: NoteTy) => void
  selectedNote?: NoteTy | null
}

const NoteContext = createContext<NoteContextType>({} as NoteContextType)

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36)
}

export function NoteProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<NoteTy[]>([])
  const [selectedNote, setSelectedNote] = useState<NoteTy | null>(null)

  async function handleAddNotes(note: NoteTy) {
    delete note.id

    setNotes((prevNote) => {
      return prevNote.concat({
        id: uid(),
        ...note,
      })
    })
  }

  async function handleDeleteNotes(id: string) {
    setNotes((prevNote) => prevNote.filter((v) => v.id != id))
  }

  async function handleUpdateNote(updatedNote: NoteTy) {
    setNotes((prevNote) => prevNote.map((v) => (v.id === updatedNote.id ? updatedNote : v)))
    setSelectedNote(null)
  }

  async function onSelectNote(note: NoteTy) {
    setSelectedNote(note)
  }

  const context = {
    notes: notes,
    onAdd: handleAddNotes,
    onDelete: handleDeleteNotes,
    onUpdate: handleUpdateNote,
    onSelectNote,
    selectedNote,
  }

  return <NoteContext.Provider value={context}>{children}</NoteContext.Provider>
}

export default function useNote() {
  return useContext(NoteContext)
}
