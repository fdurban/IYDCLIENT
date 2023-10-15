import { Navbar, Nav, Container } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import { ThemeContext } from "../../contexts/theme.contex"
import "./Navigation.css"

const Navigation = () => {

    const { theme, SwitchTheme } = useContext(ThemeContext)
    const { user, logout } = useContext(AuthContext)

    const navigate = useNavigate()

    const logoutUser = () => {
        logout()
        navigate('/login')
    }

    return (
        <Navbar sticky='top' expand="lg" className='mb-5' >
            <Container>
                <Navbar.Brand href="/">IYD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="span">
                            <Link to="/getAllUsers">Users</Link>
                        </Nav.Link>
                        {
                            user
                                ?
                                <>
                                    &&
                                    {/* <Nav.Link as="span" to={`/login`} onClick={logout}>Log out</Nav.Link> */}
                                    <span className="nav-link" onClick={logoutUser}>Log out</span>
                                    <Nav.Link as="span">
                                        <Link to={`/profile/user/${user._id}`}>Hello {user.username}</Link>
                                        {/* <img src={user?.avatar} alt="avatar" /> */}
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