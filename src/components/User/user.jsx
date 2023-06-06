import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const UserComponent = ({ UserInfo }) => {

    return (
        <Col md={{ span: 4 }} >
            <Link to={`/users/${UserInfo._id}`}>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {UserInfo.username}
                        </Card.Text>
                        <Card.Img src={UserInfo.avatar} />
                    </Card.Body>
                </Card>
            </Link>
        </Col >
    )
}

export default UserComponent