import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "@redux/store";
import Login from '@pages/Login';
import Signup from '@pages/Signup';
import Home from '@pages/Home';
import Product from '@pages/Product';
import Cart from '@pages/Cart';
import CheckOut from '@pages/CheckOut';
import Payment from '@pages/Payment';
import Profile from '@pages/Profile';
import '@styles/global.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <>
            <Routes>
              <Route path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/products/:id" element={<Product/>}/>
              <Route path="/categories/:category/products" element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path="/checkout" element={<CheckOut/>}/>
              <Route path="payment" element={<Payment/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="*" element={<div>404</div>}/>
            </Routes>
          </>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;