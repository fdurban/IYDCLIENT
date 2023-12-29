import './homePage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
    return (
        <>
            <section className='HomeSection1'>
                <Container>
                    <Row className='custom-padding'>
                        <Col xs={12} md={6}>
                            <h1 className="first-title">
                                IYD Study App: Your partner in success
                            </h1>
                        </Col>
                        <Col>
                            <p>
                                A comprehensive study platform designed to enhance your learning experience. Accessible, customizable,
                                and efficient.
                            </p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center text-center'>
                        <img src="/wildtextures_cracking-blue-paint.jpg" alt="Ordered Desktop" className="desktop-image" />
                    </Row>
                    <div className='text-center'>
                        <h2 className='first-title'>A new way to study</h2>
                        <p>
                            Discover the amazing features of IYD study app designed specifically to enhance your learning
                            experience.
                        </p>
                    </div>
                    <Row className='justify-content-center text-center'>
                        <Col xs={12} md={4}>Card1</Col>
                        <Col xs={12} md={4}>Card2</Col>
                        <Col xs={12} md={4}>Card3</Col>
                    </Row>
                    <Row className='justify-content-center text-center'>
                        <Col xs={12} md={4}>
                            <h2 className='first-title'>hear from users</h2>
                            <p>Don't take our word for it, see what our users have to say about IYD Study App.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomePage;

