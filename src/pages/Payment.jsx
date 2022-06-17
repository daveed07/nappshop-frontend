import React from "react";
import SummaryContainer from "../containers/SummaryContainer";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Button from "@components/micro-components/Button";
import "@styles/payment.scss";

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-container">
        <div className="payment-form-container">
          <Title size="xxxlarge" color="#000">
            Payment
          </Title>
          <div className="payment-steps">
            <SubTitle size="medium" color="#000">
              Information and shipping
            </SubTitle>
            /
            <SubTitle size="medium" color="#425acd">
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
    </div>
  );
};

export default Payment;
