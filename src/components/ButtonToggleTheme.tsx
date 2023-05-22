import { Button, ColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
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

  return (
    <Button leftIcon={dark ? <IconMoon /> : <IconSun />} onClick={() => toggleColorScheme()}>
      {colorScheme.charAt(0).toLocaleUpperCase() + colorScheme.slice(1)}
    </Button>
  );
}

export default ButtonToggleTheme;
