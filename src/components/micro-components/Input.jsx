import React from 'react';
import styled from 'styled-components';
import sizes from '@constants/fontSizes';
import colors from '@constants/colors';

const Input = (props) => {
  return (
    <>
      {props.label && <StyledLabel htmlFor={props.id}>{props.name}</StyledLabel>}
      <StyledInput {...props} />
    </>
  );
}

const StyledInput = styled.input`
  height: 48px;
  width: 100%;
  margin-bottom: ${props => props.marginBottom || '16px'};
  padding: 8px 12px;
  border: 1px solid ${colors.grey};
  border-radius: 8px;
  font-size: var(--sm);
  font-weight: 500;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1.4px ${colors.main};
  }
  ${props => props.type === 'checkbox' && `
    width: 20px;
    height: 20px;
    accent-color: ${colors.main};
    margin: 0;
  `}
  ${props => props.type === 'radio' && `
    width: 18px;
    height: 18px;
    border-width: 8px;
    border-color: ${colors.main};
    border: 1px solid;
    accent-color: ${colors.main};
    cursor: pointer;
    margin: 0;
    &:focus {
      box-shadow: none;
    }
  `}
`;

const StyledLabel = styled.label`
  display: block;
  font-size: ${sizes.small};
  color: ${colors.greyDark};
  margin-bottom: 8px;
`;

export default Input;