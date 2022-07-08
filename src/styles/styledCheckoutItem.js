import styled from 'styled-components';
import colors from '@constants/colors';
import sizes from '@constants/fontSizes';

const StyledCheckoutItem = styled.div`
  display: flex;
  grid-template-columns: auto 3fr;
  gap: 24px;

  figure {
    height: 50px;
  }

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
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 24px;
    padding-top: 24px;
  }

  @media (max-width: 948px) {
    h1 {
      max-width: 200px;
    }
  }
`;

export default StyledCheckoutItem;