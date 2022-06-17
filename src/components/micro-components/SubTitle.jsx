import React from 'react';
import styled from 'styled-components';
import sizes from '@constants/fontSizes';

const SubTitle = (props) => {
  return (
    <StyledSubTitle size={props.size} color={props.color}>
      {props.children}
    </StyledSubTitle>
  );
}

const StyledSubTitle = styled.p`
  font-size: ${props => sizes[props.size]};
  font-weight: 500;
  color: ${props => props.color || '#000'};
`;

export default SubTitle;