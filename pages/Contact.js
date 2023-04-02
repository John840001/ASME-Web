import { Container, Grid, Link, Spacer, Text } from "@nextui-org/react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Contact() {
  return (
    <Container
      css={{
        textAlign: "center",
        bgBlur: "#111111",
        maxWidth: "100%",
        padding: "40px 450px",
      }}
    >
      <Text
        h2
        weight="bold"
        id="contact"
        css={{ color: "#E42024", textAlign: "center" }}
      >
        Contact Us
      </Text>
      <Spacer y={1} />
      <Link href="mailto:jonathanduarte840@gmail.com">
        <Text h3 css={{ color: "#E42024", textAlign: "center" }}>
          asme.crce@gmail.com
        </Text>
      </Link>
      <Grid.Container gap={2} justify="center">
        <Grid xs={4} css={{ textAlign: "center", justifyContent: "center" }}>
          <Link href="#">
            <SiFacebook
              css={{ color: "#E4405F", textAlign: "center" }}
              size={40}
            />
            <Spacer y={1} />
            <Text
              h3
              css={{
                color: "#E42024",
                textAlign: "center",
                paddingTop: "8px",
              }}
            >
              Facebook
            </Text>
          </Link>
        </Grid>
        <Grid xs={4} css={{ textAlign: "center", justifyContent: "center" }}>
          <Link href="#">
            <SiLinkedin
              css={{ color: "#E42024", textAlign: "center" }}
              size={40}
            />
            <Spacer y={1} />
            <Text
              h3
              css={{
                color: "#E42024",
                textAlign: "center",
                paddingTop: "8px",
              }}
            >
              Linkedin
            </Text>
          </Link>
        </Grid>
        <Grid xs={4} css={{ textAlign: "center", justifyContent: "center" }}>
          <Link href="#">
            <SiInstagram
              css={{ color: "#E42024", textAlign: "center" }}
              size={40}
            />
            <Spacer y={1} />
            <Text
              h3
              css={{
                color: "#E42024",
                textAlign: "center",
                paddingTop: "8px",
              }}
            >
              Instagram
            </Text>
          </Link>
        </Grid>
      </Grid.Container>
    </Container>
  );
}
