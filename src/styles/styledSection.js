import styled from "styled-components";

const StyledSection = styled.section`;
  max-width: 1200px;
  padding: 64px 0 0;
  margin: 0 auto;

  
  > h1 {
    margin-left: 16px;
  }

  .title-skeleton {
    width: 420px;

    @media (max-width: 768px) {
      width: 80%;
    }
  }
`

export default StyledSection;