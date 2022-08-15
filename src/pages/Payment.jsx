import React, { useState } from "react";
import axios from "axios";
import { store } from "@redux/store";
import { useSelector } from "react-redux";
import SummaryContainer from "../containers/SummaryContainer";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Input from "@components/micro-components/Input";
import Button from "@components/micro-components/Button";
import StyledPayment from "@styles/styledPayment";
import colors from "@constants/colors";
import whatsappText from "../utils/whatsappText";

const API = `${process.env.REACT_APP_API}/orders`;

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const contact = useSelector((state) => state.contact);
  const shipping = useSelector((state) => state.shipping);
  const costs = useSelector((state) => state.costs);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [buttonText, setButtonText] = useState("Finish order");

  console.log(costs);
  console.log(contact);

  const submitOrder = async (open) => {
    const order = {
      user_id: user.id,
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
    };

    console.log(order);

    const response = await axios
      .post(API, order)
      .then((res) => {
        store.dispatch({ type: "DELETE_CART" });
        store.dispatch({ type: "RESET_COSTS" });
        store.dispatch({ type: "RESET_SHIPPING" });
        store.dispatch({ type: "RESET_CONTACT" });
        if (open) {
          window.open(
            `https://wa.me/+50766731685?text=${whatsappText({
              cart,
              costs,
              shipping,
              contact,
              order_id: res.data.order_id,
            })}`
          );
        }
      })
      .catch((err) => console.log(err));
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
                    <label htmlFor="yappy">Yappy</label>
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
                <Button Button primary onClick={() => submitOrder(false)}>
                  {buttonText}
                </Button>
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
