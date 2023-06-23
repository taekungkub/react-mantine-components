import { useMantineTheme, Container, Grid, Text, Button, Group, Avatar, UnstyledButton, Anchor, Code } from "@mantine/core"

const Footer = () => {
  const theme = useMantineTheme()

  return (
    <footer style={{ backgroundColor: theme.colors.yellow[6] }}>
      <Container p={32}>
        <Grid justify="space-around">
          <Grid.Col xs={12} sm={8} md={8} lg={8}>
            <Text size="xl" weight={700} color="white" mb="10px">
              Simple Mantine template
            </Text>

            <Button variant={"white"} color={"yellow"} component="a" target="_blank" rel="noopener noreferrer" href="https://mantine.dev/">
              Checkout mantine
            </Button>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={4} lg={4}></Grid.Col>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
