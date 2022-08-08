import React, { useEffect, useState } from 'react';
import image from '../assets/logos/Nappshop Banner.png';
import StyledBanner from '@styles/styledBanner';

const Banner = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  if (loading) {
    return;
  }

  return (
    <StyledBanner>
      <figure>
        <img src={image} alt="Nappshop Banner" />
      </figure>
    </StyledBanner>
  );
}

export default Banner;