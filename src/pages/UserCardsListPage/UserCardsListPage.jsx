import { useContext, useEffect, useState } from "react"
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap"
import cardsService from "../../services/cards.services"
import userService from "../../services/user.services"
import CardsComponents from "../../components/Card/CardComponent"
import { AuthContext } from "../../contexts/auth.context"
import { useParams } from "react-router-dom"
import CardForm from "../../components/CardsForm/CardForm"
import CardResume from "../../components/CardResume/CardResume"
import FavoriteCardsComponents from "../../components/FavoriteCardComponent.jsx/favoriteCardComponent"
import Wikipedia from "../../components/Wikipedia/wikipedia"

const CardsListPage = () => {

    const { user } = useContext(AuthContext)
    const { subject, user_id } = useParams()
    const [cards, setCards] = useState([])
    const [favoriteCards, setFavoriteCards] = useState([])
    const [showModal, setShowModal] = useState(false)

    const isPageOwner = user === user_id
    console.log(user_id, "ESTE ES EL PAGEEEEEEEE OWNERRRRR")

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

    const removeFavoriteCard = (_id, card_id) => {
        userService
            .removeFavoriteCard(_id, card_id)
            .then(() => loadCards())
            .catch(err => console.log(err))
    }


    return (
        <>
            <Wikipedia />
            <Container>
                <h1>Hola soy UserCardsListPage</h1>
                <hr />

                {
                    <>
                        <div className="d-grid mt-3">
                            <Button variant="dark" type="submit" onClick={() => setShowModal(true)}>Create Card</Button>
                        </div>
                        <hr />
                    </>
                }
                <Row>
                    {cards.map(elm => {
                        const isOwner = elm.owner === user?._id
                        if (isOwner) {
                            return (
                                <>
                                    <Col md={{ span: 4 }} key={elm._id}>
                                        <CardsComponents deleteCardByID={deleteCardByID} cardInfo={elm} subject={subject} user_id={user_id} />
                                    </Col>
                                </>
                            )
                        } else {
                            return (
                                <Col md={{ span: 4 }} key={elm._id}>
                                    <CardsComponents cardInfo={elm} addFavoriteCard={addFavoriteCard} />

                                </Col>

                            )

                        }
                    })}
                </Row>
                <Row>
                    <>

                        {isPageOwner && (<>
                            <h1>Here are your favorite cards!</h1>
                            <hr />

                            {favoriteCards.map(elm => {
                                const isOwner = elm.owner === user?._id
                                if (!isOwner) {
                                    return (
                                        <Col md={{ span: 4 }} key={elm._id}>

                                            <FavoriteCardsComponents removeFavoriteCard={removeFavoriteCard} cardInfo={elm} subject={subject} user_id={user_id} />
                                        </Col>
                                    )
                                }
                            })}
                        </>)}
                    </>
                </Row>
            </Container>
            <Modal show={showModal} onHide={() => setShowModal(false)} >
                <Modal.Header closeButton>
                    <Modal.Title>New card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CardForm user_id={user_id} subject={subject} closeModal={() => setShowModal(false)} updateList={loadCards} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CardsListPage