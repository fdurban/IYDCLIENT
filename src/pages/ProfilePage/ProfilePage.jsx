import SubjectList from "../../components/SubjectList/SubjectList"
import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import userService from "../../services/user.services"
import getSessionData from "../../utils/get-session-data"

const ProfilePage = () => {

    const [userData, setUserData] = useState({})

    const user = getSessionData()

    useEffect(() => {
        userService
            .getUserById(user?._id)
            .then(({ data }) => setUserData(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <h1>Hello, <strong>{userData.username}</strong>!</h1>
            <hr />
            <Row>
                <SubjectList />
            </Row>
        </Container>
    )
}

export default ProfilePage