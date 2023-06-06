import { useState, useEffect, useContext } from "react"
import { Button, Card } from "react-bootstrap"
import cardsService from "../../services/cards.services"
import { AuthContext } from "../../contexts/auth.context"

const CardResume = ({ content, setContent, field, cardID, owner }) => {

    const [isEditing, setIsEditing] = useState(false)
    const { user } = useContext(AuthContext)

    const handleInputChange = (e) => {
        setContent(e.target.value)
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
                        <Card style={{ width: '80rem' }} >
                            <Card.Body>
                                <Card.Text>{content}</Card.Text>
                                <Button variant="primary">Like</Button>
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
                        <Button variant="primary">Like</Button>
                    </Card.Body>
                </Card>
            </>
        )

    }
}

export default CardResume