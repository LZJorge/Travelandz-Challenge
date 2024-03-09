import { Routes, Route } from 'react-router-dom'

import Login from '../pages/login'
import Register from '../pages/register'
import Main from '../pages/main';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/main' element={<Main />} />
        </Routes>
    )
}

export default Router