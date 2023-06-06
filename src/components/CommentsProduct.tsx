import { createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper, rem, ActionIcon, Menu } from "@mantine/core"
import { IconDots } from "@tabler/icons-react"

const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
  },

  body: {
    paddingLeft: rem(54),
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
    [theme.fn.smallerThan("xs")]: {
      paddingLeft: rem(0),
    },
  },

  content: {
    "& > p:last-child": {
      marginBottom: 0,
    },
  },
}))

interface CommentHtmlProps {
  postedAt: string
  body: string
  author: {
    name: string
  }
}

export default function CommentHtml({ postedAt, body, author }: CommentHtmlProps) {
  const { classes } = useStyles()
  return (
    <Paper withBorder radius="md" className={classes.comment} sx={{ position: "relative" }}>
      <Menu>
        <Menu.Target>
          <ActionIcon sx={{ position: "absolute", right: "10px", top: "10px" }}>
            <IconDots size="1rem" stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Report</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Group>
        <Avatar alt={author.name} radius="xl" />
        <div>
          <Text fz="sm">{author.name}</Text>
          <Text fz="xs" c="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>

      <TypographyStylesProvider className={classes.body}>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: body }} />
      </TypographyStylesProvider>
    </Paper>
  )
}
