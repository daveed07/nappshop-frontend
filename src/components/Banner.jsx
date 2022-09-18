import React, { useEffect, useState } from "react";
import { assets } from "@constants/assets";
import StyledBanner from "@styles/styledBanner";
import StyledLoading from "@styles/styledLoading";
import Skeleton from "react-loading-skeleton";
import colors from "@constants/colors";

const Banner = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  return (
    <StyledBanner>
      <Skeleton width={100} height={320} />
    </StyledBanner>
  );
};

export default Banner;
