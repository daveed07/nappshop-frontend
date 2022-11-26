import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import useScript from "@hooks/useScript";
import SummaryContainer from "@containers/SummaryContainer";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Input from "@micro-components/Input";
import Button from "@micro-components/Button";
import StyledPayment from "@styles/styledPayment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "@constants/colors";
import whatsappText from "@utils/whatsappText";
import resetStore from "@utils/resetStore";
import submitPayment from "@utils/submitPayment";
import { assets } from "@constants/assets";
import { env } from "@constants/env";

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const contact = useSelector((state) => state.contact);
  const shipping = useSelector((state) => state.shipping);
  const costs = useSelector((state) => state.costs);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [buttonText, setButtonText] = useState("Finish order");
  const [paymentBottom, setPaymentBottom] = useState(false);
  const [loading, setLoading] = useState(false);

  // create a loading effect
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const { isLoaded } = useScript(
    "https://secure.paguelofacil.com/HostedFields/vendor/scripts/WALLET/PFScript.js"
  );

  console.log(costs);
  console.log(contact);
  console.log(shipping);

  const submitOrder = async () => {
    const order = {
      user_id: user.id,
      subtotal: parseFloat(costs.subtotal),
      discount: parseFloat(costs.discount),
      shipping: parseFloat(costs.shipping) || 0,
      tax: parseFloat(costs.tax),
      total: parseFloat(costs.totalWithShipping),
      products: cart.map((product) => ({
        product_id: product.id,
        product_name: product.name,
        product_price: product.price,
        product_quantity: product.quantity,
      })),
      country: "panama",
      city: shipping.city,
      address1: shipping.address1,
      address2: shipping.address2,
      province: shipping.region,
      payment_method: paymentMethod,
      payment_status: "pending",
      order_status: "pending",
      name: `${contact.firstName} ${contact.lastName}`,
      email: contact.email,
      phone: contact.phone,
    };

    console.log(order);

    const response = await axios
      .post(`${env.API}/orders`, order)
      .then((res) => {
        console.log(res);
        if (paymentMethod === "credit-card") {
          if (isLoaded) {
            setPaymentBottom(true);
            const currentUrl =
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              `?monto=${res.data.total}&descripcion=${res.data.order_id}&boton=pay`;
            window.history.pushState({ path: currentUrl }, "", currentUrl);
            setTimeout(() => {
              submitPayment({
                pfWallet,
                PAGUELOFACIL_API_KEY: env.PAGUELOFACIL_API_KEY,
                CCLW: env.CCLW,
                orderId: res.data.order_id,
              });
            }, 100);
          }
        }
        if (paymentMethod === "cash") {
          resetStore();
          window.location.href = `/orden-exitosa/${res.data.order_id}`;
        }
        if (paymentMethod === "yappy") {
          window.open(
            `https://wa.me/${env.WA_NUMBER}?text=${whatsappText({
              cart,
              costs,
              shipping,
              contact,
              order_id: res.data.order_id,
            })}`
          );
          resetStore();
          window.location.href = `/orden-exitosa/${res.data.order_id}`;
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledPayment>
      <div className="payment-container">
        <div className="payment-form-container">
          <Title size="xxxlarge" color={colors.black}>
            {loading ? <Skeleton width={100} height={38} /> : "Pago"}
          </Title>
          <div className="payment-steps">
            <SubTitle size="medium" color={colors.black}>
              1. Información de contacto y envío
            </SubTitle>
            /
            <SubTitle size="medium" color={colors.main}>
              2. Método de pago
            </SubTitle>
          </div>
          <form className="payment-form">
            <div className="payment-form-row">
              <p className="payment-form-row-title">
                Métodos de pago
              </p>
              <div className="payment-form-row-content-container">
                <div className="payment-form-row-content">
                  <div className="payment-info-form">
                    <input
                      type="radio"
                      name="payment-method"
                      id="cash"
                      onChange={(e) => {
                        setPaymentMethod(e.target.id);
                        setButtonText("Terminar orden");
                      }}
                    />
                    <label htmlFor="cash">Efectivo</label>
                  </div>
                </div>
                <div className="payment-form-row-content">
                  <div className="payment-info-form">
                    <div className="payment-info-form-wrapper">
                      <div className="payment-info-form-left">
                        <input
                          type="radio"
                          name="payment-method"
                          id="credit-card"
                          onChange={(e) => {
                            setPaymentMethod(e.target.id);
                            setButtonText("Terminar orden");
                          }}
                        />
                        <label htmlFor="credit-card">
                          Tarjeta de crédito / débito
                        </label>
                      </div>
                      <div className="payment-info-form-wrapper-right">
                        <div className="payment-icons">
                          <img src={assets.visa} />
                          <img src={assets.mastercard} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="payment-form-row-content">
                  <div className="payment-info-form">
                    <input
                      type="radio"
                      name="payment-method"
                      id="yappy"
                      onChange={(e) => {
                        setPaymentMethod(e.target.id);
                        setButtonText("Finish order on WhatsApp");
                      }}
                    />
                    <label htmlFor="yappy">
                      <img src={assets.yappy} id="yappy-logo" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-form-buttons">
              {buttonText === "Terminar orden" ? (
                paymentBottom ? (
                  <div id="container-form"></div>
                ) : (
                  <Button
                    id="pay"
                    Button
                    primary
                    disabled={!paymentMethod}
                    onClick={() => submitOrder()}
                  >
                    {buttonText}
                  </Button>
                )
              ) : (
                <Button Button primary onClick={() => submitOrder(true)}>
                  {buttonText}
                </Button>
              )}
              <Button
                secondary
                onClick={() => {
                  window.location.href = "/checkout";
                }}
              >
                Regresar
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
