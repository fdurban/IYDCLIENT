import SubjectList from "../../components/SubjectList/SubjectList"
import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import userService from "../../services/user.services"
import usegetSessionData from "../../utils/get-session-data"

const ProfilePage = () => {

    const [userData, setUserData] = useState({})

    const user = usegetSessionData()

    useEffect(() => {
        userService
            .getUserById(user?._id)
            .then(({ data }) => setUserData(data))
            .catch(err => console.log(err))
    }, [])
    // TODO: HACER LLAMADA EN MONTAJE A LA API PARA TRAER INFO DEL USER, NO EL CONTEXTO
    //(la hemos traido en el componente)
    // const { user } = useContext(AuthContext)

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