import { useContext } from "react"
import { AuthContext } from './../../contexts/auth.context'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import CardsComponents from '../../components/Card/CardComponent'
import { useEffect, useState } from "react"
import cardsService from "../../services/cards.services"


const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [cards, setCards] = useState([])

    useEffect(() => {
        cardsService
            .getCardsByOwner(user._id)
            .then(({ data }) => setCards(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <h1>Hello, {user.username}!</h1>
            <hr />
            <Row>
                {cards.map(elm => {
                    return (
                        <Col md={{ span: 4 }} key={elm._id}>
                            <CardsComponents {...elm} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default ProfilePage