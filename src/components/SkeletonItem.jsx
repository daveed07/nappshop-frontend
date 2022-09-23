import React from "react";
import Image from "@micro-components/Image";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Button from "@micro-components/Button";
import Cart from "@svg-components/Cart";
import StyledProductItem from "@styles/styledProductItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const SkeletonItem = () => {
  return (
    <StyledProductItem>
      <Image loading={true} src={assets.product_placeholder} />
      <div className="text-container">
        <a href={`/products`}>
          <Title size="medium" color={colors.main}>
            <div className="title-skeleton-container">
              <Skeleton className="title-skeleton" count={2} />
            </div>
          </Title>
        </a>
        <SubTitle size="small" color={colors.black}>
          <div className="description-skeleton-container">
            <Skeleton className="description-skeleton" count={2} />
          </div>
        </SubTitle>
        <div className="product-bottom">
          <SubTitle size="medium" color={colors.main}>
            <Skeleton className="price-skeleton" height={14} width={60} />
          </SubTitle>
          <Skeleton className="button-skeleton" height={40} width={40} />
        </div>
      </div>
    </StyledProductItem>
  );
};

export default SkeletonItem;
