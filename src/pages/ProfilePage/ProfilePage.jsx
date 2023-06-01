import SubjectList from "../../components/SubjectList/SubjectList"
import CardList from '../../components/CardList/CardList'
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"



const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <h1>Hello, <strong>{user.username}</strong>!</h1>
            <hr />
            <Row>
                <SubjectList />
            </Row>
            {/* <Row>
                <CardList />
            </Row> */}
        </Container>
    )
}

export default ProfilePage