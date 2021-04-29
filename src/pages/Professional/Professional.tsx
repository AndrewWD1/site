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


const LinkStyle: CSSProperties = {
  textDecoration: "none",
};

const Professional = () => (
  <Template>
    <Container style={ContainerStyle}>
      <h2>About Me</h2>
      <p>
        I'm a first year grad student in the Mathematics department at
        CU-Boulder. My math interests are generally in Topology. I'm also
        interested in Philosophy and Computer Science. I believe, as
        Poincar&eacute; put it, that "...the most interesting facts are those
        which may serve many times; these are the facts which have a chance of
        coming up again. We have been so fortunate as to be born in a world
        where there are such." That is why I have been drawn to mathematics,
        where the facts are the most general and most reusable.
      </p>
    </Container>

    <Container style={ContainerStyle}>
      <h2>Teaching</h2>
      <GeneralTable
        head={["Semester", "Course", "Sections"]}
        rows={[
          ["FALL 2020", "Calculus II TA (MATH-2300)", "003, 006, 009"],
          ["SPRING 2021", "Calculus I TA (MATH-2300)", "002, 003, 010"],
        ]}
      />
      <br />
      <div style={{ borderTop: "1px solid black" }}></div>
      <h2>Blog</h2>I have a{" "}
      <a href="https://andrewdoumont.netlify.app">blog.</a> It's filled
      primarily with half finished thoughts and ideas. I hope to write more
      about math, philosophy, and generally things happening in my life. It's
      built with Gatsby and hosted of Netlify.
      <br />
      <br />
      <div style={{ borderTop: "1px solid black" }}></div>
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
      <h2>Papers</h2>
      <a
        style={LinkStyle}
        href="https://github.com/AndrewWD1/Basic-Sheaf-Cohomology-Paper/blob/main/Paper/Sheaf_Cohomology_Intro.pdf"
      >
        Basic Sheaf Cohomology
      </a>{" "}
      <br />
      <br />
      <div style={{ borderTop: "1px solid black" }}></div>
      <h2>Research</h2>
      <ul>
        <li>
          <i>(Future)</i> Summer 2021 reasearch project on Topological Data
          Analysis
        </li>
      </ul>
    </Container>
  </Template>
);

export default Professional;
