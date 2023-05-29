import { Badge, Button, Card, Flex, Title } from "@mantine/core"
import { FilterLinkGroup } from "./FilterLinkGroup"

function FilterProducts() {
  const mockdata = [
    {
      label: "Brand",
      links: [
        { label: "Upcoming releases", value: "/1" },
        { label: "Previous releases", value: "/2" },
        { label: "Releases schedule", value: "/3" },
      ],
    },
    {
      label: "Brand",
      links: [
        { label: "Upcoming releases", value: "/4" },
        { label: "Previous releases", value: "/5" },
        { label: "Releases schedule", value: "/6" },
      ],
    },
  ]

  const links = mockdata.map((item, i) => <FilterLinkGroup {...item} key={i} />)

  return (
    <Card>
      <Card.Section>
        <Flex justify={"space-between"}>
          <Title order={4}>Filter</Title>
          {/* <Button variant="subtle" size="xs">
            Clear
          </Button> */}
        </Flex>
        {/* <Flex wrap={"wrap"} gap={4} my={5}>
          <Badge>asd</Badge> <Badge>asd</Badge>
          <Badge>asd</Badge>
          <Badge>asdasdasd</Badge> <Badge>asd</Badge>
          <Badge>asd</Badge>
        </Flex> */}
      </Card.Section>
      <Card.Section>{links}</Card.Section>
    </Card>
  )
}

export default FilterProducts
