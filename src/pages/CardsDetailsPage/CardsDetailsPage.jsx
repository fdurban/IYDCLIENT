import { useEffect, useState, useContext } from "react"
import { Container, Col } from "react-bootstrap"
import cardsService from "../../services/cards.services"
import { AuthContext } from './../../contexts/auth.context'
import CardMainContent from "../../components/CardMainContent/CardMainContent"
import { useParams } from "react-router-dom"

const CardDetailsPage = () => {

    const { id } = useParams()
    const [cards, setCards] = useState([])

    useEffect(() => {

        loadCardsById()
    }, [])

    const loadCardsById = () => {

        cardsService
            .getCardsById(id)
            .then(({ data }) => setCards(data))
            .catch(err => console.log(err))
    }

    return (

        <Container>
            <Col md={{ span: 4 }}>
                <h1>Card details</h1>
                <hr style={{ width: '40rem' }} />
                <CardMainContent cardInfoContent={cards} />
            </Col>
        </Container>
    )
}

export default CardDetailsPage