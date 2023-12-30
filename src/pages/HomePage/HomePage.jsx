import './homePage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <section className='HomeSection1'>
                <Container>
                    <Row className='custom-padding'>
                        <Col xs={12} md={{ span: 6, offset: 0 }}>
                            <h1 className="first-title">
                                IYD Study App: Your partner in success
                            </h1>
                        </Col>
                        <Col md={{ span: 6, offset: 0 }}>
                            <p>A comprehensive study platform designed to enhance your learning experience. Accessible, customizable,
                                and efficient.
                            </p>
                            <div>
                                <Link className="signup-btn" to={`/login`}>Get started</Link>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <img src="/wildtextures_cracking-blue-paint.jpg" alt="Ordered Desktop" className="desktop-image" />
                    </Row>
                    <div className='text-center'>
                        <h1 className='first-title'>A new way to study</h1>
                        <p>
                            Discover the amazing features of IYD study app designed specifically to enhance your learning
                            experience.
                        </p>
                    </div>
                    <Row className='justify-content-center text-center'>
                        <Col xs={12} md={4} className="mb-3 mb-md-0">
                            <div className="homecard-gridcontainer">
                                <h5 className='homercard-title'>Comprehensive Study Materials</h5>
                                <p>Access a wide range of study materials across various subjects and levels.</p>
                            </div></Col>
                        <Col xs={12} md={4} className="mb-3 mb-md-0">
                            <div className="homecard-gridcontainer">
                                <h5 className='homercard-title'>Time Management Tools</h5>
                                <p>Utilize our time management tools to plan your study schedule effectively.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="mb-3 mb-md-0">
                            <div className="homecard-gridcontainer">
                                <h5 className='homercard-title'>Collaborative learning</h5>
                                <p>Engage in collaborative learning with peers and tutors to enhance your understanding.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='secondandthirdsection'>
                <Container>
                <Row className='justify-content-center text-center'>
                    <Col xs={12} md={4}>
                        <h1 className='first-title'>hear from users</h1>
                        <p>Don't take our word for it, see what our users have to say about IYD Study App.</p>
                    </Col>
                </Row>
                    <Row className='justify-content-center text-center'>
                        <Col xs={12} md={4} className="mb-3 mb-md-0">
                            <div className="homecard-gridcontainer">
                                <h5 className='homercard-title'>Comprehensive Study Materials</h5>
                                <p>Access a wide range of study materials across various subjects and levels.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="mb-3 mb-md-0">
                            <div className="homecard-gridcontainer">
                                <h5 className='homercard-title'>Time Management Tools</h5>
                                <p>Utilize our time management tools to plan your study schedule effectively.</p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            <section>
                <h1>Ready to enhance your learning experience?</h1>
            </section>
        </>
    );
};

export default HomePage;

