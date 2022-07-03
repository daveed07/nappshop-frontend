import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "@hooks/useGetProducts";
import ProductItem from "@components/ProductItem";
import StyledProductContainer from "@styles/styledProductContainer";
import StyledLoading from "@styles/styledLoading";
import colors from "@constants/colors";

const API = process.env.REACT_APP_API;

const ProductContainer = () => {
  const { brand } = useParams();
  const products = useGetProducts(
    `${API}${
      brand
        ? `/products?filterByBrand=${brand}`
        : "/products"
    }`
  );

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <StyledLoading
        className="react-loader"
        type="spin"
        color={colors.main}
        height={50}
        width={50}
      />
    );
  } else {
    return (
      <StyledProductContainer>
        <div className="product-wrapper">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </StyledProductContainer>
    );
  }
};

export default ProductContainer;
