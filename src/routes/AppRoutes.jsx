import { Route, Routes } from 'react-router-dom'
import UserCardsListPage from '../pages/UserCardsListPage/UserCardsListPage'
import LoginPage from '../pages/LoginPage/loginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import SignupPage from '../pages/SignupPage/SignupPage'
import PrivateRoute from './PrivateRoutes'
import HomePage from '../pages/HomePage/HomePage'
import CardDetailsPage from '../pages/CardsDetailsPage/CardsDetailsPage'
import UserListPage from '../pages/UserListPage/UserListPage'
// import CardDetailsPAge from '../pages/CardsDetailsPage/CardsDetailsPage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={< HomePage />} />
            <Route path='/cards' />
            <Route path='/:subject' element={<UserCardsListPage />} />
            <Route path='/details/:id' element={<CardDetailsPage />} />
            <Route path='/categories' element={<h1>Cards-tegories</h1>} />
            <Route path='/create' />
            <Route path='/getallusers' element={<UserListPage />} />
            <Route path='/profile' element={<PrivateRoute />}>
                {/* TODO: REVISAR TÉCNICA DE PROTECCION DE RUTAS POR GRUSPO */}
                <Route path='' element={<ProfilePage />} />
            </Route>
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            {/* <Route path='/details' elemtn={<CardDetailsPAge />} /> */}
        </Routes>
    )
}

export default AppRoutes