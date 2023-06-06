import { IconHeart, IconShoppingCartPlus } from "@tabler/icons-react"
import { Card, Image, Text, Group, Badge, Button, ActionIcon, createStyles, rem, Title, Flex, Rating } from "@mantine/core"
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
    color: theme.colors.green[6],
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
  onAddToCart: () => void
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
          <Text fz="lg" fw={500} lineClamp={1}>
            {product.data.title}
          </Text>
        </Group>

        <Text fz="sm" mt="xs" lineClamp={2}>
          {product.data.description}
        </Text>
        <Rating value={product.data.rating} fractions={2} readOnly mt={12} />
        <Flex align={"center"} mt={12}>
          <Badge color="yellow">-{product.data.discountPercentage}%</Badge>
          <Text fz="lg" fw={500} className="title">
            ${product.data.price}
          </Text>
        </Flex>
      </Card.Section>
      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }} onClick={product.onToggle}>
          Show details
        </Button>
        <ActionIcon variant="light" color="green" radius="md" size={36} onClick={product.onAddToCart}>
          <IconShoppingCartPlus size="1.1rem" className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  )
}
