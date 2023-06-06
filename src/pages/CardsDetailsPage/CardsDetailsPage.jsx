import { useEffect, useState, useContext } from "react"
import { Container, Col } from "react-bootstrap"
import cardsService from "../../services/cards.services"
import { AuthContext } from './../../contexts/auth.context'
import CardMainContent from "../../components/CardMainContent/CardMainContent"
import { useParams } from "react-router-dom"

const CardDetailsPage = () => {

    const { id } = useParams()
    const [card, setCard] = useState([])

    useEffect(() => {
        loadCardById()
    }, [])

    const loadCardById = () => {

        cardsService
            .getCardById(id)
            .then(({ data }) => setCard(data))
            .catch(err => console.log(err))
    }

    return (

        <Container>
            <Col md={{ span: 4 }}>
                <h1>Card details</h1>
                <CardMainContent cardInfoContent={card} />
            </Col>
        </Container>
    )
}

export default CardDetailsPage