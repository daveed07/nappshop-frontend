import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@redux/store";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Home from "@pages/Home";
import Product from "@pages/Product";
import Cart from "@pages/Cart";
import CheckOut from "@pages/CheckOut";
import Payment from "@pages/Payment";
import Profile from "@pages/Profile";
import Success from "@pages/Success";
import Failure from "@pages/Failure";

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/brands/:brand" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="payment" element={<Payment />} />
            {isLoggedIn ? (
              <Route path="/profile" element={<Profile />} />
            ) : (
              <Route path="/profile" element={<Navigate to="/login" />} />
            )}
            <Route path="/success/:order_id" element={<Success />} />
            <Route path="/failure" element={<Failure />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </>
      </BrowserRouter>
    </PersistGate>
  );
};

export default App;
