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

        <Navbar className="bg-body-tertiary" sticky="top">
            <Navbar.Brand href="/" className="navbarbrand">IYD</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link as="span">
                    {
                        user ?
                            <>
                                <Link to="/getallusers" className="users">Users</Link>
                            </>
                            :
                            null
                    }
                </Nav.Link>
                {
                    user ?
                        <>
                            <span className="logout-link" onClick={logoutUser}>Log out</span>
                            <Nav.Link as="span">
                                <Link to={`/profile/user/${user._id}`} className="hellouser">Hello {user.username}</Link>
                            </Nav.Link>
                        </>
                        :
                        <>
                            <Nav.Link as="span">
                                <Link to="/signup" className="navbarsignupbutton">Sing Up</Link>
                            </Nav.Link>
                            <Nav.Link as="span">
                                <Link to="/login" className="navbarloginbutton">Log In</Link>
                            </Nav.Link>
                        </>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation