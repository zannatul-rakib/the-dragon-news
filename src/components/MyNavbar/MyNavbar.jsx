import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {FaUserCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
      <Container>
       <Link to="/" className='text-decoration-none text-dark'>Dragon News</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className='text-decoration-none me-2 text-dark' to="/">Home</Link>
            <Link className='text-decoration-none me-2 text-dark' to="/about">About</Link>
            <Link className='text-decoration-none me-2 text-dark' to="/carrier"> Carrier</Link>
          </Nav>
          <Nav>
           <button className='btn btn-secondary me-2'><FaUserCircle/></button>
           <Link to="/login"><button className='btn btn-secondary'>Login</button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default MyNavbar;