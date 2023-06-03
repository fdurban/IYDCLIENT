import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import cardsService from "../../services/cards.services"


const CardResume = ({ content, setContent, onSubmmit }) => {

    const [isEditing, setIsEditing] = useState(false)

    const handleInputChange = (e) => {
        setContent(e.target.value)
    }


    if (!content) {
        return <h1> loading </h1>
    }

    return (
        <>
            {
                !isEditing
                    ?
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
                                onSubmmit()
                                setIsEditing(!isEditing)



                            }}>Edit</Button>
                        </Card.Body>
                    </Card>
            }
        </>
    )
}

export default CardResume