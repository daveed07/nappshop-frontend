import React from "react";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Image from "@micro-components/Image";
import StyledOrderItem from "@styles/styledOrderItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const OrderItem = ({ item, loading }) => {
  const name =
    item.product_name?.length > 28 ? item.product_name.slice(0, 28) + "..." : item.product_name;

  const price = item.product_price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <StyledOrderItem className="order-item">
      <Image
        checkout
        src={item.product_images[0] || assets.product_placeholder}
        id={item.product_id}
        alt="product_image"
        loading={loading}
      >
        <span className="quantity">{item.product_quantity}</span>
      </Image>
      <div className="info">
        <Title size="medium" color={colors.black}>
          {loading && <Skeleton width={160} height={18} />}
          {!loading && name}
        </Title>
        <SubTitle size="medium" color={colors.black}>
          {loading && <Skeleton width={60} height={18} />}
          {!loading && price}
        </SubTitle>
      </div>
    </StyledOrderItem>
  );
};

export default OrderItem;
