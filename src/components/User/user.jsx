import { Container, Card, Col } from "react-bootstrap"

const UserComponent = ({ UserInfo }) => {

    return (
        <Col md={{ span: 4 }} >
            <Card>
                <Card.Body>
                    <Card.Text>
                        {UserInfo.username}
                    </Card.Text>
                    <Card.Img src={UserInfo.avatar} />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserComponent