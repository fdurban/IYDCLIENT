import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import cardService from "../../services/cards.services"

// 


const CardForm = ({ subject, user_id, closeModal, updateList }) => {
    const [cardData, setCardData] = useState({
        title: '',
        subject: subject

    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setCardData({ ...cardData, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        cardService
            .createCard(cardData)
            .then(() => {
                closeModal()
                updateList()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Introduce title" value={cardData.title} onChange={handleInputChange} name="title" />
                </Form.Group>
                <Button variant="primary" type="submit">Create</Button>
            </Form>
        </>
    )
}

export default CardForm


