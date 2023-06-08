import SubjectList from "../../components/SubjectList/SubjectList"
import { useContext, useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import userService from "../../services/user.services"
import useGetSessionData from "../../utils/get-session-data"
import "./ProfilePage.css"
import { AuthContext } from "../../contexts/auth.context"


const ProfilePage = () => {

    const [userData, setUserData] = useState({})

    // const user = useGetSessionData()
    const { user } = useContext(AuthContext)
>>>>>>> db0a8422fa067d16d9b42f452e36aa2af9530366

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
            <Row>
                <SubjectList />
            </Row>
        </Container>
    )
}

export default ProfilePage