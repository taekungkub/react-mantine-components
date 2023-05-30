import { ActionIcon, Badge, Button, Card, Flex, Title } from "@mantine/core"
import { FilterLinkGroup } from "./FilterLinkGroup"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { IconClearAll, IconX } from "@tabler/icons-react"

function FilterProducts() {
  const mockdata = [
    {
      label: "Price",
      isPrice: true,
      minPrice: 0,
      maxPrice: 2000,
      initiallyOpened: false,
      links: [{ label: "", value: "" }],
    },
    {
      label: "Rating",
      isRating: true,
      initiallyOpened: false,
      links: [{ label: "", value: "" }],
    },
  ]

  const links = mockdata.map((item, i) => <FilterLinkGroup {...item} key={i} />)

  const [searchParams, setSearchParams] = useSearchParams()

  const params: string[] = []

  for (let entry of searchParams.entries()) {
    params.push(entry[0])
  }
  function handleClearFilterAll() {
    for (let v of params) {
      console.log(v)
      searchParams.delete(v)
      setSearchParams(searchParams)
    }
  }
  return (
    <Card>
      <Card.Section>
        <Flex justify={"space-between"}>
          <Title order={4}>Filter</Title>
          {params.length >= 1 && (
            <Button variant="subtle" size="xs" onClick={() => handleClearFilterAll()}>
              Clear
            </Button>
          )}
        </Flex>

        <Flex wrap={"wrap"} gap={10} mt={12}>
          {params.map((v, i) => (
            <Button
              variant="light"
              size="xs"
              rightIcon={<IconX size="1.125rem" />}
              onClick={() => {
                searchParams.delete(v)
                setSearchParams(searchParams)
              }}
              key={i}
            >
              {v}
            </Button>
          ))}
        </Flex>
      </Card.Section>
      <Card.Section mt={20}>{links}</Card.Section>
    </Card>
  )
}

export default FilterProducts
