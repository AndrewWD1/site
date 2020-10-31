import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

interface IProps {
  children: React.ReactElement[];
}

export const Template: React.FC<IProps> = ({ children }) => {
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

  if (width > 1100) {
    return (
      <Container
        style={{
          minHeight: `${height}px`,
          display: "flex",
        }}
        fluid
      >
        <Container
          fluid
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          {children[0]}
          {children.length > 2 ? children[2] : null}
        </Container>
        <Container
          fluid
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          {children[1]}
          {children.length > 2 ? children[3] : null}
        </Container>
      </Container>
    );
  } else {
    return (
      <Container
        style={{
          height: `${height}px`,
          display: "flex",
          flexDirection: "column",
        }}
        fluid
      >
        <div style={{ margin: ".5rem" }}>{children[0]}</div>
        {children.length > 2 ? (
          <>
            <div style={{ margin: ".5rem" }}>{children[2]}</div>
            <div style={{ margin: ".5rem" }}>{children[3]}</div>
          </>
        ) : null}
        <div style={{ margin: ".5rem" }}>{children[1]}</div>
      </Container>
    );
  }
};
