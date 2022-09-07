import React, { useState, useEffect } from 'react';
import Image from '@micro-components/Image';
import Title from '@micro-components/Title';
import SubTitle from '@micro-components/SubTitle';
import StyledCheckoutItem from '@styles/styledCheckoutItem';
import colors from '@constants/colors';
import { assets } from '@constants/assets';

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
    <StyledCheckoutItem>
      <Image checkout src={product.images[0] || assets.product_placeholder} alt={product.name} id={product.id} loading={isLoading}>
        <span className='quantity'>{product.quantity}</span>
      </Image>
      <div className="info">
        <Title size="medium" color={colors.black}>{product.name}</Title>
        <SubTitle size="medium" color={colors.black}>${parseFloat(product.price * product.quantity).toFixed(2)}</SubTitle>
      </div>
    </StyledCheckoutItem>
  );
}

export default CheckoutItem;