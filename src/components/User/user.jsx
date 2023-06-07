import { Container, Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const UserComponent = ({ _id, username, avatar }) => {

    return (
        <Col md={{ span: 4 }} >
            <Link to={`/users/${_id}`}>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {username}
                        </Card.Text>
                        <Card.Img src={avatar} />
                    </Card.Body>
                </Card>
            </Link>
        </Col >
    )
}

export default UserComponent
