import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ImageCarousel } from "../../components/image_carousel/Image_Carousel";
import { MusicTable, BookTable } from "./PersonalComponents/personal_tables";

const Personal = () => {
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
              <Container>
                <h1>Personal</h1>
                <p>
                  My primary personal interests are spending time with my wife
                  Sierra, rock-climbing, skiing, hiking, running, and music. I
                  enjoy spending time outdoors and really cherished the 3 years
                  Sierra and I got to spend in the Pacific Northwest while I was
                  stationed at Joint Base Lewis-McChord. Sierra and I are
                  incredibly excited to be living in Colorado for the forseeable
                  future!
                </p>
              </Container>
            </Row>
            <Row>
              <Container>
                <ImageCarousel />
              </Container>
            </Row>
          </Col>
          <Col>
            <Row>
              <Container>
                <h1 style={{ textAlign: "center" }}>Current Favorite Songs</h1>
                <MusicTable />
              </Container>
            </Row>
            <Row className="row align-items-center">
              <Container>
                <h1 style={{ textAlign: "center" }}>Current Favorite Books</h1>
                <BookTable />
              </Container>
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
          <Container>
            <h1>Welcome</h1>
            <p>
              My primary personal interests are spending time with my wife
              Sierra, rock-climbing, skiing, hiking, running, and music. I enjoy
              spending time outdoors and really cherished the 3 years Sierra and
              I got to spend in the Pacific Northwest while I was stationed at
              Joint Base Lewis-McChord. Sierra and I are incredibly excited to
              be living in Colorado for the forseeable future!
            </p>
          </Container>
          <Container>
            <MusicTable />
          </Container>
          <Container>
            <BookTable />
          </Container>
          <Container style={{ marginBottom: "1rem" }}>
            <ImageCarousel />
          </Container>
        </Row>
      </Container>
    );
  }
};

export default Personal;
