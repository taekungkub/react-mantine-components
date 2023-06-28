import { useMantineTheme, Container, Text, Title, Grid, Card, Image, Badge, Button, Group } from "@mantine/core"

import LimeWelcome from "@/assets/landing/lime-welcome.png"
import LimeMessageSent from "@/assets/landing/lime-message-sent.png"
import LimeCanoeing from "@/assets/landing/lime-canoeing.png"
const SectionFour = () => {
  const theme = useMantineTheme()

  return (
    <section id="section-four">
      <Container pt={140}>
        <Text color="black" align="center">
          <Title order={1} mb="30px">
            These cards are really nice
          </Title>
        </Text>

        <Grid>
          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card shadow="sm" p="lg" style={{ height: "100%" }}>
              <Card.Section>
                <Image src={LimeWelcome} alt={"sample1"} />
              </Card.Section>

              <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                <Text weight={500}>History of Dennis Farina</Text>
                <Badge color="yellow" variant="light">
                  Cool badge
                </Badge>
              </Group>

              <Text size="sm">Discover the career of Dennis Farina and his roles in movies!</Text>

              <Button variant="light" color="yellow" fullWidth mt="14px">
                Find out
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card shadow="sm" p="lg" style={{ height: "100%" }}>
              <Card.Section>
                <Image src={LimeCanoeing} alt={"sample1"} />
              </Card.Section>

              <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                <Text weight={500}>Career of Dennis Farina</Text>
                <Badge color="yellow" variant="light">
                  Cool badge 2
                </Badge>
              </Group>

              <Text size="sm">Dennis Farina had a really great career with many opportunities!</Text>

              <Button variant="light" color="yellow" fullWidth mt="14px">
                Find out
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card shadow="sm" p="lg" style={{ height: "100%" }}>
              <Card.Section>
                <Image src={LimeMessageSent} alt={"sample1"} />
              </Card.Section>

              <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                <Text weight={500}>Major roles of Dennis Farina</Text>
                <Badge color="yellow" variant="light">
                  Cool badge 3
                </Badge>
              </Group>

              <Text size="sm">Discover the major roles of Dennis Farina and something else!</Text>

              <Button variant="light" color="yellow" fullWidth mt="14px">
                Find out
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  )
}

export default SectionFour