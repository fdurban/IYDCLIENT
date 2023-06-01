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
            .then(({ data }) => {
                const filteredCards = data.filter((card) => card.owner === user)
                setCards(filteredCards)
                console.log(filteredCards)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h3>This is your subject list</h3>
            <Link to={'/cards/subject/maths/:id'}> <strong>Matemati-cards</strong> (Matematics)</Link>
            <Link to={'/cards/subject/anatomy/:id'}><strong>Card-nathomy</strong> (Anathomy)</Link>
            <Link to={'/cards/subject/biology/:id'}><strong>Biology</strong></Link>
            <Link to={'/cards/subject/chemistry/:id'}><strong>Chemistry</strong></Link>
            <Link to={'/cards/subject/geografy/:id'}><strong>Geo-card-phy</strong> (Geography)</Link>
            <Link to={'/cards/subject/history/:id'}><strong>History</strong></Link>
            <Link to={'/cards/subject/law/:id'}><strong>Law</strong></Link>
            <Link to={'/cards/subject/music/:id'}><strong>Music</strong></Link>
            <Link to={'/cards/subject/programing/:id'}><strong>Pro-card-ming</strong> (Programing)</Link>
            <Link to={'/cards/subject/physics/:id'}><strong>Phisics</strong></Link>
            <Link to={'/cards/subject/others/:id'}><strong>Other</strong></Link>
            {/* {cards.map(elm => (
                <Col md={{ span: 4 }} key={elm.subject}>
                    <CardsComponents {...elm} />
                </Col>
            ))} */}
        </>
    )
}

export default SubjectList