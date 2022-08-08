import styled from 'styled-components';

const StyledProductContainer = styled.div`
  padding: 32px 4% 64px;
  margin: 0 auto;

  .product-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    justify-content: center;
    gap: 24px;
  }

  @media (max-width: 768px) {
    padding: 96px 0;
    
    .product-wrapper {
      grid-template-columns: repeat(auto-fill, 140px);
    }
  }
`;

export default StyledProductContainer;