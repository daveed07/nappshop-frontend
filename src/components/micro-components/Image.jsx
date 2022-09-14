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
      ) : (props.nohref ? (
          <>
          <StyledImage
            src={props.src}
            alt={props.alt}
            display={props.display}
            cart={props.cart}
            checkout={props.checkout}
            profile={props.profile}
          />
          {props.children}
          </>
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
      ))}
    </StyledFigure>
  );
};

const StyledFigure = styled.figure`
  position: relative;
  height: auto;
  min-height: 200px;
  @media (max-width: 768px) {
    height: auto;
    min-height: 140px;
  }
  ${(props) =>
    props.display &&
    css`
      min-height: 375px;
      width: 100%;
      max-width: 500px;
      text-align: right;
      @media (max-width: 768px) {
        height: auto;
        min-height: 300px;
        text-align: center;
      }
    `}
  ${(props) =>
    props.cart &&
    css`
      height: 100px;
      min-height: 100px;
      width: 100px;

      @media (max-width: 768px) {
        height: 100px;
        min-height: 100px;
        max-height: 100px;
      }
    `}
  ${(props) =>
    props.checkout &&
    css`
      height: 50px;
      min-height: 50px;
      width: 50px;

      @media (max-width: 768px) {
        height: 50px;
        min-height: 50px;
        max-height: 50px;
      }
    `}
  ${(props) =>
    props.logo &&
    css`
      height: 84px;
      width: 84px;
      min-height: 84px;

      @media (max-width: 768px) {
        height: 84px;
        min-height: 84px;
        max-height: 84px;
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
