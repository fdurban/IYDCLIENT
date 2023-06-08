import { Card, Button } from "react-bootstrap"
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from "react"
import { Link } from "react-router-dom"
import useGetSessionData from "../../utils/get-session-data"
const FavoriteCardsComponents = ({ cardInfo, deleteCardByID, removeFavoriteCard }) => {


    const { user } = useContext(AuthContext)
    const isOwner = cardInfo.owner == user?._id
    const userID = useGetSessionData()

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{cardInfo.title}</Card.Title>
                    <Card.Title>{cardInfo.subject}</Card.Title>
                    <Button variant="primary"><Link to={`/details/${cardInfo._id}`}>Go to resume</Link></Button>
                    {isOwner && <Button variant="danger" onClick={() => deleteCardByID(cardInfo._id)}>Delete Card</Button>}
                    {!isOwner && <Button variant="warning" onClick={() => removeFavoriteCard(userID._id, cardInfo._id)}>Unlike</Button>}
                    <p>By {user?.username}</p>
                </Card.Body>
            </Card>
        </>
    )
}

export default FavoriteCardsComponents