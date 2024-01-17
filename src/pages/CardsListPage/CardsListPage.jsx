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
                    <Col md={12}>
                        <div className="d-grid mt-3">
                            <Button variant="dark" type="submit" onClick={() => setShowModal(true)}>
                                <h1>Create Card</h1>
                            </Button>
                        </div>
                    </Col>
                </Row>
 
                <Row>
                    {cards.map((elm) => (
                        <CardsComponents key={elm._id} deleteCardByID={deleteCardByID} cardInfo={elm} subject={subject} user_id={user_id} addFavoriteCard={addFavoriteCard} />
                    ))}
                </Row>

                <Row>
                    <Col md={{ span: 4 }}>
                        <h1>Here are your favorite cards!</h1>
                        {favoriteCards.map((elm) => (
                            <FavoriteCardsComponents key={elm._id} removeFavoriteCard={removeFavoriteCard} cardInfo={elm} subject={subject} user_id={user_id} />
                        ))}
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>New card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CardForm user_id={user_id} subject={subject} closeModal={() => setShowModal(false)} updateList={loadCards} />
                </Modal.Body>
            </Modal>

            <Wikipedia />
        </>

    )
}

export default CardsListPage