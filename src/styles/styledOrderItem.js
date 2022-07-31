import styled from 'styled-components';
import colors from '@constants/colors';
import sizes from '@constants/fontSizes';

const StyledOrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${colors.greyLight};
  border-radius: 4px;
  padding: 16px;
  gap: 16px;

  .quantity {
    width: 18px;
    height: 18px;
    position: absolute;
    top: -8px;
    right: -8px;
    background: ${colors.main};
    color: ${colors.white};
    font-size: ${sizes.small};
    font-weight: 600;
    border-radius: 50%;
    text-align: center;
  }

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