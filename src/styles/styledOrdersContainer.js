import styled from 'styled-components';
import colors from '@constants/colors';

const StyledOrdersContainer = styled.div`
  min-width: 320px;
  max-width: 768px;
  height: fit-content;
  display: block;
  padding: 42px;
  border: 1px solid ${colors.greyLight};
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;

export default StyledOrdersContainer;