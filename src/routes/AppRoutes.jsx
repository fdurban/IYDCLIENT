import { Route, Routes } from 'react-router-dom'
import CardsListPage from '../pages/CardsListPage/CardsListPage'
import LoginPage from '../pages/LoginPage/loginPage'




const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<h1>Inicio</h1>} />
            <Route path='/cards' element={<CardsListPage />} />
            <Route path='/cards/categories' element={<h1>Cards-tegories</h1>} />
            <Route path='/cards/category/:category' element={<h1>Cards</h1>} />
            <Route path='/cards/create' element={<h1>Create cards</h1>} />
            <Route path='/profile' element={<h1>Profile</h1>} />
            <Route path='/signup' element={<h1>Sign up!</h1>} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    )
}

export default AppRoutes