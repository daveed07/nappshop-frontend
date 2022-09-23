import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@components/Header";
import Banner from "@components/Banner";
import ProductSection from "@containers/ProductSection";
import "react-loading-skeleton/dist/skeleton.css";
import { sections } from "@constants/sections";

const Home = () => {
  const { brand } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      {brand ? (
        <ProductSection
          loading={loading}
          text={brand}
          filter={{ brand: brand, category: "all", type: "all" }}
        />
      ) : (
        sections.map((section) => (
          <ProductSection
            key={section.text}
            loading={loading}
            text={section.text}
            filter={section.filter}
          />
        ))
      )}
    </>
  );
};

export default Home;
