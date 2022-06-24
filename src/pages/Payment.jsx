import React from "react";
import SummaryContainer from "../containers/SummaryContainer";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Button from "@components/micro-components/Button";
import StyledPayment from "@styles/styledPayment";
import colors from "@constants/colors";

const Payment = () => {
  return (
    <StyledPayment>
      <div className="payment-container">
        <div className="payment-form-container">
          <Title size="xxxlarge" color={colors.black}>
            Payment
          </Title>
          <div className="payment-steps">
            <SubTitle size="medium" color={colors.black}>
              Information and shipping
            </SubTitle>
            /
            <SubTitle size="medium" color={colors.main}>
              Payment
            </SubTitle>
          </div>
          <form className="payment-form">
            <div className="payment-form-row">
              <p className="payment-form-row-title">Payment method</p>
              <div className="payment-form-row-content-container">
                <div className="payment-form-row-content">
                  <input type="radio" name="payment-method" id="cash" />
                  <label htmlFor="cash">Cash</label>
                </div>
                <div className="payment-form-row-content">
                  <input type="radio" name="payment-method" id="credit-card" />
                  <label htmlFor="credit-card">Credit card</label>
                </div>
                <div className="payment-form-row-content">
                  <input type="radio" name="payment-method" id="yappy" />
                  <label htmlFor="yappy">Yappy</label>
                </div>
              </div>
            </div>
            <div className="payment-form-buttons">
              <Button primary>Finish order</Button>
              <Button
                secondary
                onClick={() => {
                  window.location.href = "/checkout";
                }}
              >
                Return to shipping
              </Button>
            </div>
          </form>
        </div>
        <SummaryContainer />
      </div>
    </StyledPayment>
  );
};

export default Payment;
