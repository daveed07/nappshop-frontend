import styled from 'styled-components';
import colors from '@constants/colors';

const StyledPayment = styled.div`
  .payment-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .payment-form-container {
    padding: 60px 48px 60px;
    width: 54%;
    padding-left: 16%;
  }

  .payment-steps {
    display: flex;
    gap: 8px;
    margin-top: 24px;
    font-weight: 500;
  }

  .payment-form-row {
    margin-top: 24px;
  }

  .payment-form-row-content-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
  }

  .payment-form-row-content {
    border: 1px solid ${colors.grey};
    border-radius: 8px;
  }

  .payment-info-form {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px;
  }

  .yappy {
    display: block;
  }

  .yappy label {
    color: ${colors.black};
  }

  .payment-form-row-content input {
    width: 18px;
    height: 18px;
    border-width: 8px;
    border-color: var(--main-color);
    border: 1px solid;
    accent-color: var(--main-color);
    cursor: pointer;
  }

  .payment-info-form input[type=text] {
    width: 100%;
    height: 48px;
    max-width: 320px;
    border: 1px solid ${colors.grey};
    border-radius: 8px;
  }

  .payment-form-row-content label {
    cursor: pointer;
  }

  .payment-form-buttons {
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    justify-content: space-between;
    margin-top: 48px;
  }

  @media (max-width: 948px) {
    .payment-container {
      height: auto;
      flex-direction: column;
    }

    .payment-form {
      width: auto;
    }

    .payment-form-container {
      width: 100%;
      padding: 64px 4%;
    }

    .payment-form-row {
      margin-bottom: 48px;
    }

    .payment-form-buttons {
      width: 100%;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 0;
    }
  }
`;

export default StyledPayment;