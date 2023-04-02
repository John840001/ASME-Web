import { Text, Spacer, Image, Card, Grid, Container } from "@nextui-org/react";
import { Box } from "./Box.js";
import Team from "./Team.js";
import Contact from "./Contact.js";
import Typed from "react-typed";

export const Content = () => (
  <div>
    <Box
      css={{
        px: "$12",
        alignContent: "center",
        mt: "$8",
        // "@xsMax": { px: "$10" },
      }}
    >
      <Spacer y={9} />
      <Box
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          "@xsMax": { width: "100%", displayContent: "center" ,justifyContent: "center" },
        }}
      >
        <Box
          css={{
            justifyContent: "center",
            bgColor: "#000",
            // "@xsMax": { width: "100%", justifyContent: "center" },
          }}
        >
          <Text
            h1
            size="80px"
            weight="extrabold"
            css={{
              textGradient: "45deg, #E42024 -20%, #333333 80%",
              // "@xsMax": { width: "100%", justifyContent: "center" },
            }}
          >
            <Typed   
              strings={["ASME CRCE", "ASME CRCE", "ASME CRCE"]}
              typeSpeed={40}
              backSpeed={40}
              loop
            />
          </Text>
        </Box>
        <Spacer y={1} />
        <Box
          css={{
            justifyContent: "center",
            bgColor: "#000",
            // "@xsMax": { width: "50%", justifyContent: "center" },
          }}
        >
          <Text
            size="20px"
            css={{
              // justifyContent: "center",
              textAlign: "center",
              color: "$primary",
              width: "1000px",
              "@xsMax": { width: "100%", justifyContent: "center" },
            }}
          >
            A Community of Mechanical Engineers, Designers, and Enthusiasts in
            collaboration with ASME CRCE Students.
          </Text>
        </Box>
      </Box>
      <Spacer y={12} />
      <Card
        css={{
          maxHeight: "fit-content",
          padding: "5px",
          bgColor: "#333333",
          justifyContent: "center",
        }}
      >
        <Spacer y={1} />
        <Container>
          <Text
            h2
            size="50px"
            id="about"
            css={{ color: "#E42024", paddingLeft: "50px" }}
          >
            Who are we?
          </Text>
          <Grid.Container gap={1} justify="center">
            <Grid xs={8}>
              <Text
                size="20px"
                css={{ color: "$primary", justifyContent: "center" }}
              >
                We strive to provide, gain, and share the ever thriving
                knowledge of mechanical industry and related engineering
                interests via Webinars, Posts, Discussions and lot more. Our
                focus is to equip the pursuers of Mechanical engineering with
                latest engineering trends in design, manufacture and analysis,
                so that they are well updated in the race of Academic
                excellance.
              </Text>
            </Grid>
            <Grid xs>
              <Grid.Container gap={1} justify="center">
                <Grid xs>
                  <Image
                    width={325}
                    height={325}
                    src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                    alt="Default Image"
                    objectFit="cover"
                    css={{
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid xs>
                  <Image
                    width={325}
                    height={325}
                    src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                    alt="Default Image"
                    objectFit="cover"
                    css={{
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
              </Grid.Container>
            </Grid>
          </Grid.Container>
        </Container>
        <Spacer y={2} />
      </Card>
      <Spacer y={2} />
      <Card
        css={{ maxHeight: "fit-content", padding: "5px", bgColor: "#E42024" }}
      >
        <Spacer y={1} />
        <Container>
          <Text
            h2
            size="50px"
            css={{ color: "#333333", textAlign: "end", paddingRight: "70px" }}
          >
            What we do?
          </Text>
          <Grid.Container gap={2} justify="center">
            <Grid xs>
              <Image
                width={500}
                height={500}
                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                alt="Default Image"
                objectFit="cover"
                css={{
                  borderRadius: "10px",
                }}
              />
            </Grid>
            <Grid xs>
              <Text size="20px" css={{ color: "#333333" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Purus gravida quis blandit turpis. Augue neque gravida in
                fermentum et sollicitudin ac orci. Et sollicitudin ac orci
                phasellus egestas. Elementum tempus egestas sed sed risus
                pretium quam vulputate. Interdum velit euismod in pellentesque
                massa placerat duis ultricies. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Purus gravida quis blandit
                turpis. Augue neque gravida in fermentum et sollicitudin ac
                orci. Et sollicitudin ac orci phasellus egestas. Elementum
                tempus egestas sed sed risus pretium quam vulputate. Interdum
                velit euismod in pellentesque massa placerat duis ultricies.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Purus gravida quis blandit turpis. Augue neque gravida in
                fermentum et sollicitudin ac orci. Et sollicitudin ac orci
                phasellus egestas. Elementum tempus egestas sed sed risus
                pretium quam vulputate. Interdum velit euismod in pellentesque
                massa placerat duis ultricies.
              </Text>
            </Grid>
          </Grid.Container>
        </Container>
        <Spacer y={2} />
      </Card>
      <Spacer y={2} />
      <Box
        css={{
          background: "#333333",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "100%",
        }}
        id="team"
      >
        <Team />
      </Box>

      <Spacer y={3} />
    </Box>
    <Box css={{ maxWidth: "100%" }}>
      <Contact />
    </Box>
  </div>
);
