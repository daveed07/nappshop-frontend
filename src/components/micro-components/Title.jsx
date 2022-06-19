import React from 'react';
import styled from 'styled-components';
import sizes from '@constants/fontSizes';
import colors from '@constants/colors';

const Title = (props) => {
  return (
    <StyledTitle size={props.size} color={props.color}>
      {props.children}
    </StyledTitle>
  );
}

const StyledTitle = styled.h1`
  font-size: ${props => sizes[props.size]};
  font-weight: 800;
  color: ${props => props.color || colors.black};
`;

export default Title