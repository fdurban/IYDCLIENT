import CardsComponents from "../Card/CardComponent"
import cardsService from '../../services/cards.services'
import { Col } from 'react-bootstrap'
import { useEffect, useState } from "react"
import { useContext } from "react"
import { AuthContext } from './../../contexts/auth.context'


const CardList = () => {
    const { user } = useContext(AuthContext)
    const [cards, setCards] = useState([])

    useEffect(() => {
        loadCardsByOwner()
    }, [])

    const loadCardsByOwner = () => {
        
        cardsService
            .getCardsByOwner(user._id)
            .then(({ data }) => setCards(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            {cards.map(elm => (
                <Col md={{ span: 4 }} key={elm._id}>
                    <CardsComponents {...elm} />
                </Col>
            ))}
        </>
    )
}

export default CardList
