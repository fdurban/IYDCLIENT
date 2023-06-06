import SubjectList from "../../components/SubjectList/SubjectList"
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from "react"
import { Container, Row } from "react-bootstrap"



const ProfilePage = () => {

    // TODO: HACER LLAMADA EN MONTAJE A LA API PARA TRAER INFO DEL USER, NO EL CONTEXTO
    //(la hemos traido en el componente)
    const { user } = useContext(AuthContext)

    return (
        <Container>
            <h1>Hello, <strong>{user.username}</strong>!</h1>
            <hr />
            <Row>
                <SubjectList />
            </Row>
        </Container>
    )
}

export default ProfilePage