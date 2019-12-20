import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <>
      <Container>
        <Navbar
          className="text-center"
          bg="primary"
          variant="dark"
          style={navBarStyle}
        >
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/songlist">Song List</Nav.Link>
            <Nav.Link href="/songs/new">Create Song</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
};

const navBarStyle = {
  padding: "20px"
};

export default NavBar;
