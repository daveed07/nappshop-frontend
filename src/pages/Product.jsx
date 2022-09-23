import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import Header from "@components/Header";
import ProductContent from "@containers/ProductContent";
import SkeletonProductContent from "@containers/SkeletonProductContent";
import useGetProducts from "@hooks/useGetProducts";

const API = process.env.REACT_APP_API;

const Product = () => {
  const { id } = useParams();
  const product = useGetProducts(`${API}/products/${id}`);

  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading((loading) => !loading);
    };
    loadData();
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
  const handleBuyNow = () => {
    store.dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: 1 },
    });
    window.location.href = "/checkout";
  };

  return (
    <>
      <Header />
      {Object.keys(product).length > 0 ? (
        <ProductContent
          product={product}
          loading={loading}
          cart={cart}
          image={image}
          setImage={setImage}
          handleAddToCart={handleAddToCart}
          handleBuyNow={handleBuyNow}
        />
      ) : (
        <SkeletonProductContent />
      )}
    </>
  )
};

export default Product;
