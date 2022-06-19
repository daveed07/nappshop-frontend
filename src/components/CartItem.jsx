import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import ReactLoading from 'react-loading';
import { store } from "@redux/store";
import '@styles/cartItem.scss';
import Image from '@components/micro-components/Image';
import Title from '@components/micro-components/Title';
import SubTitle from '@components/micro-components/SubTitle';
import Button from '@components/micro-components/Button';
import Dash from './svg-components/Dash';
import Plus from './svg-components/Plus';
import Trash from './svg-components/Trash';
import plus from '@icons/plus.svg';
import minus from '@icons/dash.svg';
import trash from '@icons/trash3.svg';

const CartItem = ({ product }) => {
  const cart = useSelector((state) => state.cart);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(isLoading => !isLoading);
    }
    loadData();
  }, []);

  const handleCartRemove = product => {
    store.dispatch({ type: "REMOVE_FROM_CART", payload: product });
  }

  const handleCartChange = (product, quantity) => {
    store.dispatch({ type: "CHANGE_PRODUCT_QUANTITY", payload: { product, quantity: Number(quantity) } });
  }

  return (
    <div className="cart-item">
      <Image cart src={product.images[0]} alt={product.name} id={product.id} loading={isLoading} />
      <div className="cart-item-info">
        <Title size="medium" color="#000">{product.title}</Title>
        <SubTitle size="small" color="#90949f">{`${product.description.substring(0, 40)}...`}</SubTitle>
        <SubTitle size="medium" color="#000">${product.price * product.quantity}</SubTitle>
      </div>
      <div className="cart-item-actions">
        <div className="cart-item-quantity">
          <Button secondary icon onClick={() => {
            if (product.quantity > 1) {
              handleCartChange(product, product.quantity - 1);
            }
          }}>
            <Dash />
          </Button>
          <input className='quantity' type='number' placeholder={
            cart.find(item => item.id === product.id).quantity
          } onChange={e => {
            if (e.target.value >= 0) {
              handleCartChange(product, Number(e.target.value));
            }
          }} value={
            cart.find(item => item.id === product.id).quantity
          }/>
          <Button secondary icon onClick={() => {
            handleCartChange(product, product.quantity + 1);
          }}>
            <Plus />
          </Button>
        </div>
        <Button secondary icon onClick={() => handleCartRemove(product)}>
          <Trash />
        </Button>
      </div>
    </div>
  );
}

export default CartItem;