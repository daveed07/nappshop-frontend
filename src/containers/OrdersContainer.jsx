import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useGetOrders from '@hooks/useGetOrders';
import Order from '@components/Order';
import Title from '@micro-components/Title';
import StyledOrdersContainer from '@styles/styledOrdersContainer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import colors from '@constants/colors';
import { env } from '@constants/env';

const OrdersContainer = (props) => {
  const id = useSelector((state) => state.user.id);
  const orders = useGetOrders(`${env.API}/orders?user_id=${id}`);

  return (
    <StyledOrdersContainer>
      <Title size="xxlarge" color={colors.black}>
        {props.loading && <Skeleton className="title-skeleton" width={160} />}
        {!props.loading && 'My Orders'}
      </Title>
      <div className="orders-list">
        {orders.map(order => (
          <Order key={order.order_id} order={order} loading={props.loading} />
        ))}
      </div>
    </StyledOrdersContainer>
  );
}

export default OrdersContainer;