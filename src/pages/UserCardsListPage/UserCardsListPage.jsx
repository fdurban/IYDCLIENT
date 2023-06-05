import { useContext, useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import cardsService from "../../services/cards.services"
import CardsComponents from "../../components/Card/CardComponent"
import { AuthContext } from "../../contexts/auth.context"
import { useParams } from "react-router-dom"


const CardsListPage = () => {


    const { user } = useContext(AuthContext)

    const { subject, owner } = useParams()

    const [cards, setCards] = useState([])

    useEffect(() => {

        loadCards()
    }, [])


    const loadCards = () => {
        cardsService
            .getCards()
            .then(({ data }) => {
                if (subject) {
                    const filteredCards = data.filter((card) => card.subject === subject)
                    setCards(filteredCards)
                } else {
                    setCards(data)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1>Hola soy UserCardsListPage</h1>
            <div className="d-grid mt-3">
                <Button variant="dark" type="submit">Create Card</Button>
            </div>
            <hr />
            <Row>
                {cards.map(elm => {
                    const isOwner = elm.owner === user._id
                    if (isOwner) {
                        return (
                            <Col md={{ span: 4 }} key={elm._id}>
                                <CardsComponents cardInfo={elm} />
                            </Col>
                        )
                    }
                })}
            </Row>
        </Container>
    )
}

export default CardsListPage