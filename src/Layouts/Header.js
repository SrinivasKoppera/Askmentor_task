import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function ColorSchemesExample() {
  return (
    <>
       
      <Navbar className='navbar' expand="lg">
        <Container>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='navlink '>
              <Nav.Link className='link' href="/">HOME</Nav.Link>
              <Nav.Link className='link' href="images">IMAGES</Nav.Link>
              <Nav.Link className='link' href="videos">VIDOES</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;