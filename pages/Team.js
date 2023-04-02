import { Card, Col, Grid, Text, Spacer, Tooltip } from "@nextui-org/react";

export default function Team() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <Grid.Container gap={2} justify="center" css={{ background: "#333333", "@xsMax": { gap: "1" }, }}>
      <Grid.Container gap={2} justify="center">
        <Grid xs={3}>
          <Text h2 id="team" css={{ textAlign: "center", color: "#E42024" }}>
            Our Team Members
          </Text>
        </Grid>
      </Grid.Container>
      <Grid.Container gap={3} justify="space-evenly">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            {/* <Tooltip content={item.title}> */}
            <Card isPressable isHoverable size={8}>
              <Card.Image
                src={"https://nextui.org" + item.img}
                objectFit="cover"
                width="100%"
                height={400}
                alt={item.title}
              />
              <Card.Footer css={{ position: "absolute", zIndex: 1, bottom: 6 }}>
                <Col>
                  <Text
                    size={15}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffff"
                    css={{ textAlign: "center" }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    size={15}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffff"
                    css={{ textAlign: "center" }}
                  >
                    {item.price}
                  </Text>
                </Col>
              </Card.Footer>
            </Card>
            {/* </Tooltip> */}
          </Grid>
        ))}
      </Grid.Container>
    </Grid.Container>
  );
}
