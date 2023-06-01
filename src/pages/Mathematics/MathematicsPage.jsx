import CardsComponents from "../../components/Card/CardComponent"
import { Container, Col, Row } from "react-bootstrap"

const Mathematics = () => {

    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Mathemati-Cards</h1>

                    <hr />

                    <CardsComponents />

                </Col>
            </Row>

        </Container>
    )
}

export default Mathematics