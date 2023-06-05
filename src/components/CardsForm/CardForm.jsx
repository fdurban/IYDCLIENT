import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import cardService from "../../services/cards.services"

const NewCardForm = () => {

    const [cardData, setCardData] = useState({
        title: '',
        subject: ''
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

            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="abled input" abled value={cardData.title} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Disabled select menu</Form.Label>
                    <Form.Select abled value={cardData.subject} onChange={handleInputChange}>
                        <option>Anatomy</option>
                        <option>Biology</option>
                        <option>Chemistry</option>
                        <option>Geography</option>
                        <option>History</option>
                        <option>Law</option>
                        <option>Maths</option>
                        <option>Music</option>
                        <option>Pograming</option>
                        <option>Fisics</option>
                        <option>Other</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        </>
    );
}

export default NewCardForm

