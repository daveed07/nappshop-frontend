import styled from "styled-components";
import colors from "@constants/colors";
import sizes from "@constants/fontSizes";

const StyledFailure = styled.div`
  padding: 64px 2%;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 64px;
  }

  .wrapper {
    max-width: 768px;
    margin: 0 auto;
    text-align: center;
  }

  h1, p {
    margin-top: 16px;
  }

  p {
    line-height: 24px;
  }

  .button-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    justify-content: center;
    margin-top: 16px;
    padding: 0 32px;
  }
`

export default StyledFailure;