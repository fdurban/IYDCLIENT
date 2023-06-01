import { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import cardsService from "../../services/cards.services"
import CardsComponents from "../../components/Card/CardComponent"


const CardsListPage = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        // TODO: DESACOPLAR EFECTOS DE LLAMADA INICIAL A LA API
        loadCards()
    }, [])

    const loadCards = () => {
        cardsService
            .getCards()
            .then(({ data }) => setCards(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1>Hola soy CardsListPage</h1>
            <hr />
            <Row>
                {cards.map(elm => {
                    return (
                        <Col md={{ span: 4 }} key={elm._id}>
                            <CardsComponents cardInfo={elm} showFullInfo={false} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default CardsListPage