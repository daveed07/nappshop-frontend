import React from 'react';
import styled, { css } from 'styled-components';
import colors from '@constants/colors';

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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 24px 0;
  padding: 8px;
  border: none;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  ${props => props.primary && css`
    color: ${colors.white};
    background-color: ${colors.main};
    &:hover {
      background-color: ${colors.mainDark};
    }
  `}
  ${props => props.secondary && css`
    color: ${colors.main};
    background-color: ${colors.white};
    border: 2px solid ${colors.main};
    &:hover {
      color: ${colors.mainDark};
      border: 2px solid ${colors.mainDark};
    }
  `}
  ${props => props.icon && css`
    height: auto;
    width: auto;
    min-width: auto;
    margin: 0;
    padding: 10px;
    background: ${props.add || colors.white};
    &:hover {
      border-color: ${colors.mainDark};
      color: ${colors.white};
    }
  `}
  ${props => props.buy && css`
    height: auto;
    padding: 16px 24px;
    margin: 0;
  `}
  ${props => props.disabled && css`
    color: ${colors.main};
    background-color: ${colors.greyLight};
    border: ${props.borderColor ? `2px solid ${props.borderColor}` : `none`};
    &:hover {
      background-color: ${colors.greyLight};
      border: ${props.borderColor ? `2px solid ${props.borderColor}` : `none`};
    }
  `}
`

export default Button;