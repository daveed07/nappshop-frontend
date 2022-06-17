import React from "react";
import styled, { css } from "styled-components";
import sizes from "@constants/fontSizes";

const Nav = (props) => {
  return (
    <StyledNav mobile={props.mobile}>
      <StyledUl
        justifyContent={props.justifyContent}
        gap={props.gap}
        wrap={props.wrap}
        mobileList={props.mobileList}
      >
        {props.items
          ? props.items.map((item) => {
              return (
                <StyledLi>
                  <StyledA
                    color={props.color}
                    href={`/categories/${item.id}/products?Limit=100&offset=100`}
                  >
                    {item.text}
                  </StyledA>
                </StyledLi>
              );
            })
          : props.children}
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }
  ${props => props.mobileList && css`
    justify-content: flex-start;
  `}
`;

const StyledUl = styled.ul`
  height: 84px;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  flex-wrap: ${(props) => props.wrap};
  gap: ${(props) => props.gap};
  list-style: none;
  margin: 0;
  padding: 0;
  ${props => props.mobileList && css`
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
    }
  `}
`;

const StyledLi = styled.li`
  cursor: pointer;
  font-size: ${sizes.medium};
`;

const StyledA = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: ${(props) => props.color};
`;

export default Nav;
