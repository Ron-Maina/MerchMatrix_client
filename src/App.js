import './app.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

import { refreshToken } from './features/Authentication/authSlice';

import HomePage from './components/HomePage/HomePage';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Products from './components/MarketPlace/Products';
import Description from './components/MarketPlace/Description';
import Navbar from './components/MarketPlace/Navbar';
import Searchbar from './components/MarketPlace/Searchbar';
import Cart from './components/MarketPlace/Cart';

function App() {
  const location = useLocation();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])

  const [selectedProduct, setSelectedProduct] = useState([]);

  // List of routes where Navbar should not be displayed
  const noNavbarRoutes = ['/home', '/login', '/signup'];

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path='/marketplace' element={<Products onProduct={setSelectedProduct} /> }/>
        <Route path='/description/:title' element={<Description product={selectedProduct} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
