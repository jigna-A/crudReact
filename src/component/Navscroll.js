import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Navscroll() {
  return (
    <>
          <Navbar className='bg-dark ' expand="lg">
      <Container fluid>
        <Navbar.Brand className='text-light p-2' href="/">Student Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-light' href="/">Home</Nav.Link>
          
            





         

           
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
  )
}

export default Navscroll