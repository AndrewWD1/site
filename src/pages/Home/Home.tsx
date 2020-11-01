import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/esm/Image";
import { Template } from "../Template/Template";
import tetonPass from "../../images/teton_pass.jpg";

const Home = () => (
  <Template>
    <Container
      style={{
        minHeight: "95%",
        padding: "1rem",
      }}
    >
      <h1>Welcome</h1>
      <div>
        I'm a first year graduate student in the math department at CU-Boulder
        interested in Topology and Algebra.
      </div>
      <Container
        style={{
          minHeight: "45%",
          border: "1px solid black",
          borderRadius: "3px",
          padding: "1rem",
          marginTop: "1rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>Contact Info</h3>
        <div>
          <div style={{ fontSize: "large" }}>andrew.doumont@colorado.edu</div>
          <div style={{ fontSize: "large" }}>andrew.doumont@gmail.com</div>
          <div style={{ fontSize: "large" }}>
            <a href="https://github.com/andrewwd1">Github</a>
          </div>

          <div style={{ fontSize: "large" }}>
            <a href="https://www.linkedin.com/in/andrewwd1/">LinkedIn</a>
          </div>
          {/* <div style={{ fontSize: "large" }}>
            <a href="https://andrewdoumont.com">CV</a>
          </div> */}
        </div>
      </Container>
    </Container>
    <Container
      style={{
        minHeight: "95%",
        padding: "1rem",
      }}
    >
      <Image
        fluid
        style={{ border: ".1px solid black" }}
        className="rounded"
        src={tetonPass}
      />
    </Container>
  </Template>
);

export default Home;
