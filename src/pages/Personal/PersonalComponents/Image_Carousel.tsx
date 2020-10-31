import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cascade from "../../../images/cascade.jpg";
import squamish from "../../../images/squamish.jpg";
import steilacoom from "../../../images/steilacoom.jpg";
import gns from "../../../images/GNS_December_2017.jpg";
import marmot from "../../../images/Marmot_Pass.jpg";
import baker from "../../../images/MtBaker_Skiing_2017.jpg";
import index from "../../../images/Index_winter.jpg";

export const ImageCarousel = () => (
  <Carousel style={{ marginBottom: "1rem" }}>
    <Carousel.Item interval={2000}>
      <img className="d-block w-100 rounded" src={cascade} alt="First slide" />
      <Carousel.Caption style={{ bottom: "unset", top: "20px" }}>
        <h3>Cascade Pass 2018</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100 rounded"
        src={squamish}
        alt="Second slide"
      />
      <Carousel.Caption style={{ bottom: "unset", top: "20px" }}>
        <h3>Squamish 2018</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img className="d-block w-100 rounded" src={index} alt="Sixth slide" />
      <Carousel.Caption style={{ bottom: "unset", top: "20px" }}>
        <h3>Index Winter 2017</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img className="d-block w-100 rounded" src={baker} alt="Third slide" />
      <Carousel.Caption style={{ bottom: "unset", top: "20px" }}>
        <h3>Mount Baker Skiing 2017</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100 rounded"
        src={steilacoom}
        alt="Fourth slide"
      />
      <Carousel.Caption style={{ bottom: "unset", top: "20px" }}>
        <h3>Steilacoom, WA 2017</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img className="d-block w-100 rounded" src={gns} alt="Fifth slide" />
      <Carousel.Caption style={{ bottom: "unset", top: "20px" }}>
        <h3>Great Northern Slab 2017</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img className="d-block w-100 rounded" src={marmot} alt="Sixth slide" />
      <Carousel.Caption style={{ bottom: "unset", top: "20px" }}>
        <h3>Marmot Pass 2018</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
