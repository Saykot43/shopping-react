import React from 'react';
import './header.css'
import {  Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Header = (props) => {
    return (
        <div className='container'>
            <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Nav.Link href="#">Cart<sup>{props.count}</sup></Nav.Link>
                    <Nav.Link href="#">Login</Nav.Link>
                    </Nav>
                    
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;