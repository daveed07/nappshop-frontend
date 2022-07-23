import styled from 'styled-components';
import colors from '@constants/colors';

const StyledOrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${colors.greyLight};
  border-radius: 4px;
  padding: 16px;

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .info h1 {
    margin-bottom: 0;
  }
`;

export default StyledOrderItem;