import { useState, useEffect, useContext } from "react"
import { Button, Card } from "react-bootstrap"
import cardsService from "../../services/cards.services"
import { AuthContext } from "../../contexts/auth.context"
import './CardResume.css'
const CardResume = ({ content, setContent, field, cardID, owner, addFavoriteCard }) => {

    {/* TODO ESTE ES EL HIJO */ }
    const [isFlipped, setIsFlipped] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    const { user } = useContext(AuthContext)

    const handleInputChange = (e) => {
        setContent(e.target.value)
    }

    const handleCardClick = () => {
        setIsFlipped(!isFlipped)
    }

    const updateContentInServer = (field, value) => {

        cardsService
            .editCards(cardID, { [field]: value })
            .catch(err => console.log(err))
    }

    if (!content) {
        return <h1> loading </h1>
    }


    if (owner === user._id) {

        return (
            <>
                {
                    !isEditing
                        ?
                        // TODO: QUITAR ANCHOS EN LINEA DE LAS CARDS
                        <Card
                            className={`flip-card`}
                            style={{ width: '80rem' }}
                            onClick={handleCardClick}>
                            <Card.Body>
                                <Card.Text>{content}</Card.Text>
                                <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>Edit</Button>
                            </Card.Body>
                        </Card>
                        :
                        <Card style={{ width: '80rem' }} >
                            <Card.Body >
                                <textarea
                                    style={{ height: '40rem' }}
                                    className="form-control"
                                    value={content}
                                    onChange={handleInputChange}
                                ></textarea>
                                <Button variant="warning" onClick={() => {
                                    updateContentInServer(field, content)
                                    setIsEditing(!isEditing)
                                }}>Edit</Button>
                            </Card.Body>
                        </Card>
                }
            </>
        )
    } else {
        return (
            <>
                <Card style={{ width: '80rem' }} >
                    <Card.Body>
                        <Card.Text>{content}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        )

    }
}

export default CardResume