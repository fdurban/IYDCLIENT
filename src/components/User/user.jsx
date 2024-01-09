import { Container, Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import HomeCard from "../HomeCard/HomeCard"

const UserComponent = ({ _id, username, avatar }) => {

    return (
        <Col md={{ span: 4 }} >
            <Link to={`/users/${_id}`}>        
            <HomeCard title={username} image={avatar}></HomeCard>
            </Link>
        </Col >
    )
}

export default UserComponent