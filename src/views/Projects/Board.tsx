import { Box, Card, Divider, Group, ScrollArea, Title, createStyles, rem } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  itemDragging: {
    border: `2px solid ${theme.colors.blue[6]}`,
  },
}))

interface Props {
  children: React.ReactNode
  title: string
  background: string
  isDragging?: boolean
}

function BoardTask({ children, title, background, isDragging }: Props) {
  const { classes, cx } = useStyles()

  return (
    <>
      <Card withBorder bg={"gray.0"}>
        <Card.Section withBorder inheritPadding py="xs" bg={background}>
          <Title order={4} color="white">
            {title}
          </Title>
        </Card.Section>

        <Card.Section inheritPadding className={cx({ [classes.itemDragging]: isDragging })}>
          <ScrollArea.Autosize mah={500} pt={20}>
            {children}
          </ScrollArea.Autosize>
        </Card.Section>
      </Card>
    </>
  )
}

export default BoardTask
