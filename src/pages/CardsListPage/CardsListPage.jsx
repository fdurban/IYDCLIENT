import { useContext, useEffect, useState } from "react"
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap"
import cardsService from "../../services/cards.services"
import userService from "../../services/user.services"
import CardsComponents from "../../components/Card/CardComponent"
import { AuthContext } from "../../contexts/auth.context"
import { useParams } from "react-router-dom"
import CardForm from "../../components/CardsForm/CardForm"
import FavoriteCardsComponents from "../../components/FavoriteCardComponent.jsx/favoriteCardComponent"
import Wikipedia from "../../components/Wikipedia/wikipedia"
import "./CardsListPage.css"

const CardsListPage = () => {

    const { user } = useContext(AuthContext)
    const { subject, user_id } = useParams()
    const [cards, setCards] = useState([])
    const [favoriteCards, setFavoriteCards] = useState([])
    const [showModal, setShowModal] = useState(false)
    const isOwner = user._id === user_id

    useEffect(() => {
        loadCards()
    }, [user])

    const loadCards = () => {
        cardsService
            .getCardsByOwner(user_id)
            .then(({ data }) => {
                if (subject) {
                    const filteredCards = data.filter((card) => card.subject === subject)
                    setCards(filteredCards)
                }
            })
            .catch(err => console.log(err))

        userService
            .getFavoriteCards(user_id)
            .then(({ data }) => {
                if (subject) {
                    const filteredCards = data.filter((card) => card.subject === subject)
                    setFavoriteCards(filteredCards)
                }
            })
            .catch(err => console.log(err))
    }

    const deleteCardByID = (_id) => {
        cardsService
            .deleteCard(_id)
            .then(() => loadCards())
            .catch(err => console.log(err))
    }

    const addFavoriteCard = (user_id, card_id) => {
        userService
            .addFavoriteCard(user_id, card_id)
            .then(() => loadCards())
            .catch(err => console.log(err))
    }

    const removeFavoriteCard = (user_id, card_id) => {
        userService
            .removeFavoriteCard(user_id, card_id)
            .then(() => loadCards())
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container className="main-container">
                <Row>
                    <Col md={1}>
                        {isOwner ? <button className="addCardButton" onClick={() => setShowModal(true)}>
                            <h1 className="plus">+</h1>
                        </button> : null}
                    </Col>
                </Row>

                <Row>
                    {cards.map((elm) => (
                        <Col md={4}>
                            <CardsComponents key={elm._id} deleteCardByID={deleteCardByID} cardInfo={elm} subject={subject} user_id={user_id} addFavoriteCard={addFavoriteCard} />
                        </Col>
                    ))}
                </Row>

                <Row>
                    <h1>Here are your favorite cards!</h1>
                    {favoriteCards.map((elm) => (
                        <Col md={4}>
                            <FavoriteCardsComponents key={elm._id} removeFavoriteCard={removeFavoriteCard} cardInfo={elm} subject={subject} user_id={user_id} />
                        </Col>
                    ))}
                </Row>

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>New card</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CardForm user_id={user_id} subject={subject} closeModal={() => setShowModal(false)} updateList={loadCards} />
                    </Modal.Body>
                </Modal>

                <Wikipedia />
            </Container>
        </>

    )
}

export default CardsListPage