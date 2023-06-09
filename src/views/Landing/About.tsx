import { Text, Anchor, MediaQuery, Button, Box, Transition } from "@mantine/core"
import { Link } from "react-scroll"

import "./styles/About.scss"

const About = () => {
  //const theme = useMantineTheme();

  return (
    <section id="about">
      <Box w={"100%"}>
        <div className="about-content">
          <div style={{ marginBottom: 15 }}>
            <Text transform="uppercase" weight={500} color="yellow">
              MADE WITH REACT AND MANTINE
            </Text>
          </div>

          <div style={{ marginBottom: 15 }}>
            <Text>
              <MediaQuery query="(max-width: 768px)" styles={{ fontSize: "2.8rem !important" }}>
                <h1 className="title">Simple Mantine Template</h1>
              </MediaQuery>
            </Text>
          </div>

          <div style={{ marginBottom: 25 }}>
            <Text size="xl" color="black">
              Simple showcase of this powerful and well implemented library called <Anchor href="https://mantine.dev/">Mantine</Anchor>.
            </Text>
          </div>

          <div className="buttons">
            <Link to="section-one" smooth duration={500}>
              <Button color="yellow" radius="lg" size="md">
                Tell me more
              </Button>
            </Link>

            <Button variant="default" radius="lg" size="md">
              Other stuff
            </Button>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default About
