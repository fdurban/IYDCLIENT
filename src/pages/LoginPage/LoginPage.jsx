import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

const LoginPage = () => {

    return (
        <>
            <div className='loginbackground'>
                <Container >

                    <Row>

                        <Col md={{ offset: 4, span: 5 }}>

                            <LoginForm />

                        </Col>
                    </Row>

                </Container>

            </div>

        </>



    )
}

export default LoginPage