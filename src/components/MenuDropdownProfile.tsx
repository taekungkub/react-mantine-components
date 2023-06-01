import { Menu, Group, Text, Avatar, ActionIcon, createStyles } from "@mantine/core"
import { IconSettings, IconTrash, IconChevronRight } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"
import useAuth from "../context/AuthContext"

export default function MenuDropdownProfile() {
  const navigate = useNavigate()

  const { user, logout, loggedIn } = useAuth()
  return (
    <div>
      <Group position="center">
        <Menu withArrow width={250} position="bottom" transitionProps={{ transition: "pop" }}>
          <Menu.Target>
            <ActionIcon>
              <Avatar src={user?.image} radius={"lg"} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item onClick={() => navigate("/account/profile")}>
              <Group>
                <div>
                  <Text weight={500}>{user?.firstName}</Text>
                  <Text size="xs" color="dimmed">
                    {user?.email}
                  </Text>
                </div>
              </Group>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Label>Settings</Menu.Label>
            <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />} onClick={() => navigate("/account/profile")}>
              Account settings
            </Menu.Item>

            <Menu.Divider />
            <Menu.Item color="red" icon={<IconTrash size="0.9rem" stroke={1.5} />} onClick={() => logout()}>
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </div>
  )
}
