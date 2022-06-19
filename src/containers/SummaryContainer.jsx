import React from "react";
import { useSelector } from 'react-redux';
import CheckoutItem from "@components/CheckoutItem";
import Title from "@components/micro-components/Title";
import Input from "@components/micro-components/Input";
import Button from "@components/micro-components/Button";

const SummaryContainer = (props) => {
  const cart = useSelector(state => state.cart);
  const costs = useSelector(state => state.costs);
  const subtotal = props.subtotal || costs.subtotal;
  const total = props.total || costs.total;
  const totalWithShipping = props.totalWithShipping || costs.totalWithShipping;
  const shipping = props.shipping || costs.shipping;
  const tax = props.tax || costs.tax;
  return (
    <div className="checkout-summary-container">
      <Title size="xxxlarge" color="#000">Summary</Title>
      <div className="checkout-summary-items">
        <div className="checkout-summary">
          {cart.map((product) => (
            <CheckoutItem key={product.id} product={product} />
          ))}
        </div>
        <div className="discount-code-container">
          <Input marginBottom="0" type="text" id="discountCode" placeholder="Discount code" />
          <Button primary icon>Apply</Button>
        </div>
        <div className="checkout-summary-prices">
          <div className="checkout-summary-prices-item">
            <p className="checkout-summary-prices-item-title">Subtotal</p>
            <p className="checkout-summary-prices-item-price">${subtotal}</p>
          </div>
          <div className="checkout-summary-prices-item">
            <p className="checkout-summary-prices-item-title">Tax</p>
            <p className="checkout-summary-prices-item-price">${tax}</p>
          </div>
          <div className="checkout-summary-prices-item">
            <p className="checkout-summary-prices-item-title">Shipping</p>
            <p className="checkout-summary-prices-item-price">
              {typeof shipping === "string" ? shipping : `$${shipping}`}
            </p>
          </div>
        </div>
        <div className="checkout-summary-total">
          <p className="checkout-summary-total-title">Total</p>
          <p className="checkout-summary-total-price">
            ${typeof shipping === "string" ? total : totalWithShipping}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryContainer;
