import { Link } from "react-router-dom"
import HomeCard from "../HomeCard/HomeCard"

const UserComponent = ({ _id, username, avatar, subtitle }) => {

    return (

        <Link to={`/users/${_id}`}>
            <HomeCard title={username} image={avatar} subtitle={subtitle}></HomeCard>
        </Link>
    )
}

export default UserComponent