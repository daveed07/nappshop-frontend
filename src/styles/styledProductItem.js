import styled from 'styled-components';

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

  @media (max-width: 768px) {
    figure {
      height: auto;
    }
  }
`;

export default StyledProductItem;