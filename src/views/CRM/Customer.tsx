import { Flex, TextInput, Text, SimpleGrid, ThemeIcon } from "@mantine/core"
import CustomerDataTable from "../../components/CustomerDataTable"
import PageTitle from "../../components/PageTitle"
import useCustomer, { useFilterCustomer } from "../../hooks/useCustomer"
import { useDisclosure } from "@mantine/hooks"
import EditCustomerDrawer from "./components/EditCustomerDrawer"
import { CustomerTy } from "../../type"
import { modals } from "@mantine/modals"
import CardStatsCustomer from "../../components/Cards/CardStatsCustomer"
import { IconUserCheck, IconUserPlus, IconUsers } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { Suspense, useEffect } from "react"
import { useNavigate } from "react-router-dom"
function SectionUserStats() {
  let stats = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]} mt={20}>
        <CardStatsCustomer title="Total Customers" value={2400} percent={17.9} type="UP">
          <ThemeIcon size={"xl"}>
            <IconUsers />
          </ThemeIcon>
        </CardStatsCustomer>
        <CardStatsCustomer title="Active Customers" value={1897} percent={32.7} type="UP">
          <ThemeIcon size={"xl"} color="violet">
            <IconUserCheck />
          </ThemeIcon>
        </CardStatsCustomer>
        <CardStatsCustomer title="New Customers" value={241} percent={2.7} type="DOWN">
          <ThemeIcon size={"xl"} color="teal">
            <IconUserPlus />
          </ThemeIcon>
        </CardStatsCustomer>
      </SimpleGrid>
    </motion.div>
  )
}

function CustomerPage() {
  const { getCustomers, custoemrs, searchQuery, setSearchQuery, selectedCustomer, setSelectedCustomer } = useCustomer()
  const customerFilter = useFilterCustomer({ data: custoemrs, searchQuery })

  const [opened, { open, close }] = useDisclosure(false)
  const navigate = useNavigate()

  useEffect(() => {
    getCustomers()
  }, [])

  function handleEdit(data: CustomerTy) {
    open()
    setSelectedCustomer(data)
  }

  function handleDelete(data: CustomerTy) {
    setSelectedCustomer(data)
    openDeleteModal(data)
  }

  function handleUpdate(data: CustomerTy) {
    console.log(data)
  }

  function handleView(data: CustomerTy) {
    console.log(data)
    navigate("/crm/customer/" + data.id)
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
      <SectionUserStats />
      <Flex wrap={"wrap"} gap={10} justify={"start"} my={20}>
        <TextInput placeholder="Seacrch" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </Flex>
      <CustomerDataTable data={customerFilter} onView={handleView} onEdit={(data: CustomerTy) => handleEdit(data)} onDelete={handleDelete} />
      <EditCustomerDrawer opened={opened} close={close} open={open} customerData={selectedCustomer} update={(data: CustomerTy) => handleUpdate(data)} />
    </div>
  )
}

export default CustomerPage
