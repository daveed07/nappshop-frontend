import React from "react";
import { useParams } from "react-router-dom";
import useGetOrders from "@hooks/useGetOrders";
import StyledFailure from "@styles/styledFailure";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Button from "@micro-components/Button";
import ProductContainer from "@containers/ProductContainer";
import XCircle from "@svg-components/XCircle";
import { env } from "@constants/env";

const Failure = () => {
  const { order_id } = useParams();
  const order = useGetOrders(`${env.API}/orders/${order_id}`);
  return (
    <StyledFailure>
      <div className="wrapper">
        <XCircle width="96" height="96" />
        <Title>Sorry, your order was not completed</Title>
        <SubTitle>
          Please try again or contact us at WhatsApp{" "}
          {
            <a href={`https://wa.me/${env.WA_NUMBER}`}>
              {env.WA_NUMBER.replace("+507", "")}
            </a>
          }{" "}
          for assistance, we will be happy to help you. You can also check your payment information or try again with a different payment method.
        </SubTitle>
        <div className="button-container">
          <Button
            primary
            onClick={() => {
              window.location.replace("/payment");
            }}
          >
            Try again
          </Button>
          <Button
            secondary
            onClick={() => {
              window.location.replace("/");
            }}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </StyledFailure>
  );
};

export default Failure;
