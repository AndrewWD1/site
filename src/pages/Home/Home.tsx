import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/esm/Image";
import { Template } from "../Template/Template";
import tetonPass from "../../images/teton_pass.jpg";

const Home = () => {
  useEffect(() => {
    console.log("run");
    fetch("https://api.ipify.org?format=json")
      .then((r) => r.json())
      .then((r) => {
        r.site = "personal-site";
        fetch(
          "https://whirlwindlightblueinteger.andrewdoumont.repl.co/target",
          {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(r),
          }
        );
      });
  }, []);

  return (
    <Template>
      <Container
        style={{
          minHeight: "95%",
          padding: "1rem",
        }}
      >
        <h1>Welcome</h1>
        <div>
          I'm a first year graduate student in the math department at CU-Boulder.
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
            <div style={{ fontSize: "large" }}>
              <a href="https://github.com/andrewwd1">Github</a>
            </div>

            <div style={{ fontSize: "large" }}>
              <a href="https://www.linkedin.com/in/andrewwd1/">LinkedIn</a>
            </div>
            <div style={{ fontSize: "large" }}>
              <a href="https://github.com/AndrewWD1/CV/blob/main/Doumont_CV.pdf">
                CV
              </a>
            </div>
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
};

export default Home;
