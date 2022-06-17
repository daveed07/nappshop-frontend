import React from 'react';
import Title from '@components/micro-components/Title';
import Nav from '@components/micro-components/Nav';
import '@styles/mobile-menu.scss';

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <div className='menu-container'>
        <Title size="xxxlarge" color="#000">Categories</Title>
        <Nav
        items={[
          { id: 1, text: "iRobot" },
          { id: 2, text: "Oster" },
          { id: 3, text: "Cuisinart" },
          { id: 4, text: "Philips" },
          { id: 5, text: "Nutribullet" },
          { id: 6, text: "DeLonghi" },
          { id: 7, text: "Dolce Gusto" },
          { id: 8, text: "Nespresso" },
          { id: 9, text: "Pioneer" },
        ]}
        mobileList
        mobile
      />
      </div>
    </div>
  );
}

export default MobileMenu