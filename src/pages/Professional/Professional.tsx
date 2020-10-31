import React from "react";
import { GeneralTable } from "../../components/Table/table";
import { Template } from "../Template/Template";

const Professional = () => (
  <Template>
    <>
      <h1>Personal</h1>
      <p>
        I'm a first-year grad student in the Mathematics department at
        CU-Boulder. My math interests are generally in Algebra and Topology. I
        received my Bachelors degree in Mathematics from West Point in 2015 and
        started graduate school at CU in 2020.
      </p>
    </>
    <>
      <h1>Teaching</h1>
      <GeneralTable
        head={["Semester", "Course", "Sections"]}
        rows={[["FALL 2020", "Calculus II TA (MATH-2300)", "003, 006, 009"]]}
      />
    </>
    <>
      <h1>Solutions to Math Textbook Problems</h1>I was reviewing "A Book of
      Abstract Algebra" by Charles C. Pinter and positing solutions{" "}
      <a href="https://github.com/AndrewWD1/Math/tree/master/Practice_Problems/A_Book_Of_Abstract_Algebra">
        <strong>here.</strong>
      </a>
      This text can be found for free on the internet archive{" "}
      <a href="https://archive.org/details/charles-c-pinter-a-book-of-abstract-algebra/mode/2up">
        <strong>here.</strong>
      </a>{" "}
      Please feel free to make a pull request on github to add solutions. I
      think this could be a really valuable resource for self-learners.
    </>
    <>
      <h1>Blog</h1>I am also starting a{" "}
      <a href="https://andrewdoumont.netlify.app">blog</a> that I hope to be
      more active with in the coming months. It'll touch on topics of math,
      programming, and other hobies of mine. It's built with Gatsby and hosted
      of Netlify.
    </>
  </Template>
);

export default Professional;
