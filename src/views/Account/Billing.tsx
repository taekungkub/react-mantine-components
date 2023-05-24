import { Avatar, Box, Button, Card, Divider, Grid, Group, Text } from "@mantine/core"
import ModalCreditCard from "../../components/Modals/ModalCreditCard"
import BillingHistory from "./components/BillingHistory"
import PageTitle from "../../components/PageTitle"
import MyCard from "../../components/MyCard"
import { IconBrandMastercard, IconBrandVisa, IconCreditCard, IconDeviceDesktopStar, IconDeviceIpad, IconPlus } from "@tabler/icons-react"
import { useDisclosure } from "@mantine/hooks"

const mockData = {
  data: [
    {
      ref: "#12",
      name: "Athena Weissnat",
      company: "Little - Rippin",
      email: "Elouise.Prohaska@yahoo.com",
      status: "Pending",
    },
    {
      ref: "#13",
      name: "Deangelo Runolfsson",
      company: "Greenfelder - Krajcik",
      email: "Kadin_Trantow87@yahoo.com",
      status: "Paid",
    },
    {
      ref: "#14",
      name: "Danny Carter",
      company: "Kohler and Sons",
      email: "Marina3@hotmail.com",
      status: "Paid",
    },
    {
      ref: "#15",
      name: "Trace Tremblay PhD",
      company: "Crona, Aufderhar and Senger",
      email: "Antonina.Pouros@yahoo.com",
      status: "Paid",
    },
  ],
}

function SectionAddCard() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Grid mt={50}>
        <Grid.Col xs={4}>
          <Text>Credit Cards</Text>
        </Grid.Col>
        <Grid.Col xs={8}>
          <MyCard>
            <Card.Section>
              <Group p={"xl"}>
                <Avatar color="blue" radius="sm">
                  <IconBrandVisa size="1.5rem" />
                </Avatar>
                <div style={{ flex: 1 }}>
                  <Text size="sm" weight={500}>
                    Ron Vargas •••• 0392
                  </Text>
                  <Text size="xs" color="dimmed" weight={400}>
                    Expired Dec 2025
                  </Text>
                </div>
                <Button variant="default">Edit</Button>
              </Group>
              <Divider />
              <Group p={"xl"}>
                <Avatar color="blue" radius="sm">
                  <IconBrandMastercard size="1.5rem" />
                </Avatar>
                <div style={{ flex: 1 }}>
                  <Text size="sm" weight={500}>
                    Ron Vargas •••• 8461
                  </Text>{" "}
                  <Text size="xs" color="dimmed" weight={400}>
                    Expired Jun 2025
                  </Text>
                </div>
                <Button variant="default">Edit</Button>
              </Group>
            </Card.Section>
          </MyCard>
        </Grid.Col>
        <Grid.Col xs={8} offsetXs={4}>
          <Button variant="default" leftIcon={<IconPlus />} onClick={open}>
            Add New Card
          </Button>
        </Grid.Col>
      </Grid>

      <ModalCreditCard opened={opened} open={open} close={close} />
    </>
  )
}

function BillingPage() {
  return (
    <div>
      <PageTitle title="Payment Method" subtitle="You can update your cards information here" />
      <SectionAddCard />
      <Box mt={50} mb={20}>
        <PageTitle title="Billing History" subtitle="View your previos billing" />
      </Box>
      <Box>
        <BillingHistory data={mockData.data} />
      </Box>
    </div>
  )
}

export default BillingPage
