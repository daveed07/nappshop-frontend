import styled from 'styled-components';

const StyledProductContainer = styled.div`
  padding: 64px 4%;
  margin: 0 auto;

  .product-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    justify-content: center;
    gap: 34px;
  }

  @media (max-width: 768px) {
    .product-container {
      padding: 96px 0;
    }
    .product-wrapper {
      grid-template-columns: repeat(auto-fill, 140px);
    }
  }
`;

export default StyledProductContainer;