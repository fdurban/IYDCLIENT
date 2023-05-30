import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {

  return (
    <Routes>
      <Route path='/' element={<h1>Inicio</h1>} />
      <Route path='/cards' element={<h1>Cards</h1>} />
      <Route path='/cards/categories' element={<h1>Cards-tegories</h1>} />
      <Route path='/cards/category/:category' element={<h1>Cards</h1>} />
      <Route path='/cards/create' element={<h1>Create cards</h1>} />
      <Route path='/profile' element={<h1>Profile</h1>} />
      <Route path='/signup' element={<h1>Sign up!</h1>} />
      <Route path='/login' element={<h1>Sign in!</h1>} />
    </Routes>
  )
}

export default AppRoutes
