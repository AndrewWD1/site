import React from "react";
import { ImageCarousel } from "./PersonalComponents/Image_Carousel";
import { MusicTable, BookTable } from "./PersonalComponents/personal_tables";
import { Template } from "../Template/Template";

const Personal = () => (
  <Template>
    <>
      <h1>Personal</h1>
      <p>
        My primary personal interests are spending time with my wife Sierra,
        rock-climbing, skiing, hiking, running, and music. I enjoy spending time
        outdoors and really cherished the 3 years Sierra and I got to spend in
        the Pacific Northwest while I was stationed at Joint Base Lewis-McChord.
        Sierra and I are incredibly excited to be living in Colorado for the
        forseeable future!
      </p>
    </>
    <ImageCarousel />
    <>
      <h1 style={{ textAlign: "center" }}>Current Favorite Songs</h1>
      <MusicTable />
    </>
    <>
      <h1 style={{ textAlign: "center" }}>Current Favorite Books</h1>
      <BookTable />
    </>
  </Template>
);

export default Personal;
