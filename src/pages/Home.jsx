import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@components/Header";
import ProductContainer from "@containers/ProductContainer";
import Title from "@micro-components/Title";
import Banner from "@components/Banner";
import StyledSection from "@styles/styledSection";
import StyledLoading from "@styles/styledLoading";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoadSection((loadSection) => !loadSection);
    };
    loadData();
  }, []);

  const { brand } = useParams();

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
      ) : brand ? (
        <StyledSection>
          <Title size="xxxlarge" className="section-title">
            {brand}
          </Title>
          <ProductContainer />
        </StyledSection>
      ) : (
        <>
          <StyledSection>
            <Title size="xxxlarge" className="section-title">
              <Skeleton />
            </Title>
            <ProductContainer category="accesories" />
          </StyledSection>
          <StyledSection>
            <Title size="xxxlarge" className="section-title">
              IRobot Roombas are back!
            </Title>
            <ProductContainer category="products" brand="iRobot" />
          </StyledSection>
          <StyledSection>
            <Title size="xxxlarge" className="section-title">
              Delonghi Collections
            </Title>
            <ProductContainer category="accesories" brand="DeLonghi" />
          </StyledSection>
        </>
      )}
    </>
  );
};

export default Home;
