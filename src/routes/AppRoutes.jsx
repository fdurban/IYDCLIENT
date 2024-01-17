import { Route, Routes } from 'react-router-dom'
import CardsListPage from '../pages/CardsListPage/CardsListPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import SignupPage from '../pages/SignupPage/SignupPage'
import PrivateRoute from './PrivateRoutes'
import HomePage from '../pages/HomePage/HomePage'
import StudyPage from '../pages/StudyPage/StudyPage'
import UserListPage from '../pages/UserListPage/UserListPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={< HomePage/>} />
            <Route path='/details/:id' element={<StudyPage />} />
            <Route path='/create' />
            <Route path='/profile/user/:user_id' element={<PrivateRoute />}>
                <Route path='' element={<ProfilePage />} />
            </Route>
            <Route path='profile/user/:user_id/subject/:subject' element={<PrivateRoute />}>
                <Route path='' element={<CardsListPage />} />
            </Route>
            <Route path='getallusers' element={<PrivateRoute />}>
                <Route path='' element={<UserListPage />} />
            </Route>
            <Route path='/users/:user_id/subject/:subject' element={<CardsListPage />}>
                <Route path='' element={<CardsListPage />} />
            </Route>
            <Route path='/users/:user_id' element={<PrivateRoute />}>
                <Route path='' element={<ProfilePage />} />
            </Route>
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage/>} />
        </Routes>
    )
}

export default AppRoutes