import React, { useState, useEffect } from "react";
import Header from "@components/Header";
import ProductContainer from "@containers/ProductContainer";
import Title from "@micro-components/Title";
import Banner from "@components/Banner";
import StyledSection from "@styles/styledSection";
import StyledLoading from "@styles/styledLoading";
import colors from "@constants/colors";

const Home = () => {
  const [loadPage, setLoadPage] = useState(true);
  const [loadSection, setLoadSection] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoadPage((loadPage) => !loadPage);
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoadSection((loadSection) => !loadSection);
    };
    loadData();
  }, []);

  if (loadPage) {
    return (
      <StyledLoading
        className="react-loader"
        type="spin"
        color={colors.main}
        height={50}
        width={50}
      />
    );
  } else {
    return (
      <>
        <Header />
        <Banner />
        {loadSection ? (
          <StyledLoading
            className="react-loader"
            type="spin"
            color={colors.main}
            height={50}
            width={50}
          />
        ) : (
          <>
            <StyledSection>
              <Title size="xxxlarge">What's New</Title>
              <ProductContainer category="accesories" />
            </StyledSection>
            <StyledSection>
              <Title size="xxxlarge">IRobot Roombas are back!</Title>
              <ProductContainer category="products" brand="iRobot" />
            </StyledSection>
            <StyledSection>
              <Title size="xxxlarge">Delonghi Collections</Title>
              <ProductContainer category="accesories" brand="DeLonghi" />
            </StyledSection>
          </>
        )}
      </>
    );
  }
};

export default Home;
