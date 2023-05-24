import { Icon, IconCheck, IconX } from "@tabler/icons-react"
import { notifications } from "@mantine/notifications"

export default function useToast() {
  function success(label = "Successfully", desc = "") {
    notifications.show({
      title: label,
      message: desc,
      color: "teal",
      icon: <IconCheck />,
    })
  }

  function error(label = "Error", desc = "Something went wrong! 🤥") {
    notifications.show({
      title: label,
      message: desc,
      color: "red",
      icon: <IconX />,
    })
  }
  return {
    success,
    error,
  }
}
