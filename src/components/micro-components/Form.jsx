import React from 'react';
import styled from 'styled-components';

const Form = (props) => {
  return (
    <StyledForm {...props}>
      {props.children}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  min-width: 320px;
  width: ${props => props.width || '100%'};
`;

export default Form;