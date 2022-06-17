import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import Image from '@components/micro-components/Image';
import "@styles/checkout-item.scss";

const CheckoutItem = ({ product }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(isLoading => !isLoading);
    }
    loadData();
  }, []);

  return (
    <div className="checkout-item">
      <Image checkout src={product.images[0]} alt={product.name} id={product.id} loading={isLoading}>
        <span className='checkout-item-quantity'>{product.quantity}</span>
      </Image>
      <div className="checkout-item-info">
        <h3 className='title'>{product.title}</h3>
        <p className='price'>${product.price * product.quantity}</p>
      </div>
    </div>
  );
}

export default CheckoutItem;