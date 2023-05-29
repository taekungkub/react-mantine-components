import { Anchor, Breadcrumbs } from "@mantine/core"

function MyBreadcrumbs() {
  const items = [
    { title: "Mantine", href: "#" },
    { title: "Mantine hooks", href: "#" },
    { title: "use-id", href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ))

  return (
    <div>
      <Breadcrumbs>{items}</Breadcrumbs>
    </div>
  )
}

export default MyBreadcrumbs
