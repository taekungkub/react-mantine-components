import { Anchor, Breadcrumbs } from "@mantine/core"

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
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ))

  return (
    <div>
      <Breadcrumbs mb={20}>{items}</Breadcrumbs>
    </div>
  )
}

export default MyBreadcrumbs
