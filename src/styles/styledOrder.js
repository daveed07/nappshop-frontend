import styled from "styled-components";
import colors from "@constants/colors";

const StyledOrder = styled.div`
  text-align: left;
  padding: 24px;
  padding-bottom: ${(props) => (props.toggle ? "24px" : "0")};
  border: 1px solid ${colors.greyLight};
  border-radius: 4px;

  .order-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${(props) => (props.toggle ? "16px" : "0")};
  }

  .order-header-info {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .order-item h1 {
    margin-bottom: 0;
  }

  svg {
    cursor: pointer;
  }

  .order-body-info {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 16px;
  }

  .payment-method {
    text-align: right;
  }

  .order-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .order-item {
    display: flex;
    justify-content: space-between;
    border: 1px solid ${colors.greyLight};
    border-radius: 4px;
    padding: 16px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .skeleton-container {
    display: flex;
    flex-direction: column;
  }

  .skeleton-address {
    margin-top: 8px;
  }
`;
export default StyledOrder;
