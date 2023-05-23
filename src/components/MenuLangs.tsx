import { Menu, Button, Text, createStyles } from "@mantine/core";
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight, IconLanguage, IconChevronDown } from "@tabler/icons-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function MenuLang() {
  const useStyles = createStyles((theme) => ({
    dropdownActive: {
      color: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
    },
  }));

  const { classes, cx } = useStyles();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button size="sm" variant="light" rightIcon={<IconChevronDown />}>
          {t("language")}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconSettings size={14} />} className={cx({ [classes.dropdownActive]: i18n.language === "th" })} onClick={() => changeLanguage("th")}>
          {t("thai")}
        </Menu.Item>
        <Menu.Item
          icon={<IconMessageCircle size={14} />}
          className={cx({ [classes.dropdownActive]: i18n.language === "en" })}
          onClick={() => changeLanguage("en")}
        >
          {t("english")}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
