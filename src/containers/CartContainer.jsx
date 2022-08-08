import React from "react";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import CartItem from "@components/CartItem";
import Title from "@components/micro-components/Title";
import Button from "@components/micro-components/Button";
import colors from "@constants/colors";

const CartContainer = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleDeleteCart = () => {
    store.dispatch({ type: "DELETE_CART" });
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <Title size="xxxlarge" color={colors.black}>
          Cart
        </Title>
        <div className="cart-info">
          <p>
            Items: <span>{cart.length}</span>
          </p>
          <p>
            Total: <span>${parseFloat(totalPrice).toFixed(2)}</span>
          </p>
          <p className="clean-cart" onClick={() => handleDeleteCart()}>
            Clean cart
          </p>
        </div>
      </div>
      <div className="cart-body">
        {cart.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <div className="cart-footer">
        <Button
          primary
          disabled={cart.length === 0}
          onClick={() => {
            window.location.href = "/checkout";
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartContainer;
