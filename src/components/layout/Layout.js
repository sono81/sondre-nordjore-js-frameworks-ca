import React from "react";
import Contact from "../contact/Contact";
import HomePage from "../home/HomePage";
import GameDetails from "../home/GameDetails";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function Layout() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" className="mb-4">
        <Navbar.Brand as={NavLink} to="/">
          VideoGameDatabase
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" component={Contact} />
          <Route path="/games/:id" component={GameDetails} />
        </Switch>
      </main>
    </Router>
  );
}

export default Layout;
