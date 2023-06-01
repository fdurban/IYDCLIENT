import SubjectList from "../../components/SubjectList/SubjectList"
import CardList from '../../components/CardList/CardList'
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"



const ProfilePage = () => {

    // TODO: HACER LLAMADA EN MONTAJE A LA API PARA TRAER INFO DEL USER, NO EL CONTEXTO
    const { user } = useContext(AuthContext)

    return (
        <Container>
            <h1>Hello, <strong>{user.username}</strong>!</h1>
            <hr />
            <Row>
                {/* TODO: DESACOPLAR CARDSLIST */}
                {cards.map(elm => {
                    return (
                        <Col md={{ span: 4 }} key={elm._id}>
                            <CardsComponents {...elm} />
                        </Col>
                    )
                })}
            </Row>
            {/* <Row>
                <CardList />
            </Row> */}
        </Container>
    )
}

export default ProfilePage