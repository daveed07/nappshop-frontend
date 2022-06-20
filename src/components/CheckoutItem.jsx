import React, { useState, useEffect } from 'react';
import Image from '@components/micro-components/Image';
import Title from '@components/micro-components/Title';
import SubTitle from '@components/micro-components/SubTitle';
import StyledCheckoutItem from '@styles/styledCheckoutItem';
import colors from '@constants/colors';

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
      <Image checkout src={product.images[0]} alt={product.title} id={product.id} loading={isLoading}>
        <span className='quantity'>{product.quantity}</span>
      </Image>
      <div className="info">
        <Title size="medium" color={colors.black}>{product.title}</Title>
        <SubTitle size="medium" color={colors.black}>${product.price * product.quantity}</SubTitle>
      </div>
    </StyledCheckoutItem>
  );
}

export default CheckoutItem;