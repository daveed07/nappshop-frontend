import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { store } from "@redux/store";
import useScript from "@hooks/useScript";
import SummaryContainer from "@containers/SummaryContainer";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Input from "@micro-components/Input";
import Button from "@micro-components/Button";
import StyledPayment from "@styles/styledPayment";
import colors from "@constants/colors";
import whatsappText from "@utils/whatsappText";
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

  const { isLoaded } = useScript(
    "https://secure.paguelofacil.com/HostedFields/vendor/scripts/WALLET/PFScript.js"
  );

  console.log(costs);
  console.log(contact);
  console.log(shipping);

  const submitOrder = async (open) => {
    const order = {
      user_id: user.id,
      subtotal: parseFloat(costs.subtotal),
      discount: parseFloat(costs.discount),
      shipping: parseFloat(costs.shipping) || 0,
      total: parseFloat(costs.totalWithShipping),
      products: cart.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      })),
      country: "panama",
      city: shipping.city,
      address1: shipping.address1,
      address2: shipping.address2,
      province: shipping.region,
      payment_method: paymentMethod,
      name: `${contact.firstName} ${contact.lastName}`,
      email: contact.email,
      phone: contact.phone,
    };

    console.log(order);

    const response = await axios
      .post(`${env.API}/orders`, order)
      .then((res) => {
        store.dispatch({ type: "DELETE_CART" });
        store.dispatch({ type: "RESET_COSTS" });
        store.dispatch({ type: "RESET_SHIPPING" });
        store.dispatch({ type: "RESET_CONTACT" });
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
          window.location.href = `/success/${res.data.order_id}`;
        }
        if (open) {
          window.open(
            `https://wa.me/${env.WA_NUMBER}?text=${whatsappText({
              cart,
              costs,
              shipping,
              contact,
              order_id: res.data.order_id,
            })}`
          );
          window.location.href = `/success/${res.data.order_id}`;
        }
      })
      .catch((err) => console.log(err));
  };

  // create function that adds spaces every 4 digits
  const formatNumber = (number) => {
    if (/\S{5}/.test(number)) {
      return number.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ");
    }
  };

  // turn code above into modern js code
  const formatCreditCard = (number) => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = number.replace(/[^\d]/g, "");

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter((group) => !!group).join(" ")
    );
  };

  const formatExpirationDate = (date) => {
    return date
      .replace(
        /[^0-9]/g,
        "" // To allow only numbers
      )
      .replace(
        /^([2-9])$/g,
        "0$1" // To handle 3 > 03
      )
      .replace(
        /^(1{1})([3-9]{1})$/g,
        "0$1/$2" // 13 > 01/3
      )
      .replace(
        /^0{1,}/g,
        "0" // To handle 00 > 0
      )
      .replace(
        /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
        "$1/$2" // To handle 113 > 11/3
      );
  };

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
                  <div className="payment-info-form">
                    <input
                      type="radio"
                      name="payment-method"
                      id="cash"
                      onChange={(e) => {
                        setPaymentMethod(e.target.id);
                        setButtonText("Finish order");
                      }}
                    />
                    <label htmlFor="cash">Cash</label>
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
                            setButtonText("Finish order");
                          }}
                        />
                        <label htmlFor="credit-card">Credit card</label>
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
                  {paymentMethod === "yappy" && (
                    <div className="payment-info-form  yappy">
                      <Input
                        type="text"
                        id="yappyPhone"
                        placeholder="Phone Number"
                        label
                        name="Input your phone number ot finish order on Whatsapp"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="payment-form-buttons">
              {buttonText === "Finish order" ? (
                paymentBottom ? (
                  <div id="container-form"></div>
                ) : (
                  <Button
                    id="pay"
                    Button
                    primary
                    onClick={() => submitOrder(false)}
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
