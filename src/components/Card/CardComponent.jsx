import { Card, Button } from "react-bootstrap"
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from "react"
import { Link } from "react-router-dom"
import useGetSessionData from "../../utils/get-session-data"
import './CardComponent.css'

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
                    <div >
                        <Button variant="success" className="buttonorder"><Link to={`/details/${cardInfo._id}`} className="gotoresume">Go to resume</Link></Button>
                        {isOwner ? <Button variant="danger" onClick={() => deleteCardByID(cardInfo._id)}>Delete Card</Button> : null}
                        {<Button variant="primary" onClick={() => addFavoriteCard(userID._id, cardInfo._id)}>Like</Button>}
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}

export default CardsComponents



