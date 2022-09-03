import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "@hooks/useGetProducts";
import ProductItem from "@components/ProductItem";
import StyledProductContainer from "@styles/styledProductContainer";
import { env } from "@constants/env";

const ProductContainer = (props) => {
  // filter by category or brand, if send by props or by url
  const { category, brand } = useParams();
  const products = useGetProducts(
    `${env.API}/products?filterByCategory=${category || props.category || ""}&filterByBrand=${brand || props.brand || ""}`
  )

  console.log(brand);

  return (
    <StyledProductContainer>
      <div className="product-wrapper">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </StyledProductContainer>
  );
};

export default ProductContainer;
