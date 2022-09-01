import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import Image from "@micro-components/Image";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Button from "@micro-components/Button";
import Cart from "@svg-components/Cart";
import StyledProductItem from "@styles/styledProductItem";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const ProductItem = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const [add, setAdd] = useState(
    cart.find((item) => item.id === product.id) ? colors.white : colors.main
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
      setAdd(colors.white);
    } else {
      store.dispatch({ type: "REMOVE_FROM_CART", payload: product });
      setAdd(colors.main);
    }
  };

  return (
    <StyledProductItem>
      <Image
        loading={loading}
        src={product.image || assets.product_placeholder}
        alt={product.name}
        id={product.id}
      />
      <div className="text-container">
        <a href={`/products/${product.id}`}>
          <Title size="medium" color={colors.main}>
            {product.name}
          </Title>
        </a>
        <SubTitle
          size="small"
          color={colors.black}
        >{`${product.description.substring(0, 40)}...`}</SubTitle>
        <div className="product-bottom">
          <SubTitle size="medium" color={colors.main}>
            ${product.price}
          </SubTitle>
          {product.stock <= 0 ? (
            <Button
              secondary
              disabled
              borderColor="transparent"
              icon
              add={add === colors.main ? colors.white : colors.main}
              onClick={() => handleAddToCart(product)}
            >
              <Cart width={18} height={18} fill={add} />
            </Button>
          ) : (
            <Button
              secondary
              icon
              add={add === colors.main ? colors.white : colors.main}
              onClick={() => handleAddToCart(product)}
            >
              <Cart width={18} height={18} fill={add} />
            </Button>
          )}
        </div>
      </div>
    </StyledProductItem>
  );
};

export default ProductItem;
