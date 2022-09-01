import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import Header from "@components/Header";
import Image from "@micro-components/Image";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Button from "@components/micro-components/Button";
import StyledLoading from "@styles/styledLoading";
import Cart2 from "@svg-components/cart2";
import CartFill from "@svg-components/CartFill";
import BagFill from "@svg-components/BagFill";
import Truck from "@svg-components/Truck";
import useGetProducts from "@hooks/useGetProducts";
import StyledProduct from "@styles/styledProduct";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const API = process.env.REACT_APP_API;

const Product = () => {
  const { id } = useParams();
  const product = useGetProducts(`${API}/products/${id}`);

  const cart = useSelector((state) => state.cart);
  const [loadingPage, setLoadingPage] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    const loadPage = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoadingPage((loading) => !loading);
    };
    loadPage();
  }, []);

  useEffect(() => {
    const loadImage = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoadingImage((loading) => !loading);
    };
    loadImage();
  }, []);

  const handleAddToCart = (article) => {
    if (!cart.find((item) => item.id === article.id)) {
      store.dispatch({
        type: "ADD_TO_CART",
        payload: { ...product, quantity: 1 },
      });
      setCartIcon(addedToCartIcon);
    } else {
      store.dispatch({ type: "REMOVE_FROM_CART", payload: product });
      setCartIcon(addToCartIcon);
    }
  };
  const handleBuyNow = (article) => {
    store.dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: 1 },
    });
    window.location.href = "/checkout";
  };
  return (
    <>
      <Header />
      {loadingPage ? (
        <StyledLoading
          className="react-loader"
          type="spin"
          color={colors.main}
          height={50}
          width={50}
        />
      ) : (
        <StyledProduct>
          <div className="product-container">
            <section className="product-section">
              <Image
                display
                loading={loadingImage}
                src={product.image || assets.product_placeholder}
                alt={product.name}
                id={product.id}
                nohref
              />
              <div className="product-info">
                <Title size="xxxxlarge" color={colors.black}>
                  {product.name}
                </Title>
                <SubTitle size="large" color={colors.black}>
                  {product.type}
                </SubTitle>
                <div className="price-container">
                  <p className="product-price">
                    <p className="current-price">
                      <span>$</span>
                      {product.price}
                    </p>
                    <p className="previous-price">
                      (<span>$</span>
                      {product.previous_price})
                    </p>
                  </p>
                  <div className="product-shipping">
                    <div>
                      <Truck />
                      <p>Starts at $4.50</p>
                    </div>
                    <p>Next day delivery</p>
                  </div>
                </div>
                <div className="button-container">
                  {product.stock <= 0 ? (
                    <Button disabled>Out of stock</Button>
                  ) : (
                    <>
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
                      <Button primary buy onClick={() => handleBuyNow()}>
                        <BagFill width={24} height={24} />
                        Buy now
                      </Button>
                    </>
                  )}
                </div>
                <p className="product-description">{product.description}</p>
              </div>
            </section>
          </div>
        </StyledProduct>
      )}
    </>
  );
};

export default Product;
