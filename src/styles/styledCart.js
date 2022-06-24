import styled from 'styled-components';
import colors from '@constants/colors';

const StyledCart = styled.div`
  padding-top: 64px;

  @media (max-width: 768px) {
    padding-top: 96px;
  }

  .cart-container {
    max-width: 624px;
    min-width: 320px;
    margin: 0 auto;
    padding: 24px;
    border: 1px solid ${colors.greyLight};
    border-radius: 4px;
  }

  .cart-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 34px;
  }
  .cart-info {
    text-align: end;
  }
  .clean-cart {
    color: ${colors.mainDark};
    margin-top: 24px;
    cursor: pointer;
  }
  .cart-body {
    display: grid;
    grid-gap: 24px;
  }
`;

export default StyledCart;