import styled from 'styled-components';

const StyledProductItem = styled.div`
  .product-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    figure {
      height: auto;
    }
  }
`;

export default StyledProductItem;