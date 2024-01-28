import SubjectList from "../../components/SubjectList/SubjectList"
import { useContext, useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import userService from "../../services/user.services"
import "./ProfilePage.css"
import { AuthContext } from "../../contexts/auth.context"
import "./ProfilePage.css"

const ProfilePage = () => {

    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        <section className="ProfilePage">
            <Container>
                <h1>Hello, <strong>{user?.username}</strong>!</h1>
                <p className="Info">{user?.infor}</p>
                <SubjectList />
            </Container>
        </section >
    )
}

export default ProfilePage