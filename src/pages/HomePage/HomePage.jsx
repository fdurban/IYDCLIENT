import { Container } from 'react-bootstrap';
import './homePage.css';

const HomePage = () => {
    return (
        <div className="foto">
            <section>
                <div className="air air1"></div>
                <div className="air air2"></div>
                <div className="air air3"></div>
                <div className="air air4"></div>
                <div className="overlay-text">
                    <h1 className="title">Your place to study</h1>
                </div>
            </section>
        </div>
    );
};

export default HomePage;