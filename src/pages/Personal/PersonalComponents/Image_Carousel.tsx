import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cascade from "../../../images/cascade.jpg";
import squamish from "../../../images/squamish.jpg";
import steilacoom from "../../../images/steilacoom.jpg";
import gns from "../../../images/GNS_December_2017.jpg";
import marmot from "../../../images/Marmot_Pass.jpg";
import baker from "../../../images/MtBaker_Skiing_2017.jpg";
import index from "../../../images/Index_winter.jpg";

const pictures = [
  ["Cascade Pass 2018", cascade, "First"],
  ["Squamish 2018", squamish, "Second"],
  ["Index Winter 2017", index, "Third"],
  ["Mount Baker SKiing 2017", baker, "Fourth"],
  ["Steilacoom, WA 2018", steilacoom, "Fifth"],
  ["Great Northern Slab 2017", gns, "Sixth"],
  ["Marmot Pass 2018", marmot, "Seventh"],
];

export const ImageCarousel = () => (
  <Carousel style={{ marginBottom: "1rem" }}>
    {pictures.map((x, i) => (
      <Carousel.Item key={`image-${i}`} interval={2000}>
        <img
          className="d-block w-100 rounded"
          src={x[1]}
          alt={`${x[2]} slide`}
        />
        <Carousel.Caption style={{ bottom: "unset", top: "20px" }}>
          <h3>{x[0]}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);
