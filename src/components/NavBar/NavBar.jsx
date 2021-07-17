import React from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navMenu" >
            <Navbar.Brand href="#home" className="brand">Peter's Clothing Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <CartWidget />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">News</Nav.Link>
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Pants</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Shoes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Accesories</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavBar
