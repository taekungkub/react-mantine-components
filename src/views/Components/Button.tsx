import { Button, Group, Title } from "@mantine/core"
import PageTitle from "../../components/PageTitle"

function ButtonPage() {
  return (
    <div>
      <PageTitle pageTitle={"Color"}></PageTitle>
      <Group>
        <Button>primary</Button>
        <Button color="teal">teal</Button>
        <Button color="green">green</Button>
        <Button color="info">info</Button>
        <Button color="red">red</Button>
        <Button color="yellow">yellow</Button>
        <Button color="gray">gray</Button>
        <Button color="dark">dark</Button>
      </Group>

      <br />

      <PageTitle pageTitle={"Custom"}></PageTitle>
      <Group>
        <Button color="danger" variant={"danger"}>
          danger
        </Button>
        <Button color="danger" variant={"success"}>
          success gradient
        </Button>
      </Group>

      <br />

      <PageTitle pageTitle={"Variant"}></PageTitle>
      <Group>
        <Button variant="filled">filled</Button>
        <Button variant="light">light</Button>
        <Button variant="outline">outline</Button>
        <Button variant={"gradient"}>gradient</Button>
        <Button variant={"subtle"}>subtle</Button>
        <Button variant="white">white</Button>
      </Group>
    </div>
  )
}

export default ButtonPage
