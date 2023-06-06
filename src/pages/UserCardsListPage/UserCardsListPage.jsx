import { useContext, useEffect, useState } from "react"
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap"
import cardsService from "../../services/cards.services"
import CardsComponents from "../../components/Card/CardComponent"
import { AuthContext } from "../../contexts/auth.context"
import { useParams } from "react-router-dom"
import CardForm from "../../components/CardsForm/CardForm"

import userService from "../../services/user.services"

const CardsListPage = () => {


    const { user } = useContext(AuthContext)

    const { subject, user_id } = useParams()

    const [cards, setCards] = useState([])
    const [showModal, setShowModal] = useState(false)

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
                    console.log(filteredCards)
                }
            })
            .catch(err => console.log(err))
    }



    // useEffect(() => {
    //     userService
    //         .getUsersById(_id)
    //         .then(({ data }) => {
    //             setFavoriteCard(data.cards);
    //         })
    //         .catch((err) => console.log(err));
    // }, [_id]);



    return (
        <>
            <Container>
                <h1>Hola soy UserCardsListPage</h1>
                <hr />

                {user._id === user_id &&
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
                                        <CardsComponents cardInfo={elm} subject={subject} user_id={user_id} />
                                    </Col>
                                </>
                            )
                        } else {
                            return (
                                <Col md={{ span: 4 }} key={elm._id}>
                                    <CardsComponents cardInfo={elm} />
                                </Col>
                            )
                        }
                    })}
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