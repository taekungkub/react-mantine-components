import { Flex, TextInput, Text } from "@mantine/core"
import CustomerDataTable from "../../components/CustomerDataTable"
import PageTitle from "../../components/PageTitle"
import useCustomer, { useFilterCustomer } from "../../hooks/useCustomer"
import { useDisclosure } from "@mantine/hooks"
import EditCustomerDrawer from "./components/EditCustomerDrawer"
import { CustomerTy } from "../../type"
import { modals } from "@mantine/modals"

function CustomerPage() {
  const { custoemrs, searchQuery, setSearchQuery, selectedCustomer, setSelectedCustomer } = useCustomer()
  const customerFilter = useFilterCustomer({ data: custoemrs, searchQuery })
  const [opened, { open, close }] = useDisclosure(false)

  function handleEdit(data: CustomerTy) {
    open()
    setSelectedCustomer(data)
  }

  function handleDelete(data: CustomerTy) {
    setSelectedCustomer(data)
    openDeleteModal(data)
  }

  const openDeleteModal = (data: CustomerTy) =>
    modals.openConfirmModal({
      title: `Delete ${data.firstName} ${data.lastName}`,
      centered: true,
      children: <Text size="sm">Are you sure you want to delete data.</Text>,
      labels: { confirm: "Delete account", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    })

  return (
    <div>
      <PageTitle pageTitle={"Customer"}></PageTitle>
      <Flex wrap={"wrap"} gap={10} justify={"start"} my={20}>
        <TextInput placeholder="Seacrch" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </Flex>
      <CustomerDataTable data={customerFilter} onEdit={(data: CustomerTy) => handleEdit(data)} onDelete={handleDelete} />
      <EditCustomerDrawer opened={opened} close={close} open={open} customerData={selectedCustomer} />
    </div>
  )
}

export default CustomerPage
