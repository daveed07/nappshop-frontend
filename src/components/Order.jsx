import React, { useState } from "react";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Down from "@svg-components/Down";
import Up from "@svg-components/Up";
import OrderItem from "@components/OrderItem";
import StyledOrder from "@styles/styledOrder";
import colors from "@constants/colors";

const Order = ({ order }) => {
  const [toggle, setToggle] = useState(false);
  const date = new Date(order.date_created).toLocaleDateString();

  return (
    <StyledOrder toggle={toggle}>
      <div className="order-header">
        <Title size="medium" color={colors.black}>
          Order #{order.order_id}
        </Title>
        <div className="order-header-info">
          <SubTitle size="medium" color={colors.black}>
            Placed on {date}
          </SubTitle>
          <SubTitle size="medium" color={colors.black}>
            ${order.total}
          </SubTitle>
          {toggle ? (
            <Up onClick={() => setToggle(!toggle)} />
          ) : (
            <Down onClick={() => setToggle(!toggle)} />
          )}
        </div>
      </div>
      {toggle && (
        <div className="order-body">
          <div className="order-body-info">
            <div className="shipping-address">
              {order.shipping_address.address1 ? (
                <>
                  <p>
                    {order.shipping_address.address1},{" "}
                    {order.shipping_address.address2}
                  </p>
                  <p>{order.shipping_address.city}</p>
                  <p>{order.shipping_address.province}</p>
                </>
              ) : (
                <p>Store pickup</p>
              )}
            </div>
            <div className="payment-method">
              <p>{order.payment_method}</p>
            </div>
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
