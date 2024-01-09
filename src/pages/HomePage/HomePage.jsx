import './homePage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import HomeCard from '../../components/HomeCard/HomeCard';
import { useContext } from 'react';
import { AuthContext } from "../../contexts/auth.context"

const HomePage = () => {
    const { user, logout } = useContext(AuthContext)
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
                        <HomeCard title={"Comprehensive Study Materials"}
                            subtitle={"Access a wide range of study materials across various subjects and levels."}>
                        </HomeCard>

                        <HomeCard title={"Time Management Tools"}
                            subtitle={"Utilize our time management tools to plan your study schedule effectively."}>
                        </HomeCard>

                        <HomeCard title={"Collaborative learning"}
                            subtitle={"Engage in collaborative learning with peers and tutors to enhance your understanding."}>
                        </HomeCard>
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
                        <HomeCard title={"Comprehensive Study Materials"}
                            subtitle={"Access a wide range of study materials across various subjects and levels."}>
                        </HomeCard>
                        <HomeCard title={"Time Management Tools"}
                            subtitle={"Utilize our time management tools to plan your study schedule effectively."}>
                        </HomeCard>
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

