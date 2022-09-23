import React from "react";
import Image from "@micro-components/Image";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import StyledProduct from "@styles/styledProduct";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const SkeletonProductContent = () => {
  return (
    <StyledProduct>
      <div className="product-container">
        <section className="product-section">
          <div className="product-images">
            <Image
              display
              loading={true}
              src={assets.product_placeholder}
              nohref
            />
            <div className="display-images">
              {[1, 2, 3].map((i, index) => (
                <Skeleton
                  key={index}
                  className="image-skeleton"
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
          <div className="product-info">
            <Title size="xxxxlarge" color={colors.black}>
              <Skeleton width={320} />
            </Title>
            <SubTitle size="large" color={colors.black}>
              <Skeleton width={220} />
            </SubTitle>
            <div className="price-container">
              <p className="product-price">
                <p className="current-price">
                  <Skeleton width={120} height={60} />
                </p>
                <p className="previous-price">
                  <Skeleton width={120} height={20} />
                </p>
              </p>
              <div className="product-shipping">
                <div>
                  <Skeleton width={20} height={20} inline={true} />
                  <p>
                    <Skeleton width={100} height={20} />
                  </p>
                </div>
                <p>
                  <Skeleton width={120} height={20} />
                </p>
              </div>
            </div>
            <div className="button-container">
              <Skeleton width={193} height={60} />
              <Skeleton width={193} height={60} />
            </div>
            <p className="product-description">
              <Skeleton width="100%" height={20} count={5} />
            </p>
          </div>
        </section>
      </div>
    </StyledProduct>
  );
};

export default SkeletonProductContent;
