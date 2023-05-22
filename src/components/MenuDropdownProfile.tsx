import { Menu, Group, Text, Avatar, useMantineTheme, ActionIcon } from "@mantine/core";
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronRight,
  IconDots,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function MenuDropdownProfile() {
  const theme = useMantineTheme();

  const navigate = useNavigate();
  return (
    <Group position="center">
      <Menu withArrow width={300} position="bottom" transitionProps={{ transition: "pop" }} withinPortal>
        <Menu.Target>
          <ActionIcon>
            <Avatar
              radius="xl"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item rightSection={<IconChevronRight size="0.9rem" stroke={1.5} />} onClick={() => navigate("/account/profile")}>
            <Group>
              <Avatar
                radius="xl"
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
              />

              <div>
                <Text weight={500}>Nancy Eggshacker</Text>
                <Text size="xs" color="dimmed">
                  neggshaker@mantine.dev
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

          <Menu.Item color="red" icon={<IconTrash size="0.9rem" stroke={1.5} />}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
