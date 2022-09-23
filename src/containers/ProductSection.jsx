import React from "react";
import Title from "@micro-components/Title";
import ProductContainer from "@containers/ProductContainer";
import StyledSection from "@styles/styledSection";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSection = ({ loading, text, filter }) => {
  return (
    <StyledSection>
      <Title size="xxxlarge" className="section-title">
        {loading && <Skeleton className="title-skeleton" />}
        {!loading && text}
      </Title>
      <ProductContainer loading={loading} filter={filter} />
    </StyledSection>
  );
};

export default ProductSection;
