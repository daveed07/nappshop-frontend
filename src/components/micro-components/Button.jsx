import React from 'react';
import styled, { css } from 'styled-components';

const Button = (props) => {
  return (
    <StyledButton {...props} type="button">
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 48px;
  width: 100%;
  min-width: 84px;
  margin: 24px 0;
  padding: 8px;
  border: none;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  ${props => props.primary && css`
    color: #fff;
    background-color: #425acd;
    &:hover {
      background-color: #2f4bae;
    }
  `}
  ${props => props.secondary && css`
    color: #425acd;
    background-color: #fff;
    border: 2px solid #425acd;
    &:hover {
      color: #2f4bae;
      border: 2px solid #2f4bae;
    }
  `}
  ${props => props.icon && css`
    height: auto;
    width: auto;
    min-width: auto;
    margin: 0;
    padding: 10px;
    &:hover {
      background-color: #2f4bae;
    }
  `}
  ${props => props.disabled && css`
    color: #425acd;
    background-color: #f5f5f5;
    &:hover {
      background-color: #f5f5f5;
    }
  `}
  ${props => props.buy && css`
    height: auto;
    padding: 16px 24px;
    margin: 0;
  `}
`

export default Button;