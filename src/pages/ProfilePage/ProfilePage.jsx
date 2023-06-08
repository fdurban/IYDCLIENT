import SubjectList from "../../components/SubjectList/SubjectList"
import { useContext, useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import userService from "../../services/user.services"
import "./ProfilePage.css"
import { AuthContext } from "../../contexts/auth.context"


const ProfilePage = () => {

    const [userData, setUserData] = useState({})

    const { user } = useContext(AuthContext)

    useEffect(() => {
        userService
            .getUserById(user?._id)
            .then(({ data }) => setUserData(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <h1>Hello, <strong>{userData?.username}</strong>!</h1>
            <img src={userData?.avatar} alt="avatar" />
            <hr />
            <p className="Info">{userData?.infor}</p>
            <Row>
                <SubjectList />
            </Row>
        </Container>
    )
}

export default ProfilePage