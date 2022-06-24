import React, { useState, useEffect } from "react";
import Header from "@components/Header";
import CartContainer from "@containers/CartContainer";
import StyledLoading from "@styles/styledLoading";
import StyledCart from "@styles/styledCart";
import colors from "@constants/colors";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading((isLoading) => !isLoading);
    };
    loadData();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <StyledLoading
          className="react-loader"
          type="spin"
          color={colors.main}
          height={50}
          width={50}
        />
      ) : (
        <StyledCart>
          <CartContainer />
        </StyledCart>
      )}
    </>
  );
};

export default Cart;
