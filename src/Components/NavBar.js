import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href='/'>CP-API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/Users'>Users</Nav.Link>
            <Nav.Link href='/Admin'>Admin</Nav.Link>
            <Nav.Link href='/Login'>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;
