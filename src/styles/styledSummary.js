import styled from 'styled-components';
import colors from '@constants/colors';
import sizes from '@constants/fontSizes';

const StyledSummary = styled.div`
  width: 46%;
  min-width: 400px;
  padding-right: 16%;
  background: ${colors.greyLight};
  border-left: 1px solid ${colors.grey};
  padding: 60px 48px 60px;

  .checkout-summary-items {
    max-width: calc(462px + 5vw);
  }

  .checkout-summary {
    width: 100%;
    display: grid;
    gap: 24px;
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${colors.grey};
  }

  .discount-code-container {
    display: grid;
    grid-template-columns: auto auto;
    gap: 24px;
    margin-top: 24px;
    padding-bottom: 24px;
  }

  .checkout-summary-items {
    margin: 0 auto;
  }

  .checkout-summary-prices {
    border-top: 1px solid ${colors.grey};
  }

  .checkout-summary-prices, .checkout-summary-total {
    width: 100%;
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${colors.grey};
  }

  .checkout-summary-total {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 24px;
    border-bottom: none;
  }

  .checkout-summary-prices-item {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 24px;
    margin-top: 16px;
  }

  .checkout-summary-prices-item-price, .checkout-summary-total-price {
    text-align: right;
    color: ${colors.greyDark};
  }

  .checkout-summary-total-price {
    font-size: ${sizes.large};
    font-weight: 600;
    color : ${colors.black};
  }

  .checkout-summary-total-title {
    font-size: ${sizes.large};
    font-weight: 600;
  }

  @media (max-width: 948px) {
    width: 100%;
    padding: 64px 4%;

    .checkout-summary-container {
      width: 100%;
      border-left: none;
    }

    .checkout-summary-items {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .checkout-summary {
      width: 100%;
      justify-content: center;
    }
  }
`;

export default StyledSummary;