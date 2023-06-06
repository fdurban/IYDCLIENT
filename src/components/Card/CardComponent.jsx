import { Card, Button } from "react-bootstrap"
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from "react"
import { Link } from "react-router-dom"


const CardsComponents = ({ showFullInfo, cardInfo }) => {

    const { user } = useContext(AuthContext)
    const isOwner = cardInfo.owner == user?._id


    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{cardInfo.title}</Card.Title>
                    <Card.Title>{cardInfo.subject}</Card.Title>
                    {isOwner && <Button variant="primary">Edit title</Button>}
                    <Button variant="primary"><Link to={`/details/${cardInfo._id}`}>Go to resume</Link></Button>
                    <p>By {isOwner}</p>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardsComponents



