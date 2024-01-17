import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import authService from './../../services/auth.services'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import uploadServices from "../../services/upload.services"
import './SignUpForm.css'

const SignupForm = () => {
    const { authenticateUser, storeToken } = useContext(AuthContext)


    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        description: '',
        avatar: null
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setSignupData({ ...signupData, avatar: res.data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }


    const handleSubmit = async e => {

        e.preventDefault();

        try {
            // Realizar el registro
            const { data: userData } = await authService.signup(signupData);
            // Si el registro es exitoso, procede con el inicio de sesión

            const loginData = {
                email: signupData.email,
                password: signupData.password
            };
            const { data: loginResponse } = await authService.login(loginData);

            // Almacenar el token de autenticación en el registro y el inicio de sesión
            const userToken = loginData?.authToken || loginResponse?.authToken;
            if (userToken) {
                storeToken(userToken);
                authenticateUser();
            }

            // Redirigir al perfil del usuario después del inicio de sesión o registro
            navigate(`/profile/user/${userData.user_id}`);
        } catch (error) {
            console.error("Error during signup and login:", error);
        }
    }




    const { username, password, email, avatar, description, } = signupData

    return (
        <>
            <section className="margin-form">
                <h1>Registro</h1>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Avatar (URL)</Form.Label>
                        <Form.Control type="file" onChange={handleFileUpload} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={description} onChange={handleInputChange} name="description" style={{ height: '150px' }} />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="dark" type="submit">Registrarme</Button>
                    </div>

                </Form>

            </section>
        </>



    )
}

export default SignupForm