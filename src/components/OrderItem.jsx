import React from "react";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Image from "@components/micro-components/Image";
import StyledOrderItem from "@styles/styledOrderItem";
import colors from "@constants/colors";
import useGetProducts from "@hooks/useGetProducts";

const API = process.env.REACT_APP_API;
const productImage = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const OrderItem = ({ item }) => {
  return (
    <StyledOrderItem className="order-item">
      <Image checkout src={item.product_image || productImage} alt="product_image">
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
