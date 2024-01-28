import { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import UserComponent from "../../components/User/userComponent"
import userService from "../../services/user.services"
import USearch from '../../components/searchComponent/searchComponent'
import "./UserListPage.css"
const UserListPage = () => {

    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])


    const loadUsers = () => {

        userService
            .getUsers()
            .then(({ data }) => {
                setUsers(data)
                setFilteredUsers(data)
            })
            .catch(err => console.log(err))
    }

    const filteredUser = (query) => {
        const filteredUsers = users.filter((elm) =>
            elm.username.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredUsers(filteredUsers)
    }
    console.log(filteredUsers)

    return (
        <section className="userlistpage">
            <Container>
                <USearch filteredUser={filteredUser} />
                <Row>
                    {filteredUsers.map(elm => (
                        <Col md={4} key={elm._id}>
                            <UserComponent {...elm} subtitle={elm.description} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

    )
}

export default UserListPage