import { useCallback, useEffect, useState } from "react"

export default function useSidebar() {
  const [opened, setOpened] = useState(false)

  function handleOpened() {
    setOpened(!opened)
  }

  return {
    opened,
    setOpened,
    handleOpened,
  }
}
