import React from 'react'
import {Navbar, Container,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/Home">Home</Nav.Link>
      <Nav.Link as={Link} to="/Register">register</Nav.Link>
      <Nav.Link as={Link} to="/Login">login</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navigation