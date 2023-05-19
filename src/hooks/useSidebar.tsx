import { useEffect, useState } from "react";

export default function useSidebar() {
  const [opened, setOpened] = useState(true);

  function handleOpened() {
    setOpened(!opened);
  }

  return {
    opened,
    setOpened,
    handleOpened,
  };
}
