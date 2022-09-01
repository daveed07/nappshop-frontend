import React from "react";
import Header from "@components/Header";
import ProductContainer from "@containers/ProductContainer";
import Banner from "@components/Banner";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductContainer />
    </>
  );
};

export default Home;
