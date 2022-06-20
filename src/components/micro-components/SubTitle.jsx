import React from 'react';
import styled from 'styled-components';
import sizes from '@constants/fontSizes';
import colors from '@constants/colors';

const SubTitle = (props) => {
  return (
    <StyledSubTitle className={props.className} size={props.size} color={props.color}>
      {props.children}
    </StyledSubTitle>
  );
}

const StyledSubTitle = styled.p`
  font-size: ${props => sizes[props.size]};
  font-weight: 500;
  color: ${props => props.color || colors.black};
`;

export default SubTitle;