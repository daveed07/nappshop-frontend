import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import ReactLoading from 'react-loading';
import { store } from "@redux/store";
import Header from '@components/Header';
import CartItem from '@components/CartItem';
import Title from '@components/micro-components/Title';
import Button from '@components/micro-components/Button';
import '@styles/cart.scss';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(isLoading => !isLoading);
    }
    loadData();
  }, []);

  const handleDeleteCart = () => {
    store.dispatch({ type: "DELETE_CART" });
  }

  return (
    <>
      <Header/>
      {isLoading ? (
        <ReactLoading className='react-loader' type="spin" color="#425acd" height={50} width={50} />
      ) : (
        <div className="cart">
          <div className="cart-container">
            <div className="cart-header">
              <Title size="xxxlarge" color="#000">Cart</Title>
              <div className='cart-info'>
                <p>Items: <span>{cart.length}</span></p>
                <p>Total: <span>${totalPrice}</span></p>
                <p className='clean-cart' onClick={() => handleDeleteCart()}>Clean cart</p>
              </div>
            </div>
            <div className="cart-body">
              {cart.map((item) => <CartItem key={item.id} product={item} />)}
            </div>
            <div className="cart-footer">
              <Button primary disabled={cart.length === 0} onClick={() => {
                window.location.href = '/checkout';
              }} >Checkout</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;