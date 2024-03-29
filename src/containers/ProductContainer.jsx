import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "@hooks/useGetProducts";
import ProductItem from "@components/ProductItem";
import SkeletonItem from "@components/SkeletonItem";
import StyledProductContainer from "@styles/styledProductContainer";
import { env } from "@constants/env";

const ProductContainer = ({ filter, loading }) => {
  console.log(filter)
  const { brand } = useParams();
  const queryUrl = `${env.API}/products?${
    brand
      ? `filterByBrand=${brand}`
      : filter && filter.brand !== "all"
      ? `filterByBrand=${filter.brand}`
      : ""
  }${
    filter && filter.category !== "all"
      ? `&filterByCategory=${filter.category}`
      : ""
  }${filter && filter.type !== "all" ? `&filterByType=${filter.type}&` : ""}`;
  const products = useGetProducts(queryUrl);

  console.log(queryUrl);

  return (
    <StyledProductContainer>
      <div className="product-wrapper">
        {products.length > 0
          ? products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                loading={loading}
              />
            ))
          : [1, 2, 3, 4, 5].map((product) => <SkeletonItem key={product} />)}
      </div>
    </StyledProductContainer>
  );
};

export default ProductContainer;
