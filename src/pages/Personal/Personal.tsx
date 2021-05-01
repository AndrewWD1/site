import React, { CSSProperties } from "react";
import { ImageCarousel } from "./PersonalComponents/Image_Carousel";
import { MusicTable, BookTable } from "./PersonalComponents/personal_tables";
import { Template } from "../Template/Template";
import { Container } from "react-bootstrap";

const ContainerStyle: CSSProperties = {
  border: "2px solid black",
  borderRadius: "3px",
  marginTop: "1rem",
  marginBottom: "1rem",
};

const Personal = () => (
  <Template>
    <div>
      <h1>Personal</h1>
      <p>
        I'm an avid skier, rock climber, and hiker. I post about some adventures
        on my <a href="https://andrewdoumont.netlify.app/">blog</a>.
      </p>
    </div>

    <Container style={ContainerStyle}>
      <h2 style={{ textAlign: "center" }}>Current Favorite Songs</h2>
      <MusicTable />
    </Container>

    <ImageCarousel />

    <Container style={ContainerStyle}>
      <h2 style={{ textAlign: "center" }}>Current Favorite Books</h2>
      <BookTable />
    </Container>
  </Template>
);

export default Personal;
