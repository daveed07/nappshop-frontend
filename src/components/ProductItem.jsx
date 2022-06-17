import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import Image from "@components/micro-components/Image";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Button from "@components/micro-components/Button";
import "@styles/product-item.scss";
import addToCartIcon from "@icons/cart.svg";
import addedToCartIcon from "@icons/cart-check-fill.svg";

const ProductItem = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const [cartIcon, setCartIcon] = useState(cart.find(item => item.id === product.id) ? addedToCartIcon : addToCartIcon);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(loading => !loading);
    }
    loadData();
  }, []);

  const handleAddToCart = (article) => {
    if (!cart.find(item => item.id === article.id)) {
      store.dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
      setCartIcon(addedToCartIcon);
    } else {
      store.dispatch({ type: "REMOVE_FROM_CART", payload: product });
      setCartIcon(addToCartIcon);
    }
  }

  return (
    <div className="product-item">
        <Image loading={loading} src={product.images[0]} alt={product.title} id={product.id} />
      <div className="text-container">
        <a href={`/product/${product.id}`}>
          <Title size="medium" color="#425acd">{product.title}</Title>
        </a>
        <SubTitle size="small" color="#000">{`${product.description.substring(0, 40)}...`}</SubTitle>
        <div className="product-bottom">
          <SubTitle size="medium" color="#425acd">${product.price}</SubTitle>
          <Button secondary icon onClick={() => handleAddToCart(product)}><img src={cartIcon} /></Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
