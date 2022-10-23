import styled from "styled-components";
import colors from "@constants/colors";
import sizes from "@constants/fontSizes";

const StyledSuccess = styled.div`
  padding: 64px 2%;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 64px;
  }

  .wrapper {
    max-width: 1200px;
    margin: 0 auto 64px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    text-align: center;

    @media (max-width: 768px) {
      width: 100%;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 64px;
    }
  }
  .order-message p, .order-message h1 {
    margin-top: 16px;
  }
  .order-message p {
    line-height: 24px
  }
  .bottom {
    max-width: 1200px;
    margin: 0 auto 64px;
  }
  .button-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .order-summary {
    border: 1px solid ${colors.grey};
    border-radius: 8px;
    padding: 16px 0;
  }
  .order-summary h1 {
    padding: 0 16px 16px;
  }
  .order-summary-content {
    border: 1px solid ${colors.grey};
    border-right: none;
    border-left: none;
    padding: 16px;
  }
  .order-items {
    padding: 16px 0 0;
    margin-bottom: 16px;
    border-bottom: 1px solid ${colors.grey};
  }
  .order-item {
    border: none;
    padding: 0 0 16px;
  }
  .order-summary p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
  }
  .order-summary p span:nth-child(2) {
    font-weight: 500;
  }
  #total {
    border-top: 1px solid ${colors.grey};
    padding-top: 16px;
  }
  #paid {
    padding: 16px 16px 0;
  }
  #paid span:nth-child(2) {
    font-size: ${sizes.xlarge};
    font-weight: 500;
    color: ${colors.main};
  }

  .info h1 {
    text-align: right;
  }
`;
export default StyledSuccess;
