import React from "react";
import styled, { css } from "styled-components";
import StyledLoading from "@styles/styledLoading";
import colors from "@constants/colors";

const Image = (props) => {
  return (
    <StyledFigure {...props}>
      {props.loading ? (
        <StyledLoading
          className="react-loader"
          type="bubbles"
          color={colors.main}
          height={50}
          width={50}
        />
      ) : (
        <a href={
          `${props.logo ? "/" : "/products/" + props.id}` ||
          `${props.profile ? "/profile" : "/products/" + props.id}`
        }>
          <StyledImage
            src={props.src}
            alt={props.alt}
            display={props.display}
            cart={props.cart}
            checkout={props.checkout}
            profile={props.profile}
          />
          {props.children}
        </a>
      )}
    </StyledFigure>
  );
};

const StyledFigure = styled.figure`
  height: auto;
  @media (max-width: 768px) {
    height: auto;
  }
  position: relative;
  ${(props) =>
    props.display &&
    css`
      height: 375px;
      text-align: right;
      @media (max-width: 768px) {
        height: 240px;
        text-align: center;
      }
    `}
  ${(props) =>
    props.cart &&
    css`
      height: 100px;
      width: 100px;
    `}
  ${(props) =>
    props.checkout &&
    css`
      height: 50px;
      width: 50px;
    `}
  ${(props) =>
    props.logo &&
    css`
      height: 84px;
      width: 84px;
      @media (max-width: 768px) {
        height: 84px;
      }
    `}
  ${(props) =>
    props.profile &&
    css`
      height: 200px;
      width: 200px;
      border-radius: 100px;

      @media (max-width: 768px) {
        height: auto;
      }
    `}
`;

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  ${(props) =>
    props.display &&
    css`
      width: 500px;
      @media (max-width: 768px) {
        width: 100%;
      }
    `}
  ${(props) =>
    props.cart &&
    css`
      height: 100px;
      width: 100px;
    `}
  ${(props) =>
    props.checkout &&
    css`
      height: 50px;
      width: 50px;
    `}
  ${(props) =>
    props.logo &&
    css`
      height: 84px;
      width: 84px;
    `}
  ${(props) =>
    props.profile &&
    css`
      width: 200px;
      height: 200px;
      border-radius: 100px;
    `}
`;

export default Image;
