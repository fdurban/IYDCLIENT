import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import { ThemeContext } from "../../contexts/theme.contex"

const Navigation = () => {

    const { theme, SwitchTheme } = useContext(ThemeContext)

    const variant = theme === "ligth" ? 'dark' : 'ligth'

    const { user, logout } = useContext(AuthContext)


    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='mb-5'>
            <Container>
                <Navbar.Brand href="#home">IYD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="span">
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link to="/cards">Galery</Link>
                        </Nav.Link>
                        {
                            user
                                ?
                                <>
                                    &&
                                    <Nav.Link as="span" onClick={logout}>Log off</Nav.Link>
                                    <Nav.Link as="span">
                                        <Link to="/profile">Hello {user.username}</Link>
                                    </Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as="span">
                                        <Link to="/signup">Sing Up</Link>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <Link to="/login">Log In</Link>
                                    </Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation