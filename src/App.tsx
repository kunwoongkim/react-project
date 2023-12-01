import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductAll from './component/ProductAll';
import Login from './component/Login';
import ProductDetail from './component/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriveteRoute from './component/PriveteRoute';

function App() {
    const [auth, setAuth] = useState<boolean>(false);
    return (
        <div>
            <Navbar auth={auth} setAuth={setAuth} />
            <Routes>
                <Route path='/' element={<ProductAll />} />
                <Route path='/login' element={<Login setAuth={setAuth} />} />
                <Route
                    path='/product/:id'
                    element={<PriveteRoute auth={auth} />}
                />
            </Routes>
        </div>
    );
}

export default App;
