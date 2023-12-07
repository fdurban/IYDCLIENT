import { Route, Routes } from 'react-router-dom'
import UserCardsListPage from '../pages/UserCardsListPage/UserCardsListPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import SignupPage from '../pages/SignupPage/SignupPage'
import PrivateRoute from './PrivateRoutes'
import HomePage from '../pages/HomePage/HomePage'
import CardDetailsPage from '../pages/CardsDetailsPage/CardsDetailsPage'
import UserListPage from '../pages/UserListPage/UserListPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={< HomePage />} />
            <Route path='/cards' />
            <Route path='/subject/:subject/user/:user_id' element={<UserCardsListPage />} />
            <Route path='/details/:id' element={<CardDetailsPage />} />
            <Route path='/categories' element={<h1>Categories</h1>} />
            <Route path='/getallusers' element={<UserListPage />} />
            <Route path='/users/:user_id' element={<ProfilePage />} />

            <Route path='/create' />
            <Route path='/profile/user/:user_id' element={<PrivateRoute />}>
                <Route path='' element={<ProfilePage />} />
            </Route>
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    )
}

export default AppRoutes