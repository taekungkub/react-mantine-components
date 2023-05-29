import { IconHeart } from "@tabler/icons-react"
import { Card, Image, Text, Group, Badge, Button, ActionIcon, createStyles, rem, Title } from "@mantine/core"
import { ProductTy } from "@/type"
import "./CardProduct.scss"

const useStyles = createStyles((theme) => ({
  section: {
    borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
  desc: {
    overflow: "hidden",
  },
}))

interface BadgeCardProps {
  data: ProductTy
  onToggle?: () => void
}

export default function CardProduct(product: BadgeCardProps) {
  const { classes, theme } = useStyles()

  return (
    <Card withBorder radius="md" p="md" className="card_product">
      <Card.Section>
        <Image src={product.data.thumbnail} alt={product.data.title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500} className="title">
            {product.data.title}
          </Text>
        </Group>

        <Text fz="sm" mt="xs" className="desc">
          {product.data.description}
        </Text>
        <Text fz="lg" fw={500} className="title">
          ${product.data.price}
        </Text>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }} onClick={product.onToggle}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  )
}
