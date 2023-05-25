import { Group, Paper, ThemeIcon, Text, createStyles, RingProgress, Center, Badge, Flex } from "@mantine/core"
import { IconArrowUpRight, IconArrowDownRight, Icon24Hours, IconUser } from "@tabler/icons-react"

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
  },
}))

type ColorType = "UP" | "DOWN"

interface Props {
  title: string
  value: number
  percent: number
  type: ColorType
  children?: React.ReactNode
}

function CardStatsCustomer({ title, value, percent, type, children }: Props) {
  const { classes } = useStyles()

  const DiffIcon = 123 > 0 ? IconArrowUpRight : IconArrowDownRight

  return (
    <Paper withBorder p="md" radius="md">
      <Group position="apart">
        <Group>
          {children}
          <div>
            <Text c="dimmed" tt="uppercase" fw={700} fz="xs">
              {title}
            </Text>
            <Text fw={700} fz="xl">
              {value}
            </Text>
          </div>
        </Group>
        <Badge p={"sm"} color={type === "UP" ? "teal" : "red"}>
          <Flex gap={4} align={"center"}>
            {type === "UP" ? <IconArrowUpRight size={"1rem"} /> : <IconArrowDownRight />}
            <Text fw={700}>{percent}%</Text>
          </Flex>
        </Badge>
      </Group>
    </Paper>
  )
}

export default CardStatsCustomer
