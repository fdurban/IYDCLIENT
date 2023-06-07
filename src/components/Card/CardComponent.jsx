import { Card, Button } from "react-bootstrap"
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from "react"
import { Link } from "react-router-dom"

const CardsComponents = ({ cardInfo, deleteCardByID, addFavoriteCard }) => {

    const { user } = useContext(AuthContext)
    const isOwner = cardInfo.owner == user?._id
    const { _id } = cardInfo

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{cardInfo.title}</Card.Title>
                    <Card.Title>{cardInfo.subject}</Card.Title>
                    <Button variant="primary"><Link to={`/details/${cardInfo._id}`}>Go to resume</Link></Button>
                    {isOwner && <Button variant="danger" onClick={() => deleteCardByID(_id)}>Delete Card</Button>}
                    {/* {!isOwner && <Button variant="primary" onClick={() => addFavoriteCard(_id)}>Like</Button>} */}
                    <p>By {user?.username}</p>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardsComponents



