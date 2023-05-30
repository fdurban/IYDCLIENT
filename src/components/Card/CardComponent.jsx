
import { Container, Row, Col, Card, Button } from "react-bootstrap"


const CardsComponents = ({ title }) => {

    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant="primary">Edit title</Button>
                <Button variant="primary">Go to resume</Button>
            </Card.Body>
        </Card>
    )
}

export default CardsComponents