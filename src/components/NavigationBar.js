import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components
import { Link } from 'react-router-dom';

const NavigationBar = () => {
 return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/playlist">Playlist</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
 );
};

export default NavigationBar;