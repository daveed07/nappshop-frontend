import React from "react";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Image from "@components/micro-components/Image";
import StyledOrderItem from "@styles/styledOrderItem";
import colors from "@constants/colors";

const OrderItem = ({ item }) => {
  return (
    <StyledOrderItem>
      <Image checkout src={item.product_image} alt="product_image">
        <span className='quantity'>{item.quantity}</span>
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
