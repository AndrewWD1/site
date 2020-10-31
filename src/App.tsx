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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/professional">
            <Professional />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>
          <Route path="/">
            {/*This has to go last because it would match with anything */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
