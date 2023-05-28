import { IconHeart } from "@tabler/icons-react";
import { Card, Image, Text, Group, Badge, Button, ActionIcon, createStyles, rem } from "@mantine/core";
import { ProductTy } from "@/type";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

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
}));

interface BadgeCardProps {
  data: ProductTy;
  onToggle?:()=>void
}

export default function CardProduct(product: BadgeCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={product.data.thumbnail} alt={product.data.title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {product.data.title}
          </Text>
          <Badge size="sm">{product.data.brand}</Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {product.data.description}
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
  );
}
