import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Professional from "./pages/Professional/Professional";
import Personal from "./pages/Personal/Personal";

const App = () => (
  <div>
    <Router>
      <div>
        <Navbar
          id="Navbar"
          collapseOnSelect
          expand="lg"
          bg="secondary"
          variant="dark"
        >
          <Navbar.Brand href="home">Andrew Doumont</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="professional">Professional</Nav.Link>
              <Nav.Link href="personal">Personal</Nav.Link>
              <Nav.Link href="https://andrewdoumont.netlify.app">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/professional">
            <Professional />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
