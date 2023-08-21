import React from "react"
import NoteForm from "./NoteForm"
import NoteLists from "./NoteLists"

type Props = {}

export default function NoteApps({}: Props) {
  return (
    <div>
      <NoteForm />
      <br />
      <NoteLists />
    </div>
  )
}
