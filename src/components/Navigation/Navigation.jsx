import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">IYD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="span">
                            <Link to="/">Inicio</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link to="/galeria">Galeria</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation