import React from "react";
import { useParams } from "react-router-dom";
import useGetOrders from "@hooks/useGetOrders";
import StyledSuccess from "@styles/styledSuccess";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Button from "@micro-components/Button";
import ProductContainer from "@containers/ProductContainer";
import OrderItem from "@components/OrderItem";
import Check from "@svg-components/Check";
import { env } from "@constants/env";

const Success = () => {
  const { order_id } = useParams();
  const order = useGetOrders(`${env.API}/orders/${order_id}`);

  const subTotal = order.subtotal?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const shipping = order.shipping?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const tax = (order.subtotal * 0.07).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const discount = order.discount?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const total = order.total?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <StyledSuccess>
      <div className="wrapper">
        <div className="order-message">
          <Check width="96" height="96" />
          <Title>
            Gracias por tu compra, tu pedido se ha realizado con éxito
          </Title>
          <SubTitle>
            Tu pedido se encuentra en camino. Por favor revisa tu correo para la
            confirmación de tu pedido y detalles de entrega o contáctanos por
            WhatsApp{" "}
            <a href={`https://wa.me/${env.WA_NUMBER}`}>
              {env.WA_NUMBER.replace("+507", "")}
            </a>{" "}
            para cualquier duda.
          </SubTitle>
          <div className="button-container">
            <Button
              primary
              onClick={() => {
                window.location.replace("/");
              }}
            >
              Volver a la tienda
            </Button>
            <Button
              secondary
              onClick={() => {
                window.location.replace("/perfil");
              }}
            >
              Ver mis pedidos
            </Button>
          </div>
        </div>
        <div className="order-summary">
          <Title>
            Resumen de tu pedido <span>#{order_id}</span>
          </Title>
          <div className="order-summary-content">
            <div className="order-items">
              {order.order_items &&
                order.order_items.map((item) => (
                  <OrderItem key={item.product_id} item={item} />
                ))}
            </div>
            <p>
              <span>Subtotal</span>
              <span>{subTotal}</span>
            </p>
            <p>
              <span>Envío</span>
              <span>{order.shipping === 0 ? "Gratis" : shipping}</span>
            </p>
            <p>
              <span>ITBMS</span>
              <span>{tax}</span>
            </p>
            {order.discount !== 0 ? (
              <p>
                <span>Descuento</span>
                <span>-{discount}</span>
              </p>
            ) : null}
            <p id="total">
              <span>Total</span>
              <span>{total}</span>
            </p>
          </div>
          <p id="paid">
            <span>Pagado</span>
            <span>{total}</span>
          </p>
        </div>
      </div>
      <div className="bottom">
        <Title>
          También te puede interesar:
        </Title>
        <ProductContainer />
      </div>
    </StyledSuccess>
  );
};

export default Success;
