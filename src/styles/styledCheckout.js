import styled from 'styled-components';
import colors from '@constants/colors';``

const StyledCheckout = styled.div`
  .checkout-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .checkout-form-container {
    padding: 60px 48px 60px;
    width: 54%;
    min-width: 600px;
    padding-left: 16%;
  }

  .checkout-form-row {
    margin-top: 24px;
  }

  .checkout-steps {
    display: flex;
    gap: 8px;
    margin-top: 24px;
    font-weight: 500;
  }

  .checkout-form-top-text {
    display: flex;
    justify-content: space-between;
  }

  .checkout-form-links {
    display: grid;
    grid-template-columns: auto auto;
    gap: 24px;
  }

  .checkout-form-input {
    display: grid;
    gap: 8px;
    margin-top: 16px;
  }

  .contact-info-form-top {
    display: flex;
    gap: 8px;
  }
  .contact-info-form-bottom {
    display: flex;
    gap: 8px;
  }

  .marketing-checkbox {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 8px;
  }

  .checkout-form-input select {
    height: 48px;
    border: 1px solid ${colors.grey};
    border-radius: 8px;
    margin-bottom: 16px;
    padding: 8px;
    font-size: 16px;
    font-weight: 400;
    background-color: ${colors.white};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .shipping-form-container {
    gap: 8px;
    margin-top: 24px;
  }

  .shipping-form {
    display: grid;
    grid-template-columns: auto auto;
    padding: 16px;
    border: 1px solid ${colors.grey};
    border-radius: 8px;
  }

  .shipping-form div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .shipping-form div:last-child {
    justify-content: flex-end;
  }

  .shipping-input {
    width: 18px;
    height: 18px;
    border-width: 8px;
    border-color: ${colors.main};
    border: 1px solid;
    accent-color: ${colors.main};
    cursor: pointer;
  }

  .shipping-label {
    cursor: pointer;
  }

  .checkout-form-input select:focus {
    outline: 1px solid ${colors.main};
  }

  .address-form-bottom {
    display: flex;
    gap: 8px;
  }

  .address-form-bottom input {
    width: 100%;
  }

  .checkout-form-buttons {
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    justify-content: space-between;
    margin-top: 48px;
  }

  @media (max-width: 948px) {
    .checkout-container {
      height: auto;
      flex-direction: column;
    }

    .checkout-form-container, .checkout-summary-container {
      width: 100%;
      padding: 64px 4%;
    }

    .checkout-form-container {
      width: 100%;
      min-width: 320px;
    }

    .checkout-form-row {
      margin-bottom: 48px;
    }

    .checkout-form-input {
      margin-top: 16px;
    }

    .checkout-form-input select {
      width: 100%;
    }

    .checkout-form-buttons {
      width: 100%;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 0;
    }
  }
`;

export default StyledCheckout;