import { useState } from "react"
import { createStyles, Table, ScrollArea, UnstyledButton, Group, Text, Center, TextInput, rem, Badge } from "@mantine/core"
import { keys } from "@mantine/utils"
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from "@tabler/icons-react"
import { ProductTy } from "../../../type"

const useStyles = createStyles((theme) => ({
  table: {},
  th: {
    padding: "0 !important",
  },

  control: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  icon: {
    width: rem(21),
    height: rem(21),
    borderRadius: rem(21),
  },
}))

interface RowData extends ProductTy {}

interface TableSortProps {
  data: RowData[]
}

interface ThProps {
  children: React.ReactNode
  reversed: boolean
  sorted: boolean
  onSort(): void
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const { classes } = useStyles()
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size="0.9rem" stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  )
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim()
  return data.filter((item) => keys(data[0]).some((key) => item[key].toString().toLowerCase().includes(query)))
}

function sortData(data: RowData[], payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }) {
  const { sortBy } = payload

  if (!sortBy) {
    return filterData(data, payload.search)
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].toString().localeCompare(a[sortBy].toString())
      }

      return a[sortBy].toString().localeCompare(b[sortBy].toString())
    }),
    payload.search
  )
}

export default function BillingHistory({ data }: TableSortProps) {
  const { classes } = useStyles()

  const [search, setSearch] = useState("")
  const [sortedData, setSortedData] = useState(data)
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false
    setReverseSortDirection(reversed)
    setSortBy(field)
    setSortedData(sortData(data, { sortBy: field, reversed, search }))
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }))
  }

  const rows = sortedData.map((row) => (
    <tr key={row.id}>
      <td>{row.id}</td>
      <td>{row.category}</td>
      <td>{row.title}</td>
      <td>{row.description}</td>
      <td>{row.price}</td>
      <td>{row.rating}</td>
    </tr>
  ))

  return (
    <ScrollArea>
      <TextInput placeholder="Search by any field" mb="md" icon={<IconSearch size="0.9rem" stroke={1.5} />} value={search} onChange={handleSearchChange} />
      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        sx={{ tableLayout: "fixed" }}
        withBorder
        className={classes.table}
        striped
        style={{
          overflowX: "auto",
        }}
      >
        <thead>
          <tr>
            <Th sorted={sortBy === "id"} reversed={reverseSortDirection} onSort={() => setSorting("id")}>
              Ref
            </Th>
            <Th sorted={sortBy === "category"} reversed={reverseSortDirection} onSort={() => setSorting("category")}>
              Name
            </Th>
            <Th sorted={sortBy === "title"} reversed={reverseSortDirection} onSort={() => setSorting("title")}>
              Email
            </Th>
            <Th sorted={sortBy === "description"} reversed={reverseSortDirection} onSort={() => setSorting("description")}>
              Status
            </Th>
            <Th sorted={sortBy === "price"} reversed={reverseSortDirection} onSort={() => setSorting("price")}>
              Company
            </Th>
            <Th sorted={sortBy === "rating"} reversed={reverseSortDirection} onSort={() => setSorting("rating")}>
              Rating
            </Th>
          </tr>
        </thead>
        <tbody>
          {rows}
          {/* {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={Object.keys(data[0]).length}>
                <Text weight={500} align="center">
                  Nothing found
                </Text>
              </td>
            </tr>
          )} */}
        </tbody>
      </Table>
    </ScrollArea>
  )
}
