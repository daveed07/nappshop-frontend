import React, { useState } from "react";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import MobileMenu from "@components/MobileMenu";
import Image from "@micro-components/Image";
import Nav from "@micro-components/Nav";
import Button from "@micro-components/Button";
import PersonFill from "@svg-components/PersonFill";
import BoxArrowRight from "@svg-components/BoxArrowRight";
import Cart from "@svg-components/Cart";
import List from "@svg-components/List";
import StyledHeader from "@styles/styledHeader";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const handleLogout = () => {
    store.dispatch({ type: "LOGOUT" });
  };

  return (
    <StyledHeader>
      <Image logo src={assets.logo} alt="logo" />
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
        justifyContent="center"
        gap="0 16px"
        wrap="wrap"
        color={colors.black}
      />
      <Nav
        justifyContent="center"
        gap="24px"
        wrap="nowrap"
        color={colors.black}
        mobile
      >
        {isLoggedIn ? (
          <>
            <a href="/perfil">
              <PersonFill />
            </a>
            <a href="/">
              <BoxArrowRight onClick={handleLogout} />
            </a>
          </>
        ) : (
          <>
            <Button secondary onClick={() => (window.location.href = "/login")}>
              Iniciar sesión
            </Button>
            <Button primary onClick={() => (window.location.href = "/signup")}>
              Registrarse
            </Button>
          </>
        )}
        <a href="/carrito">
          <div className="cart-container">
            <Cart width={24} height={24} />
            {cart.length > 0 ? (
              <span className="quantity">{cart.length}</span>
            ) : (
              false
            )}
          </div>
        </a>
        <div className="menu-container">
          <List width={24} height={24} onClick={() => setToggle(!toggle)} />
        </div>
        {toggle && <MobileMenu />}
      </Nav>
    </StyledHeader>
  );
};

export default Header;
