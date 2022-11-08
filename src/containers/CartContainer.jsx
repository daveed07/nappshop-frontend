import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import CartItem from "@components/CartItem";
import Title from "@micro-components/Title";
import Button from "@micro-components/Button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "@constants/colors";

const CartContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading((isLoading) => !isLoading);
    };
    loadData();
  }, []);

  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleDeleteCart = () => {
    store.dispatch({ type: "DELETE_CART" });
    store.dispatch({ type: "RESET_COSTS" });
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <Title size="xxxlarge" color={colors.black}>
          {isLoading && <Skeleton width={100} height={40} />}
          {!isLoading && "Carrito"}
        </Title>
        <div className="cart-info">
          <p>
            {isLoading && <Skeleton width={60} height={20} />}
            {!isLoading &&
              `${cart.length} ${cart.length > 1 ? "artículos" : "artículo"}`}
          </p>
          <p>
            {isLoading && <Skeleton width={100} height={20} />}
            {!isLoading &&
              `Total: ${totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}`}
          </p>
          <p className="clean-cart" onClick={() => handleDeleteCart()}>
            {isLoading && <Skeleton width={80} height={20} />}
            {!isLoading && "Limpiar carrito"}
          </p>
        </div>
      </div>
      <div className="cart-body">
        {cart.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <div className="cart-footer">
        {isLoading && (
          <div className="button-skeleton-container">
            <Skeleton width="100%" height={48} />
          </div>
        )}
        {!isLoading && (
          <Button
            primary
            disabled={cart.length === 0}
            onClick={() => {
              window.location.href = "/checkout";
            }}
          >
            Checkout
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
