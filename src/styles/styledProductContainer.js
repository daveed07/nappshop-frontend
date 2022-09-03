import styled from 'styled-components';

const StyledProductContainer = styled.div`
  padding: 32px 4%;
  margin: 0 auto;

  .product-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    justify-content: center;
    gap: 24px;
  }

  @media (max-width: 768px) {
    padding-top: 32px;
    
    .product-wrapper {
      grid-template-columns: repeat(auto-fill, 160px);
    }
  }
`;

export default StyledProductContainer;