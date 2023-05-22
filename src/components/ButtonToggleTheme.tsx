import { Button, ColorScheme, Switch, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { IconMoon, IconMoonStars, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

type EnumTheme = "light" | "dark";

function ButtonToggleTheme() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const { toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Switch
      checked={colorScheme === "dark"}
      onChange={() => toggleColorScheme()}
      size="lg"
      onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
      offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
    />
  );
}

export default ButtonToggleTheme;
