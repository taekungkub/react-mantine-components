import { ActionIcon, Avatar, Button, Group, Text, ThemeIcon, createStyles } from "@mantine/core"
import { DataTable, DataTableSortStatus } from "mantine-datatable"
import { useEffect, useState } from "react"
import sortBy from "lodash/sortBy"
import { IconChevronUp, IconEdit, IconEye, IconSelector, IconTrash } from "@tabler/icons-react"
import { CustomerTy } from "@/type"
import { Navigate, useNavigate } from "react-router-dom"

interface Props {
  data: Array<CustomerTy> | null
  onEdit: (data: CustomerTy) => void
  onDelete: (data: CustomerTy) => void
}

export default function CustomerDataTable({ data, onEdit, onDelete }: Props) {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: "#", direction: "asc" })
  const [records, setRecords] = useState(sortBy(data, "id"))

  useEffect(() => {
    const myData = sortBy(data, sortStatus.columnAccessor)
    setRecords(sortStatus.direction === "desc" ? myData.reverse() : myData)
  }, [sortStatus, data])

  const navigate = useNavigate()
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
      noRecordsText="Data is empty :("
      columns={[
        {
          accessor: "id",
          title: "#",
          textAlignment: "center",
          sortable: true,
        },
        {
          title: "Name",
          accessor: "image",
          sortable: true,
          render: ({ image, firstName, lastName }) => (
            <Group>
              <Avatar src={image}></Avatar>

              <div style={{ flex: 1 }}>
                <Text size="sm" weight={500}>
                  {firstName} {lastName}
                </Text>
              </div>
            </Group>
          ),
        },
        { title: "Email", accessor: "email" },
        { title: "Gender", accessor: "gender", sortable: true },
        { title: "Phone", accessor: "phone", sortable: true },

        {
          title: "Action",
          accessor: "actions",
          textAlignment: "center",
          render: (data: CustomerTy) => (
            <Group position="center">
              <ActionIcon size={20} onClick={() => onEdit(data)}>
                <IconEdit />
              </ActionIcon>
              <ActionIcon size={20} onClick={() => onDelete(data)}>
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
      // onRowClick={({ id }) => }
    />
  )
}
