import styled from 'styled-components';
import colors from '@constants/colors';

const StyledProductItem = styled.div`
  .product-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-skeleton-container {
    width: 100%;
    margin-bottom: 4px;
  }

  .title-skeleton {
    width: 100%;
    max-width: 200px;
    margin-bottom: 4px;
  }

  .description-skeleton-container {
    margin-bottom: 4px;
  }

  .description-skeleton {
    margin-bottom: 4px;
  }

  .product__discount {
    position: absolute;
    top: 0;
    right: 0;
    width: 65px;
    height: 65px;
    background-color: ${colors.main};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    border-radius: 50%;
  }

  .product__discount--text {
    color: ${colors.white};
    font-size: 18px;
    font-weight: 700;
    padding: 4px 8px;
  }

  @media (max-width: 768px) {
    figure {
      height: auto;
    }
  }
`;

export default StyledProductItem;