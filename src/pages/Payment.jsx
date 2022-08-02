import React from "react";
import axios from "axios";
import { store } from "@redux/store";
import { useSelector } from "react-redux";
import SummaryContainer from "../containers/SummaryContainer";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Button from "@components/micro-components/Button";
import StyledPayment from "@styles/styledPayment";
import colors from "@constants/colors";

const API = `${process.env.REACT_APP_API}/orders`;

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const contact = useSelector((state) => state.contact);
  const shipping = useSelector((state) => state.shipping);
  const costs = useSelector((state) => state.costs);
  // asign value of radio button that is checked
  const [paymentMethod, setPaymentMethod] = React.useState("");

  yappy.setButton(false, "Yappy_Checkout_Button", "brand")

  const submitOrder = async () => {
    const order = {
      user_id: user.id,
      total: parseInt(costs.totalWithShipping),
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

    const response = await axios.post(API, order)
      .then((res) => {
        store.dispatch({ type: "DELETE_CART" });
        store.dispatch({ type: "RESET_COSTS" });
        store.dispatch({ type: "RESET_SHIPPING" });
        store.dispatch({ type: "RESET_CONTACT" });
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
                  <input type="radio" name="payment-method" id="cash"
                    onChange={(e) => setPaymentMethod(e.target.id)}
                  />
                  <label htmlFor="cash">Cash</label>
                </div>
                <div className="payment-form-row-content">
                  <input type="radio" name="payment-method" id="credit-card"
                  onChange={(e) => setPaymentMethod(e.target.id)}
                  />
                  <label htmlFor="credit-card">Credit card</label>
                </div>
                <div className="payment-form-row-content">
                  <input type="radio" name="payment-method" id="yappy"
                  onChange={(e) => setPaymentMethod(e.target.id)}
                  />
                  <label htmlFor="yappy">Yappy</label>
                </div>
              </div>
            </div>
            <div className="payment-form-buttons">
              <Button primary onClick={submitOrder}>
                Finish order
              </Button>
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
