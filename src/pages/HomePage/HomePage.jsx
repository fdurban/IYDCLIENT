import './homePage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import HomeCard from '../../components/HomeCard/HomeCard';
import { useContext } from 'react';
import { AuthContext } from "../../contexts/auth.context"

const HomePage = () => {
    const { user } = useContext(AuthContext)
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
                            {user ?
                                <div>
                                    <Link className="signup-btn" to={`/profile/user/${user._id}`}>Go to profile</Link>
                                </div>
                                :
                                <div>
                                    <Link className="signup-btn" to={`/login`}>Get started</Link>
                                </div>

                            }

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
                        <Col xs={12} md={4} >
                            <HomeCard title={"Comprehensive Study Materials"}
                                subtitle={"Access a wide range of study materials across various subjects and levels."}>
                            </HomeCard>
                        </Col>
                        <Col xs={12} md={4} >
                            <HomeCard title={"Time Management Tools"}
                                subtitle={"Utilize our time management tools to plan your study schedule effectively."}>
                            </HomeCard>
                        </Col>
                        <Col xs={12} md={4} >
                            <HomeCard title={"Collaborative learning"}
                                subtitle={"Engage in collaborative learning with peers and tutors to enhance your understanding."}>
                            </HomeCard>
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
                        <Col xs={12} md={4} >
                            <HomeCard title={"Judith"}
                                subtitle={"IYD made me prepare my exams better than before."}>
                            </HomeCard>
                        </Col>
                        <Col xs={12} md={4} >
                            <HomeCard title={"Jaime"}
                                subtitle={"I´m impressed on how this app made me increase my productivity."}>
                            </HomeCard>
                        </Col>
                    </Row>

                </Container>
            </section>
            <section>
                <div className='text-center  custom-padding-bottom-part'>
                    <h1 className='first-title'>Ready to enhance your learning experience?</h1>
                    <p>
                        Discover the amazing features of IYD study app designed specifically to enhance your learning
                        experience.
                    </p>
                    {user ?
                        <div>
                            <Link className="signup-btn" to={`/profile/user/${user._id}`}>Go to profile</Link>
                        </div>
                        :
                        <div>
                            <Link className="signup-btn" to={`/login`}>Get started</Link>
                        </div>

                    }
                </div>
            </section>
        </>
    );
};

export default HomePage;

