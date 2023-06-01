
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from "react"


const CardsComponents = ({ title, subject, owner, likes }) => {

    const { user } = useContext(AuthContext)

    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>{subject}</Card.Title>
                <Button variant="primary">Edit title</Button>
                <Button variant="primary">Go to resume</Button>
            </Card.Body>
        </Card>
    )
}

export default CardsComponents



