import React from "react";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Image from "@components/micro-components/Image";
import StyledOrderItem from "@styles/styledOrderItem";
import colors from "@constants/colors";
import useGetProducts from "@hooks/useGetProducts";

const API = process.env.REACT_APP_API;

const OrderItem = ({ item }) => {
  const product = useGetProducts(`${API}/products/${item.product_id}`);

  return (
    <StyledOrderItem className="order-item">
      <Image checkout src={item.product_image || product.image} alt="product_image">
        <span className='quantity'>{item.quantity}</span>
      </Image>
      <div className="info">
        <Title size="medium" color={colors.black}>
          {item.product_name}
        </Title>
        <SubTitle size="medium" color={colors.black}>
          ${item.product_price || product.price}
        </SubTitle>
      </div>
    </StyledOrderItem>
  );
};

export default OrderItem;
