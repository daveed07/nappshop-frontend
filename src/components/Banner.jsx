import React, { useEffect, useState } from "react";
import { assets } from "@constants/assets";
import StyledBanner from "@styles/styledBanner";
import StyledLoading from "@styles/styledLoading";
import colors from "@constants/colors";

const Banner = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  if (loading) {
    console.log("loading");
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
      <StyledBanner>
        <img src={assets.banner} alt="banner" />
      </StyledBanner>
    );
  }
};

export default Banner;
