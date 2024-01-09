import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {

    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Inicio de sesión</h1>


                    <LoginForm />

                </Col>
            </Row>

        </Container>
    )
}

export default LoginPage