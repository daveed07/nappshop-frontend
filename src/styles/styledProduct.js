import styled from 'styled-components';
import colors from '@constants/colors';
import sizes from '@constants/fontSizes';

const styledProduct = styled.div`
  padding: 64px 4%;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 64px;
  }

  .product-container {
    margin: 0 auto;
    padding: 32px 0;
  }

  .product-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    justify-content: center;

    @media (max-width: 768px) {
      width: 100%;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 0;
    }
  }

  p {
    margin-top: 8px;
  }

  .price-container {
    width: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-top: 16px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .current-price {
    font-size: ${sizes.xxxxlarge};
    font-weight: 800;
    color: ${colors.main};
  }

  .current-price span {
    font-size: ${sizes.xxxlarge};
    margin-right: 2px;
  }

  .previous-price {
    font-size: ${sizes.medium};
    font-weight: 600;
    color: ${colors.mainDark};
    text-decoration: line-through;
  }

  .previous-price span {
    font-size: ${sizes.small};
    margin-right: 1px;
  }

  .product-shipping {
    padding: 20px;
    background: ${colors.greyLight};
    border-radius: 8px;
  }

  .product-shipping div {
    display: grid;
    grid-template-columns: auto auto;
  }

  .product-shipping p {
    font-size: var(--md);
    margin-left: 8px;
  }

  .product-shipping div p {
    color: ${colors.main};
    font-weight: 600;
    margin: 0;
  }

  .product-shipping > p {
    margin-top: 8px;
    margin-left: 24px
  }

  .button-container {
    width: 400px;
    display: flex;
    justify-content: start;
    gap: 16px;
    margin-top: 32px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .product-description {
    width: 80%;
    min-width: 400px;
    font-size: ${sizes.medium};
    margin-top: 42px;
    line-height: 1.6rem;

    @media (max-width: 768px) {
      width: 100%;
      min-width: 100%;
    }
  }
`;

export default styledProduct;