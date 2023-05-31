import { Anchor, Box, Breadcrumbs, Flex, Text } from "@mantine/core"
import { Link } from "react-router-dom"

interface Props {
  items: { title: string | undefined; href: string }[]
}

const items = [
  { title: "Mantine", href: "#" },
  { title: "Mantine hooks", href: "#" },
  { title: "use-id", href: "#" },
]

function MyBreadcrumbs(props: Props) {
  const items = props.items.map((item, index) => (
    <Text component={Link} to={item.href} key={index}>
      {item.title}
    </Text>
  ))

  return (
    <Flex>
      <Breadcrumbs mb={20}>{items}</Breadcrumbs>
    </Flex>
  )
}

export default MyBreadcrumbs
