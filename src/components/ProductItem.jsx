import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import Image from "@micro-components/Image";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Button from "@micro-components/Button";
import Cart from "@svg-components/Cart";
import StyledProductItem from "@styles/styledProductItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const ProductItem = ({ product, loading }) => {
  const cart = useSelector((state) => state.cart);
  const [add, setAdd] = useState(
    cart.find((item) => item.id === product.id) ? colors.white : colors.main
  );

  const handleAddToCart = (article) => {
    if (!cart.find((item) => item.id === article.id)) {
      store.dispatch({
        type: "ADD_TO_CART",
        payload: { ...product, quantity: 1 },
      });
      setAdd(colors.white);
    } else {
      store.dispatch({ type: "REMOVE_FROM_CART", payload: product });
      setAdd(colors.main);
    }
  };

  return (
    <StyledProductItem>
      <Image
        loading={loading}
        src={product.images[0] || assets.product_placeholder}
        alt={product.name}
        id={product.id}
      />
      <div className="text-container">
        <a href={`/products/${product.id}`}>
          <Title size="medium" color={colors.main}>
            {loading && (
              <div className="title-skeleton-container">
                <Skeleton className="title-skeleton" count={2} />
              </div>
            )}
            {!loading && product.name}
          </Title>
        </a>
        <SubTitle size="small" color={colors.black}>
          {loading && (
            <div className="description-skeleton-container">
              <Skeleton className="description-skeleton" count={2} />
            </div>
          )}
          {!loading && `${product.description.substring(0, 40)}...`}
        </SubTitle>
        <div className="product-bottom">
          <SubTitle size="medium" color={colors.main}>
            {loading && (
              <Skeleton className="price-skeleton" height={14} width={60} />
            )}
            {!loading && `$${product.price}`}
          </SubTitle>
          {loading && (
            <Skeleton className="button-skeleton" height={40} width={40} />
          )}
          {!loading &&
            (product.stock <= 0 ? (
              <Button
                secondary
                disabled
                borderColor="transparent"
                icon
                add={add === colors.main ? colors.white : colors.main}
                onClick={() => handleAddToCart(product)}
              >
                <Cart width={18} height={18} fill={add} />
              </Button>
            ) : (
              <Button
                secondary
                icon
                add={add === colors.main ? colors.white : colors.main}
                onClick={() => handleAddToCart(product)}
              >
                <Cart width={18} height={18} fill={add} />
              </Button>
            ))}
        </div>
      </div>
    </StyledProductItem>
  );
};

export default ProductItem;
