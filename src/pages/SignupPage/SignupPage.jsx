import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'
import './SignUpPage.css'

const SignupPage = () => {

    return (
        <div className='signupbackground'>

            <Container>
                <Row>

                    <Col md={{ offset: 3, span: 6 }}>
                        <SignupForm />
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default SignupPage