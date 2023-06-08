import CardsComponents from "../Card/CardComponent"
import cardsService from '../../services/cards.services'
import { Col } from 'react-bootstrap'
import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import userService from "../../services/user.services"

const SubjectList = () => {

    const [cards, setCards] = useState([])

    const [userdata, setUserdata] = useState({})

    const { user_id } = useParams()

    useEffect(() => {
        loadCardsBySubject()
        loadUserData()
    }, [])

    const loadCardsBySubject = () => {
        cardsService
            .getCardsBySubject(cards.subject)
            .then(({ data }) => setCards(data))
            .catch(err => console.log(err))
    }

    const loadUserData = () => {
        userService
            .getUserById(user_id)
            .then(({ data }) => setUserdata(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <p>Estas cartas pertenecen a <strong>{userdata.username}</strong></p>
            <Link to={`/subject/MATH/user/${user_id}`}><strong>Matemati-cards</strong> (Matematics)</Link>
            <Link to={`/subject/ANATOMY/user/${user_id}`}><strong>Card-nathomy</strong> (Anathomy)</Link>
            <Link to={`/subject/BIOLOGY/user/${user_id}`}><strong>Biology</strong></Link>
            <Link to={`/subject/CHEMISTRY/user/${user_id}`}><strong>Chemistry</strong></Link>
            <Link to={`/subject/GEOGRAPHY/user/${user_id}`}><strong>Geo-card-phy</strong> (Geography)</Link>
            <Link to={`/subject/HISTORY/user/${user_id}`}><strong>History</strong></Link>
            <Link to={`/subject/LAW/user/${user_id}`}><strong>Law</strong></Link>
            <Link to={`/subject/MUSIC/user/${user_id}`}><strong>Music</strong></Link>
            <Link to={`/subject/PROGRAMING/user/${user_id}`}><strong>Pro-card-ming</strong> (Programing)</Link>
            <Link to={`/subject/PHISICS/user/${user_id}`}><strong>Phisics</strong></Link>
            <Link to={`/subject/OTHER/user/${user_id}`}><strong>Other</strong></Link>
            {cards.map(elm => (
                <Col md={{ span: 4 }} key={elm.subject}>
                    <CardsComponents {...elm} userdata={userdata} />
                </Col>
            ))}
        </>
    )
}

export default SubjectList