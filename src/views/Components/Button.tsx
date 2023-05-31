import { Button, Group } from "@mantine/core"

function ButtonPage() {
  return (
    <div>
      <Group position="center">
        <Button>Primary</Button>
        <Button color="teal">teal</Button>
        <Button color="green">green</Button>
        <Button color="info">info</Button>
        <Button color="red">red</Button>
        <Button color="yellow">yellow</Button>
        <Button color="gray">gray</Button>
        <Button color="dark">dark</Button>
      </Group>

      <Group position="center" mt={20}>
        <Button variant="filled">filled</Button>
        <Button variant="light">light</Button>
        <Button variant="outline">outline</Button>
      </Group>
    </div>
  )
}

export default ButtonPage
