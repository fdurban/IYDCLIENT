import { Card, Button } from "react-bootstrap"
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from "react"
import { Link } from "react-router-dom"
import useGetSessionData from "../../utils/get-session-data"

const CardsComponents = ({ cardInfo, deleteCardByID, addFavoriteCard }) => {

    const { user } = useContext(AuthContext)
    const isOwner = cardInfo.owner == user?._id
    const userID = useGetSessionData()

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{cardInfo.title}</Card.Title>
                    <Card.Title>{cardInfo.subject}</Card.Title>
                    <Card.Title>Likes: {cardInfo.likes}</Card.Title>
                    <Button variant="primary"><Link to={`/details/${cardInfo._id}`}>Go to resume</Link></Button>
                    {<Button variant="danger" onClick={() => deleteCardByID(cardInfo._id)}>Delete Card</Button>}
                    {<Button variant="primary" onClick={() => addFavoriteCard(userID._id, cardInfo._id)}>Like</Button>}
                </Card.Body>
            </Card>
            
        </>
    )
}

export default CardsComponents



