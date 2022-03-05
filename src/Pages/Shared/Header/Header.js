import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">SUNSTORE</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link to="/home#home">Home</Nav.Link>
            <Nav.Link to="/collections">Collections</Nav.Link>
            <Nav.Link to="/contact">Contact</Nav.Link>

            <Navbar.Text>
              {/* Signed in as: <a href="#login">{user?.displayName}</a> */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
