import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {FaUserCircle} from 'react-icons/fa';

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#carrier">Carrier</Nav.Link>
          </Nav>
          <Nav>
           <button className='btn btn-secondary me-2'><FaUserCircle/></button>
           <button className='btn btn-secondary'>Login</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default MyNavbar;