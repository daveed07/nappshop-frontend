import React from "react";
import Image from "@micro-components/Image";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Button from "@components/micro-components/Button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Cart2 from "@svg-components/Cart2";
import CartFill from "@svg-components/CartFill";
import BagFill from "@svg-components/BagFill";
import Truck from "@svg-components/Truck";
import StyledProduct from "@styles/styledProduct";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const ProductContent = ({
  product,
  loading,
  cart,
  image,
  setImage,
  handleAddToCart,
  handleBuyNow,
}) => {
  return (
    <StyledProduct>
      <div className="product-container">
        <section className="product-section">
          <div className="product-images">
            <Image
              display
              loading={loading}
              src={image || product.images[0] || assets.product_placeholder}
              alt={product.name}
              id={product.id}
              nohref
            />
            <div className="display-images">
              {product.images.map((i, index) =>
                loading ? (
                  <Skeleton
                    key={index}
                    className="image-skeleton"
                    width={100}
                    height={100}
                  />
                ) : (
                  <div
                    key={index}
                    className="image-container"
                    style={
                      image === i
                        ? {
                            border: `2px solid ${colors.greyDark}`,
                            borderRadius: "8px",
                          }
                        : null
                    }
                  >
                    <Image
                      cart
                      key={index}
                      src={i}
                      loading={loading}
                      alt={product.name}
                      id={product.id}
                      nohref
                      onClick={() => setImage(i)}
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <div className="product-info">
            <Title size="xxxxlarge" color={colors.black}>
              {loading && <Skeleton width={320} />}
              {!loading && product.name}
            </Title>
            <SubTitle size="large" color={colors.black}>
              {loading && <Skeleton width={220} />}
              {!loading && product.type}
            </SubTitle>
            <div className="price-container">
              <p className="product-price">
                <p className="current-price">
                  {loading && <Skeleton width={120} height={60} />}
                  {!loading && (
                    <span>
                      $
                      {Number.isInteger(product.price)
                        ? product.price + ".00"
                        : product.price}
                    </span>
                  )}
                </p>
                <p className="previous-price">
                  {loading && <Skeleton width={120} height={20} />}
                  {!loading && <span>(${product.compare_at_price})</span>}
                </p>
              </p>
              <div className="product-shipping">
                <div>
                  {loading && <Skeleton width={20} height={20} inline={true} />}
                  {!loading && <Truck />}
                  <p>
                    {loading && <Skeleton width={100} height={20} />}
                    {!loading
                      ? product.brand === "iRobot"
                        ? "Free shipping"
                        : "Starts at $4.50"
                      : null}
                  </p>
                </div>
                <p>
                  {loading && <Skeleton width={120} height={20} />}
                  {!loading && "Next day delivery"}
                </p>
              </div>
            </div>
            <div className="button-container">
              {product.stock <= 0 ? (
                loading ? (
                  <Skeleton width={193} height={60} />
                ) : (
                  <Button disabled>Out of stock</Button>
                )
              ) : (
                <>
                  {loading && <Skeleton width={193} height={60} />}
                  {!loading && (
                    <Button
                      secondary
                      buy
                      onClick={() => handleAddToCart(product)}
                    >
                      {cart.find((item) => item.id === product.id) ? (
                        <CartFill width={24} height={24} />
                      ) : (
                        <Cart2 width={24} height={24} />
                      )}
                      {cart.find((item) => item.id === product.id)
                        ? "Added to cart"
                        : "Add to cart"}
                    </Button>
                  )}
                  {loading && <Skeleton width={193} height={60} />}
                  {!loading && (
                    <Button primary buy onClick={() => handleBuyNow()}>
                      <BagFill width={24} height={24} />
                      Buy now
                    </Button>
                  )}
                </>
              )}
            </div>
            <p className="product-description">
              {loading && <Skeleton width="100%" height={20} count={5} />}
              {!loading && product.description}
            </p>
          </div>
        </section>
      </div>
    </StyledProduct>
  );
};

export default ProductContent;
