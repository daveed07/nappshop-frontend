import React from "react";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Image from "@micro-components/Image";
import StyledOrderItem from "@styles/styledOrderItem";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const OrderItem = ({ item }) => {
  return (
    <StyledOrderItem className="order-item">
      <Image checkout src={item.product_images[0] || assets.product_placeholder} id={item.product_id} alt="product_image">
        <span className='quantity'>{item.product_quantity}</span>
      </Image>
      <div className="info">
        <Title size="medium" color={colors.black}>
          {item.product_name}
        </Title>
        <SubTitle size="medium" color={colors.black}>
          ${item.product_price}
        </SubTitle>
      </div>
    </StyledOrderItem>
  );
};

export default OrderItem;
