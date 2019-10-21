import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                <Navbar expand="lg" variant="light" className="nav ">
                    <Navbar.Brand>Richard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">About Me</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <Nav.Link href="#link">Projects</Nav.Link>
                            <Button variant="primary" lg className="pt-btn">Portfolio</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </Container>
                
            </div>
        );
    }
}

export default Header;
