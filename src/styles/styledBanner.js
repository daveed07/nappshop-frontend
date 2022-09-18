import styled from "styled-components";

const StyledBanner = styled.div`
  height: 450px;
  position: relative;
  padding-top: 32px;
  text-align: center;

  img {
    height: 450px;
  }

  @media (max-width: 992px) {
    img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    padding-top: 84px;
    img {
      width: 100%;
      height: 320px;
      object-fit: cover;
    }
  }
`;

export default StyledBanner;
