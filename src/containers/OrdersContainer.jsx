import React from 'react';
import { useSelector } from 'react-redux';
import useGetOrders from '@hooks/useGetOrders';
import Order from '@components/Order';
import Title from '@micro-components/Title';
import StyledOrdersContainer from '@styles/styledOrdersContainer';
import colors from '@constants/colors';
import { env } from '@constants/env';

const OrdersContainer = () => {
  const id = useSelector((state) => state.user.id);
  const orders = useGetOrders(`${env.API}/orders?user_id=${id}`);

  return (
    <StyledOrdersContainer>
      <Title size="xxlarge" color={colors.black}>Orders</Title>
      <div className="orders-list">
        {orders.map(order => (
          <Order key={order.order_id} order={order} />
        ))}
      </div>
    </StyledOrdersContainer>
  );
}

export default OrdersContainer;