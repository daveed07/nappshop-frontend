import styled from 'styled-components';

const StyledProductItem = styled.div`
  .text-container {
    margin-top: 24px;
  }

  .product-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    figure {
      height: 105px;
    }
  }
`;

export default StyledProductItem;