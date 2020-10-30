import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface IProps {
  children: React.ReactElement[];
}

export const Template: React.FC<IProps> = ({ children }) => {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(width);
    let navbarHeight: any = document?.querySelector("#Navbar")?.clientHeight;

    setHeight(window.innerHeight - navbarHeight);
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  if (width > 1100) {
    return (
      <Container
        style={{
          padding: "1rem",
          minHeight: `${height}px`,
        }}
        fluid
      >
        <Row>
          <Col>
            <Row>
              <Container>{children[0]}</Container>
            </Row>
            <Row>
              <Container>{children[1]}</Container>
            </Row>
          </Col>
          <Col>
            <Row>
              <Container>{children[2]}</Container>
            </Row>
            <Row>
              <Container>{children[3]}</Container>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container
        style={{
          padding: "1rem",
          height: `${height}px`,
        }}
        fluid
      >
        <Row>
          <Container>{children[0]}</Container>
          <Container>{children[1]}</Container>
          <Container>{children[2]}</Container>
          <Container>{children[3]}</Container>
        </Row>
      </Container>
    );
  }
};
