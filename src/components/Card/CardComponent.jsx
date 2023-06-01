
import { Card, Button } from "react-bootstrap"
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from "react"

// TODO: DECIDIR SI RESOLVER CON UNA UNICA CARD LAS CDOS VERSIONES
const CardsComponents = ({ showFullInfo, cardInfo }) => {

    const { user } = useContext(AuthContext)

    return (
        <Card>
            <Card.Body>
                <Card.Title>{cardInfo.title}</Card.Title>
                <Card.Title>{cardInfo.subject}</Card.Title>
                <Button variant="primary">Edit title</Button>
                <Button variant="primary">Go to resume</Button>
            </Card.Body>
        </Card>
    )
}

export default CardsComponents



