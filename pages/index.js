import { Navbar, Link, Text, Image } from "@nextui-org/react";
import { Layout } from "./Layout.js";

export default function Home() {
  const collapseItems = ["About", "Events", "Contact"];

  return (
    <Layout>
      <Navbar shouldHideOnScroll variant="floating">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "100%",
            },
          }}
        >
          <Text b color="#E42024" size="25px">
            ASME x CRCE
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          activeColor="#333333"
          hideIn="xs"
          variant="highlight-solid"
          css={{
            color: "$primary",
          }}
        >
          <Navbar.Link href="#about">About</Navbar.Link>
          <Navbar.Link href="#events">Events</Navbar.Link>
          <Navbar.Link href="#team">Team</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        ></Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="#E42024"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#{item}"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
