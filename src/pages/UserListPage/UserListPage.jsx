import { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import UserComponent from "../../components/User/user"
import userService from "../../services/user.services"
import USearch from '../../components/searchComponent/searchComponent'

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

    return (
        <Container>
            <h1>Hola soy UserListPage</h1>
            <hr />
            <USearch filteredUser={filteredUser} />
            <Row>
                {filteredUsers.map(elm => {
                    return (
                        <UserComponent {...elm} key={elm._id} />
                    )
                })}
            </Row>
        </Container>
    )
}

export default UserListPage