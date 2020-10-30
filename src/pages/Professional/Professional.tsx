import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Professional = () => {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(width);

    let navbarHeight: any = document?.querySelector("#Navbar")?.clientHeight;

    setHeight(window.innerHeight - navbarHeight);

    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <Container
      style={{
        padding: "1rem",
        minHeight: `${height}px`,
      }}
      fluid
    >
      <Row>
        <Col>
          <Row>
            <div>
              I'm a first-year grad student in the Mathematics department at
              CU-Boulder. My math interests are generally in Algebra and
              Topology. I received my Bachelors degree in Mathematics from West
              Point in 2015 and started graduate school at CU in 2020.
              <Table>
                <thead>
                  <tr>
                    <th scope="col">Semester</th>
                    <th scope="col">Course</th>
                    <th scope="col">Sections</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fall 2020</td>
                    <td>Calculus II TA (MATH-2300)</td>
                    <td>003, 006, 009</td>
                  </tr>
                </tbody>
              </Table>
              <p className="text-container__title">
                {" "}
                Solutions to Math Textbook Problems
              </p>
              <p className="text-container__secondary">
                I was reviewing "A Book of Abstract Algebra" by Charles C.
                Pinter and positing solutions
                <a
                  className="text-container__link"
                  href="https://github.com/AndrewWD1/Math/tree/master/Practice_Problems/A_Book_Of_Abstract_Algebra"
                >
                  <strong>here.</strong>
                </a>
                This text can be found for free on the internet archive{" "}
                <a
                  className="text-container__link"
                  href="https://archive.org/details/charles-c-pinter-a-book-of-abstract-algebra/mode/2up"
                >
                  <strong>here.</strong>
                </a>{" "}
                Please feel free to make a pull request on github to add
                solutions. I think this could be a really valuable resource for
                self-learners.
              </p>
              <div className="text-container">
                <p className="text-container__title">Blog</p>
                <p className="text-container__secondary">
                  I am also starting a{" "}
                  <a
                    className="text-container__link"
                    href="https://andrewdoumont.com"
                  >
                    blog
                  </a>{" "}
                  that I hope to be more active with in the coming months. It'll
                  touch on topics of math, programming, and other hobies of
                  mine. It's built with Gatsby and hosted of Netlify.
                </p>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Professional;
