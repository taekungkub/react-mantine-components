import { ActionIcon, Button, Group, Text, createStyles } from "@mantine/core"
import { DataTable, DataTableSortStatus } from "mantine-datatable"
import { useEffect, useState } from "react"
import sortBy from "lodash/sortBy"
import { IconChevronUp, IconEdit, IconEye, IconSelector, IconTrash } from "@tabler/icons-react"
import { ProductTy } from "../../../type"

interface Props {
  data: Array<ProductTy>
}

export default function ProductsTable2({ data }: Props) {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: "#", direction: "asc" })
  const [records, setRecords] = useState(sortBy(data, "id"))

  useEffect(() => {
    const myData = sortBy(data, sortStatus.columnAccessor)
    setRecords(sortStatus.direction === "desc" ? myData.reverse() : myData)
  }, [sortStatus, data])
  return (
    <DataTable
      rowStyle={(theme) => ({})}
      withBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      mih={150}
      records={records}
      columns={[
        {
          accessor: "id",
          title: "#",
          textAlignment: "right",
          sortable: true,
        },
        { title: "Product", accessor: "title", sortable: true },
        { title: "Desc", accessor: "description", width: 200 },
        { title: "Price", accessor: "price", sortable: true, render: ({ price }) => <Text>$ {price}</Text> },
        { title: "Brand", accessor: "brand", sortable: true },
        { title: "Stock", accessor: "stock", sortable: true },
        { title: "Rating", accessor: "rating", sortable: true },
        { title: "Category", accessor: "category", sortable: true },
        {
          title: "Action",
          accessor: "actions",
          render: ({}) => (
            <Group position="center">
              <ActionIcon size={20}>
                <IconEdit />
              </ActionIcon>
              <ActionIcon size={20}>
                <IconTrash />
              </ActionIcon>
            </Group>
          ),
        },

        // {
        //   accessor: "party",
        //     render: ({ brand }) => (
        //       <Text weight={700} color={brand === "samsung" ? "blue" : "red"}>
        //       </Text>
        //     ),
        // },
      ]}
      sortStatus={sortStatus}
      onSortStatusChange={setSortStatus}
      sortIcons={{
        sorted: <IconChevronUp size={16} />,
        unsorted: <IconSelector size={16} />,
      }}
      // execute this callback when a row is clicked
      //   onRowClick={({ title, brand, description }) => alert(`You clicked on ${title}, a ${brand.toLowerCase()} president born in ${description}`)}
    />
  )
}
