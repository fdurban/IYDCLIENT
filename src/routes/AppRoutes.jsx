import { Route, Routes } from 'react-router-dom'
import CardsListPage from '../pages/CardsListPage/CardsListPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import SignupPage from '../pages/SignupPage/SignupPage'
import PrivateRoute from './PrivateRoutes'
import HomePage from '../pages/HomePage/HomePage'
import NewCardPage from '../pages/CardFormPage/CardFormPage'
import Mathematics from '../pages/Mathematics/MathematicsPage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={< HomePage />} />
            <Route path='/cards' element={<CardsListPage />} />
            <Route path='/cards/categories' element={<h1>Cards-tegories</h1>} />
            <Route path='/cards/category/:category' element={<h1>Cards</h1>} />
            <Route path='/cards/create' element={<NewCardPage />} />
            <Route path='/profile' element={<PrivateRoute />}>
                <Route path='' element={<ProfilePage />} />

            </Route>
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />

            <Route path='/cards/subject/maths/:id' element={<Mathematics />} />
        </Routes>
    )
}

export default AppRoutes