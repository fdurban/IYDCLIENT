import CardsComponents from "../Card/CardComponent"
import cardsService from '../../services/cards.services'
import { Col } from 'react-bootstrap'
import { useEffect, useState } from "react"
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { AuthContext } from './../../contexts/auth.context'


const SubjectList = () => {

    const { user } = useContext(AuthContext)
    const [cards, setCards] = useState([])

    useEffect(() => {
        loadCardsBySubject()
    }, [])

    const loadCardsBySubject = () => {
        cardsService
            .getCardsBySubject(cards.subject)
            .then(({ data }) => setCards(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <h3>This is your subject list</h3>
            <Link to={'/MATH'}> <strong>Matemati-cards</strong> (Matematics)</Link>
            <Link to={'/ANATOMY'}><strong>Card-nathomy</strong> (Anathomy)</Link>
            <Link to={'/BIOLOGY'}><strong>Biology</strong></Link>
            <Link to={'/CHEMISTRY'}><strong>Chemistry</strong></Link>
            <Link to={'/GEOGRAPHY'}><strong>Geo-card-phy</strong> (Geography)</Link>
            <Link to={'/HISTORY'}><strong>History</strong></Link>
            <Link to={'/LAW'}><strong>Law</strong></Link>
            <Link to={'/MUSIC'}><strong>Music</strong></Link>
            <Link to={'/PROGRAMING'}><strong>Pro-card-ming</strong> (Programing)</Link>
            <Link to={'/PHISICS'}><strong>Phisics</strong></Link>
            <Link to={'/OTHER'}><strong>Other</strong></Link>
            {cards.map(elm => (
                <Col md={{ span: 4 }} key={elm.subject}>
                    <CardsComponents {...elm} />
                </Col>
            ))}
        </>
    )
}

export default SubjectList