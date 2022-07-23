import React, { useState } from "react";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Down from "@components/svg-components/Down";
import OrderItem from "@components/OrderItem";
import StyledOrder from "@styles/styledOrder";
import colors from "@constants/colors";

const Order = ({ order }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledOrder toggle={toggle}>
      <div className="order-header">
        <Title size="medium" color={colors.black}>
          Order #{order.order_id}
        </Title>
        <div className="order-header-info">
          <SubTitle size="medium" color={colors.black}>
            Placed on 12/12/2019
          </SubTitle>
          <SubTitle size="medium" color={colors.black}>
            ${order.total}
          </SubTitle>
          <Down onClick={() => setToggle(!toggle)} />
        </div>
      </div>
      {toggle && (
        <div className="order-body">
          <div className="shipping-address">
            <p>{order.shipping_address.country}</p>
            <p>{order.shipping_address.address1}, {order.shipping_address.address2}</p>
            <p>{order.shipping_address.city}</p>
            <p>{order.shipping_address.province}</p>
          </div>
          <div className="order-items">
            {order.order_items.map((item) => (
              <OrderItem key={item.product_id} item={item} />
            ))}
          </div>
        </div>
      )}
    </StyledOrder>
  );
};

export default Order;
