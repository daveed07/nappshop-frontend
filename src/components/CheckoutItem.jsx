import React, { useState, useEffect } from "react";
import Image from "@micro-components/Image";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import StyledCheckoutItem from "@styles/styledCheckoutItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const CheckoutItem = ({ product, loading }) => {
  const price = product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <StyledCheckoutItem>
      <Image
        checkout
        src={product.images[0] || assets.product_placeholder}
        alt={product.name}
        id={product.id}
        loading={loading}
      >
        <span className="quantity">{product.quantity}</span>
      </Image>
      <div className="info">
        <Title size="medium" color={colors.black}>
          {loading && <Skeleton width={160} height={18} />}
          {!loading && product.name}
        </Title>
        <SubTitle size="medium" color={colors.black}>
          {loading && <Skeleton width={60} height={18} />}
          {!loading && price}
        </SubTitle>
      </div>
    </StyledCheckoutItem>
  );
};

export default CheckoutItem;
