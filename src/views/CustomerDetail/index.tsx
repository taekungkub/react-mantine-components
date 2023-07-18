import React, { useEffect } from "react"
import useCustomer from "../../hooks/useCustomer"
import { useParams } from "react-router-dom"
import PageTitle from "../../components/PageTitle"
import { Avatar, Box, Card, Flex, Grid, Group, Text, Button } from "@mantine/core"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import EditCustomerDrawer from "../CRM/components/EditCustomerDrawer"
import { CustomerTy } from "../../type"
import { useDisclosure } from "@mantine/hooks"
import { modals } from "@mantine/modals"

type Props = {}

export default function CustomerDetailPage({}: Props) {
  const [opened, { open, close }] = useDisclosure(false)
  const { getCustomerData, customerData } = useCustomer()
  const { id } = useParams()
  useEffect(() => {
    getCustomerData(Number(id))
  }, [])

  function handleUpdate(data: CustomerTy) {
    console.log(data)
  }

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: `Delete ${customerData?.firstName} ${customerData?.lastName}`,
      centered: true,
      children: <Text size="sm">Are you sure you want to delete data.</Text>,
      labels: { confirm: "Delete account", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    })

  return (
    <div>
      <EditCustomerDrawer opened={opened} close={close} open={open} customerData={customerData} update={(data: CustomerTy) => handleUpdate(data)} />

      <PageTitle pageTitle={"Customer Details"} />

      <Grid>
        <Grid.Col sm={4}>
          <Card withBorder>
            <Card.Section inheritPadding py={"lg"}>
              <Flex justify={"center"} direction={"column"} align={"center"}>
                <Avatar src={customerData?.image} size={"5rem"} radius={"999px"} bg="gray.2"></Avatar>

                <Text fw={500} mt={14}>
                  {customerData?.firstName} {customerData?.lastName}
                </Text>
              </Flex>
              <Box>
                <Text color="dimmed" fz={"sm"} mt={14}>
                  Email
                </Text>
                <Text fz={"sm"}>{customerData?.email}</Text>
              </Box>
              <Box mt={"lg"}>
                <Text color="dimmed" fz={"sm"} mt={14}>
                  Phone
                </Text>
                <Text fz={"sm"}>{customerData?.phone}</Text>
              </Box>
              <Box mt={"lg"}>
                <Text color="dimmed" fz={"sm"} mt={14}>
                  Location
                </Text>
                <Text fz={"sm"}>London, UK</Text>
              </Box>
              <Box mt={"lg"}>
                <Text color="dimmed" fz={"sm"} mt={14}>
                  Date of birth
                </Text>
                <Text fz={"sm"}>17/11/1993</Text>
              </Box>
              <Box mt={"lg"}>
                <Text color="dimmed" fz={"sm"} mt={14}>
                  Title
                </Text>
                <Text fz={"sm"}>{customerData?.company.title}</Text>
              </Box>
              <Flex w={"100%"} gap={8} mt={"md"}>
                <Button variant={"light"} color="blue" fullWidth leftIcon={<IconTrash size={"1.125rem"} />} onClick={openDeleteModal}>
                  Delete
                </Button>
                <Button fullWidth leftIcon={<IconEdit size={"1.125rem"} />} onClick={open}>
                  Edit
                </Button>
              </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col sm={8}>Subscription</Grid.Col>
      </Grid>
    </div>
  )
}
