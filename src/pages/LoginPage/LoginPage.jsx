import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

const LoginPage = () => {

    return (

        <section className='loginbackground'>
            <Container >

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <LoginForm />

                </Col>
            </Row>

        </Container>

    </section>



    )
}

export default LoginPage