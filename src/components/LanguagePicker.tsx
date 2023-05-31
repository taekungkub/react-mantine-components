import { useEffect, useState } from "react"
import { createStyles, UnstyledButton, Menu, Image, Group, rem, Box } from "@mantine/core"
import { IconChevronDown } from "@tabler/icons-react"
import english from "@/assets/media/english.png"
import thai from "@/assets/media/thai.png"
import { useTranslation } from "react-i18next"

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: rem(150),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    transition: "background-color 150ms ease",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[opened ? 5 : 6] : opened ? theme.colors.gray[0] : theme.white,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
}))

export default function LanguagePicker() {
  const { t, i18n } = useTranslation()

  const data = [
    { label: "english", image: english, value: "en" },
    { label: "thai", image: thai, value: "th" },
  ]

  const [opened, setOpened] = useState(false)
  const { classes } = useStyles({ opened })
  const [selected, setSelected] = useState(i18n.language === "en" ? data[0] : data[1])

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng)
  }

  const items = data.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={18} height={18} />}
      onClick={() => {
        setSelected(item)
        changeLanguage(item.value)
      }}
      key={item.label}
    >
      {t(item.label)}
    </Menu.Item>
  ))

  return (
    <Box>
      <Menu onOpen={() => setOpened(true)} onClose={() => setOpened(false)} radius="md" width="target" withinPortal>
        <Menu.Target>
          <UnstyledButton className={classes.control}>
            <Group spacing="xs">
              <Image src={selected.image} width={22} height={22} />
              <span className={classes.label}>{selected.label}</span>
            </Group>
            <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>{items}</Menu.Dropdown>
      </Menu>
    </Box>
  )
}
