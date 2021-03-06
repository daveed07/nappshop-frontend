import React, { useState } from "react";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import MobileMenu from "./MobileMenu";
import Image from "@components/micro-components/Image";
import Nav from "@components/micro-components/Nav";
import Button from "@components/micro-components/Button";
import logo from "@logos/jada-logo.png";
import PersonFill from "./svg-components/PersonFill";
import BoxArrowRight from "./svg-components/BoxArrowRight";
import Cart from "./svg-components/Cart";
import List from "./svg-components/List";
import StyledHeader from "@styles/styledHeader";
import colors from "@constants/colors";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const handleLogout = () => {
    store.dispatch({ type: "LOGOUT" });
  };

  return (
    <StyledHeader>
      <Image logo src={logo} alt="Jada Logo" />
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
      <Nav justifyContent="center" gap="24px" wrap="nowrap" color={colors.black} mobile>
        {isLoggedIn ? (
          <>
            <a href="/profile">
              <PersonFill />
            </a>
            <a href="/">
              <BoxArrowRight onClick={handleLogout} />
            </a>
          </>
        ) : (
          <>
            <Button secondary onClick={() => (window.location.href = "/login")}>Log in</Button>
            <Button primary onClick={() => (window.location.href = "/signup")}>Sign up</Button>
          </>
        )}
        <a href="/cart">
          <div className="cart-container">
            <Cart width={24} height={24} />
            {cart.length > 0 ? (
              <span className="quantity">{cart.length}</span>
            ) : null}
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
