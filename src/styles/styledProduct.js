import styled from "styled-components";
import colors from "@constants/colors";
import sizes from "@constants/fontSizes";

const styledProduct = styled.div`
  padding: 64px 4%;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 64px;
  }

  .product-container {
    margin: 0 auto;
    @media (max-width: 768px) {
      padding: 32px 0;
    }
  }

  .product-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    justify-content: center;

    @media (max-width: 992px) {
      gap: 48px;
    }

    .product-images {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }

    .display-images {
      position: relative;
      width: 100%;
      max-width: 500px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      gap: 32px;
      margin-top: 16px;
      overflow: hidden;

      @media (max-width: 768px) {
        margin: 8px 0 32px 0;
      }
    }

    .image-container {
      padding: 4px;
    }

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
    margin-top: 24px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .current-price {
    display: flex;
    align-items: flex-end;
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
    width: fit-content;
    padding: 20px 24px;
    background: ${colors.greyLight};
    border-radius: 8px;
  }

  .product-shipping div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .product-shipping p {
    font-size: var(--md);
  }

  .product-shipping div p {
    color: ${colors.main};
    font-weight: 600;
    margin: 0;
  }

  .product-shipping > p {
    text-align: right;
  }

  .button-container {
    width: 400px;
    display: flex;
    justify-content: start;
    gap: 16px;
    margin-top: 48px;

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
