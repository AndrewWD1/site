import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cascade from "../../images/cascade.jpg";
import baker from "../../images/baker.jpg";
import squamish from "../../images/squamish.jpg";

export const ImageCarousel = () => (
  <Carousel>
    <Carousel.Item interval={2000}>
      <img className="d-block w-100 rounded" src={cascade} alt="First slide" />
      <Carousel.Caption style={{ bottom: "unset", top: "20px" }}>
        <h3>Cascade Pass October 2018</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img className="d-block w-100 rounded" src={baker} alt="Third slide" />
      <Carousel.Caption style={{ bottom: "unset", top: "20px" }}>
        <h3>Mt. Baker</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img className="d-block w-100 rounded" src={squamish} alt="Third slide" />
      <Carousel.Caption style={{ bottom: "unset", top: "20px" }}>
        <h3>Squamish July 2018</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
