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
        <Title>Lo sentimos, tu orden no pudo ser procesada.</Title>
        <SubTitle>
          Por favor, intenta nuevamente o contáctanos a nuestro WhatsApp{" "}
          {
            <a href={`https://wa.me/${env.WA_NUMBER}`}>
              {env.WA_NUMBER.replace("+507", "")}
            </a>
          }{" "}
          Para asistencia, estaremos encantados de ayudarte. También puedes
          revisar tu información de pago o intentar nuevamente con un método de
          pago diferente.
        </SubTitle>
        <div className="button-container">
          <Button
            primary
            onClick={() => {
              window.location.replace("/pago");
            }}
          >
            Intentar nuevamente
          </Button>
          <Button
            secondary
            onClick={() => {
              window.location.replace("/");
            }}
          >
            Continuar comprando
          </Button>
        </div>
      </div>
    </StyledFailure>
  );
};

export default Failure;
