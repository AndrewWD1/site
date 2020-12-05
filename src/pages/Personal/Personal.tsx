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
        My primary personal interests are spending time with my wife Sierra,
        rock-climbing, skiing, hiking, running, and music. I enjoy spending time
        outdoors and really cherished the 3 years Sierra and I got to spend in
        the Pacific Northwest while I was stationed at Joint Base Lewis-McChord.
        Sierra and I are incredibly excited to be living in Colorado for the
        forseeable future!
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
