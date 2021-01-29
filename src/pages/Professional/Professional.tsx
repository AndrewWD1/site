import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";
import { GeneralTable } from "../../components/Table/table";
import { Template } from "../Template/Template";

const ContainerStyle: CSSProperties = {
  minHeight: "45%",
  border: "1px solid black",
  borderRadius: "3px",
  padding: "1rem",
};

const Professional = () => (
  <Template>
    <Container style={ContainerStyle}>
      <h2>Professional</h2>
      <p>
        I'm a first year grad student in the Mathematics department at
        CU-Boulder. My math interests are generally in Topology. I'm
        also interested in Computer Science and Philosophy.
      </p>
    </Container>

    <Container style={ContainerStyle}>
      <h2>Teaching</h2>
      <GeneralTable
        head={["Semester", "Course", "Sections"]}
        rows={[
          ["FALL 2020", "Calculus II TA (MATH-2300)", "003, 006, 009"],
          ["SPRING 2021", "Calculus I TA (MATH-2300)", ""],
        ]}
      />
      <br />
      <div style={{ borderTop: "1px solid black" }}></div>
      <br />
      <h2>Tutoring</h2>
      <ul>
        <li>I can tutor elementary through undergraduate mathematics.</li>
        <li>My rate is $30/hour.</li>
        <li>
          My preferance is to tutor evenings Sunday-Friday, but we can work out
          something mutually beneficial.
        </li>
        <li>
          Contact me at <strong>andrew.doumont@colorado.edu</strong>
        </li>
      </ul>
    </Container>

    <Container style={ContainerStyle}>
      <h2>Blog</h2>I have a{" "}
      <a href="https://andrewdoumont.netlify.app">blog.</a> It's filled with
      many half finished thoughts and ideas. I hope to write more about my
      interests of math, philosophy, and generally things happening in my life.
      It's built with Gatsby and hosted of Netlify.
    </Container>
  </Template>
);

export default Professional;
