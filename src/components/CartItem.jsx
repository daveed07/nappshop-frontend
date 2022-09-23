import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import Image from "@micro-components/Image";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Button from "@micro-components/Button";
import Dash from "@svg-components/Dash";
import Plus from "@svg-components/Plus";
import Trash from "@svg-components/Trash";
import StyledCartItem from "@styles/styledCartItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const CartItem = ({ product }) => {
  const cart = useSelector((state) => state.cart);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading((isLoading) => !isLoading);
    };
    loadData();
  }, []);

  const handleCartRemove = (product) => {
    store.dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const handleCartChange = (product, quantity) => {
    store.dispatch({
      type: "CHANGE_PRODUCT_QUANTITY",
      payload: { product, quantity: Number(quantity) },
    });
  };

  return (
    <StyledCartItem>
      <Image
        cart
        src={product.images[0] || assets.product_placeholder}
        alt={product.name}
        id={product.id}
        loading={isLoading}
      />
      <div className="info">
        <Title size="medium" color={colors.black}>
          {isLoading && <Skeleton width={140} height={20} />}
          {!isLoading && product.name}
        </Title>
        <SubTitle className="description" size="small" color={colors.greyDark}>
          {isLoading && <Skeleton width={160} count={2} />}
          {!isLoading && `${product.description.substring(0, 40)}...`}
        </SubTitle>
        <SubTitle size="medium" color={colors.black}>
          {isLoading && <Skeleton width={60} height={20} />}
          {!isLoading &&
            `$${parseFloat(product.price * product.quantity).toFixed(2)}`}
        </SubTitle>
      </div>
      <div className="actions">
        <div className="quantity">
          {isLoading && <Skeleton width={40} height={40} />}
          {!isLoading && (
            <Button
              secondary
              icon
              onClick={() =>
                product.quantity > 1
                  ? handleCartChange(product, product.quantity - 1)
                  : handleCartRemove(product)
              }
              disabled={product.quantity === 1}
            >
              <Dash />
            </Button>
          )}
          {isLoading && <Skeleton width={40} height={40} />}
          {!isLoading && (
            <input
              type="number"
              placeholder={cart.find((item) => item.id === product.id).quantity}
              onChange={(e) =>
                e.target.value >= 0
                  ? handleCartChange(product, Number(e.target.value))
                  : 0
              }
              value={(e) =>
                e.target.value > product.stock
                  ? product.stock
                  : cart.find((item) => item.id === product.id).quantity
              }
              disabled={(e) => (e.target.value >= product.stock ? true : false)}
            />
          )}
          {isLoading && <Skeleton width={40} height={40} />}
          {!isLoading && (
            <Button
              secondary
              icon
              onClick={() => {
                handleCartChange(product, product.quantity + 1);
              }}
              disabled={product.quantity >= product.stock}
            >
              <Plus />
            </Button>
          )}
        </div>
        {isLoading && <Skeleton width={40} height={40} />}
        {!isLoading && (
          <Button secondary icon onClick={() => handleCartRemove(product)}>
            <Trash />
          </Button>
        )}
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
