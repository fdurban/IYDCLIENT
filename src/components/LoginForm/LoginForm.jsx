import { useContext, useState } from "react"
import authService from './../../services/auth.services'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../contexts/auth.context"
import './LoginForm.css'


const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    // const { setUser } = useContext(AuthContext)

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate(`/profile/user/${data.user_id}`)
            })
            .catch(err => console.log(err))
    }
    const handleGoogleLogin = () => {
        window.location.href = `${process.env.REACT_APP_API_URL}/auth/login/federated/google`;
    };

    const { password, email } = loginData

    return (
        <div className="login-container">
            <h1>Login to your account</h1>
            <p>Access all your study materials</p>
            <div className='loginform'>
                <div className="logins">
                    <button onClick={handleGoogleLogin} className='logingoogle'>
                        <img src="chrome-svgrepo-com.svg" className="chromelogo" alt="Chrome Logo" />
                        Login with Google
                    </button>
                    <button className='logingithub'>
                        <img src="github-svgrepo-com.svg" className="githublogo" alt="GitHub Logo" />
                        <a>Login with GitHub</a>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={handleInputChange} name="email" placeholder="Email" />
                    <input type="password" value={password} onChange={handleInputChange} name="password" placeholder="Password" />
                    <button type="submit" className="classiclogin">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm