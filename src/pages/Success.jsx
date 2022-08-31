import React from "react";
import { useParams } from "react-router-dom";
import useGetOrders from "@hooks/useGetOrders";
import StyledSuccess from "@styles/styledSuccess";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Button from "@components/micro-components/Button";
import ProductContainer from "@containers/ProductContainer";
import OrderItem from "@components/OrderItem";
import Check from "@components/svg-components/Check"

const API = process.env.REACT_APP_API;
const WA_NUMBER = process.env.WA_NUMBER;

const Success = () => {
  const { order_id } = useParams() || 88;
  const order = useGetOrders(`${API}/orders/${order_id}`);
  return (
    <StyledSuccess>
      <div className="wrapper">
        <div className="order-message">
          <Check width="96" height="96"/>
          <Title>Thanks for your order!</Title>
          <SubTitle>
            Your shop is on the way. Please check your email for order
            confirmation and detailed delivery information or contact us at
            WhatsApp <a href={`https://wa.me/${WA_NUMBER}`}>{WA_NUMBER}</a> to have
            more information about your order
          </SubTitle>
          <div className="button-container">
            <Button
              primary
              onClick={() => {
                window.location.replace("/");
              }}
            >
              Continue Shopping
            </Button>
            <Button
              secondary
              onClick={() => {
                window.location.replace("/profile");
              }}
            >
              See order
            </Button>
          </div>
        </div>
        <div className="order-summary">
          <Title>Order Summary</Title>
          <div className="order-summary-content">
            <div className="order-items">
              {order.order_items &&
                order.order_items.map((item) => (
                  <OrderItem key={item.product_id} item={item} />
                ))}
            </div>
            <p>
              <span>Subtotal</span>
              <span>${parseFloat(order.subtotal).toFixed(2)}</span>
            </p>
            <p>
              <span>Shipping</span>
              <span>${parseFloat(order.shipping).toFixed(2)}</span>
            </p>
            <p>
              <span>Tax</span>
              <span>${parseFloat(order.subtotal * 0.07).toFixed(2)}</span>
            </p>
            {order.discount !== "0" ? (
              <p>Discount: -${order.discount}</p>
            ) : null}
            <p id="total">
              <span>Total</span>
              <span>${order.total}</span>
            </p>
          </div>
          <p id="paid">
            <span>Paid</span>
            <span>${order.total}</span>
          </p>
        </div>
      </div>
      <div className="bottom">
        <Title>Other products that might interest you</Title>
        <ProductContainer />
      </div>
    </StyledSuccess>
  );
};

export default Success;