import { Title, Text, Container, Grid, Image, Button, Box, createStyles } from "@mantine/core"

import LimeBike from "@/assets/landing/lime-bicycle-riding.png"
import LimeSurfing from "@/assets/landing/lime-surfing.png"

const useStyles = createStyles((theme) => ({
  section_two: {
    color: theme.colorScheme === "dark" ? "white" : "black",
  },
}))

const SectionTwo = () => {
  //const theme = useMantineTheme();
  const { classes } = useStyles()

  return (
    <section id="section-two" className={classes.section_two}>
      <Container>
        <Box pt={140}>
          <Grid justify="space-around">
            <Grid.Col xs={6} sm={8} md={8} lg={8}>
              <div style={{ marginBottom: 20 }}>
                <Text>
                  <Title order={1}>You can put whatever you want here</Title>
                  Dennis Farina was one of Hollywood's busiest actors and a familiar face to moviegoers and television viewers alike. In 1998's "Saving Private Ryan,"
                  directed by Steven Spielberg, Farina played "Col. Anderson," a pivotal role in the film.
                </Text>
              </div>
              <Button color="yellow">Check it out</Button>
            </Grid.Col>
            <Grid.Col xs={6} sm={4} md={4} lg={4}>
              <Image src={LimeBike} alt={"sample1"} style={{ width: "100%" }} />
            </Grid.Col>
          </Grid>
        </Box>

        <Box pt={140}>
          <Grid justify="space-around">
            <Grid.Col xs={6} sm={4} md={4} lg={4} order={2} orderXs={1}>
              <Image src={LimeSurfing} alt={"sample2"} style={{ width: "100%" }} />
            </Grid.Col>
            <Grid.Col xs={6} sm={8} md={8} lg={8} order={1} orderXs={2}>
              <div style={{ marginBottom: 20 }}>
                <Text>
                  <Title order={1}>Put something here too</Title>
                  Dennis Farina is unique among thespians in that he was one of the few to achieve success as a "late-bloomer." He did not start acting until he was 37
                  years old, after stints in the military and 18 years on the Chicago Police Department.
                </Text>
              </div>
              <Button color="yellow">Tell me more</Button>
            </Grid.Col>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

export default SectionTwo
