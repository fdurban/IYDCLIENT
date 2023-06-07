import { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import UserComponent from "../../components/User/user"
import userService from "../../services/user.services"

const UserListPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])


    const loadUsers = () => {

        userService
            .getUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1>Hola soy UserListPage</h1>
            <hr />
            <Row>
                {/* TODO: DESACOPLAR USERSLIST */}
                {users.map(elm => {
                    return (
                        <UserComponent {...elm} key={elm._id} />
                    )
                })}
            </Row>
        </Container>
    )
}

export default UserListPage