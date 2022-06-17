import React, { useState, useEffect } from "react";
import SummaryContainer from "@containers/SummaryContainer";
import Button from "@components/micro-components/Button";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Form from "@components/micro-components/Form";
import Input from "@components/micro-components/Input";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import ReactLoading from "react-loading";
import "@styles/checkout.scss";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const user = useSelector((state) => state.user);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading((isLoading) => !isLoading);
    };
    loadData();
  }, []);

  const [address, setAddress] = useState(false);

  const [shipping, setShipping] = useState(0);

  const subtotal = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const tax = parseFloat(subtotal * 0.07).toFixed(2);
  const total = parseFloat(subtotal + parseFloat(tax)).toFixed(2);
  const totalWithShipping = parseFloat(total + shipping).toFixed(2);

  const handleUseAccountInfo = () => {
    document.getElementById("firstName").value = user.name.split(" ")[0] || "";
    document.getElementById("lastName").value = user.name.split(" ")[1] || "";
    document.getElementById("email").value = user.email;
    document.getElementById("phone").value = user.phone || "";

    document.getElementById("firstName").disabled = true;
    document.getElementById("lastName").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("phone").disabled = true;
  };

  const handlePayment = () => {
    // evaluate every single input individually and if it is empty, then return false
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!address) {
      if (firstName === "" || lastName === "" || email === "" || phone === "") {
        document.getElementById("firstName").classList.add("red-outline");
        document.getElementById("lastName").classList.add("red-outline");
        document.getElementById("email").classList.add("red-outline");
        document.getElementById("phone").classList.add("red-outline");
      } else {
        store.dispatch({
          type: "SET_CONTACT",
          payload: { firstName, lastName, email, phone },
        });
        store.dispatch({
          type: "SET_COSTS",
          payload: { subtotal, total, totalWithShipping, shipping, tax },
        });
        window.location.href = "/payment";
      }
    } else {
      const address1 = document.getElementById("address").value;
      const address2 = document.getElementById("address2").value;
      const city = document.getElementById("city").value;
      const region = document.getElementById("region").value;
      if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        phone === "" ||
        address1 === "" ||
        address2 === "" ||
        city === "" ||
        region === ""
      ) {
        // if any of the input is empty, turn input outline red
        document.getElementById("firstName").classList.add("red-outline");
        document.getElementById("lastName").classList.add("red-outline");
        document.getElementById("email").classList.add("red-outline");
        document.getElementById("phone").classList.add("red-outline");
        document.getElementById("address").classList.add("red-outline");
        document.getElementById("address2").classList.add("red-outline");
        document.getElementById("city").classList.add("red-outline");
        document.getElementById("region").classList.add("red-outline");
      } else {
        // if all input is filled, then redirect to payment page
        store.dispatch({
          type: "SET_SHIPPING",
          payload: {
            address1: address1,
            address2: address2,
            city: city,
            region: region,
          },
        });
        window.location.href = "/payment";
      }
    }
  };

  const handleShipping = () => {
    if (address) {
      switch (document.getElementById("region").value) {
        case "pa":
          setShipping(4.5);
          break;
        case "col":
        case "chi":
        case "ver":
        case "coc":
        case "chr":
        case "her":
        case "san":
        case "dar":
        case "boc":
          setShipping(7.0);
          break;
      }
    } else {
      setShipping("Free");
    }
  };

  if (isLoading) {
    return (
      <ReactLoading
        className="react-loader"
        type="spin"
        color="#425acd"
        height={50}
        width={50}
      />
    );
  } else {
    return (
      <div className="checkout" onLoad={() => handleShipping()}>
        <div className="checkout-container">
          <div className="checkout-form-container">
            <Title size="xxxlarge" color="#000">
              Checkout
            </Title>
            <div className="checkout-steps">
              <SubTitle size="medium" color="#425acd">
                Information and shipping
              </SubTitle>
              /
              <SubTitle size="medium" color="#000">
                Payment
              </SubTitle>
            </div>
            {/* <form className="checkout-form">
              <div className="checkout-form-row">
                <div className="checkout-form-top-text">
                  <p className="checkout-form-title">Contact information</p>
                  <div className="checkout-form-links">
                    {isLoggedIn ? null : (
                      <a href="/signup">Create an account</a>
                    )}
                    <a href="#" onClick={() => handleUseAccountInfo()}>
                      Use account information
                    </a>
                  </div>
                </div>
                <div className="checkout-form-input contact-info-form">
                  <div className="contact-info-form-top">
                    <input
                      className="contact-input input"
                      type="text"
                      id="firstName"
                      placeholder="First name"
                      onChange={() => {
                        document
                          .getElementById("firstName")
                          .classList.remove("red-outline");
                      }}
                    />
                    <input
                      className="contact-input input"
                      type="text"
                      id="lastName"
                      placeholder="Last name"
                      onChange={() => {
                        document
                          .getElementById("lastName")
                          .classList.remove("red-outline");
                      }}
                    />
                  </div>
                  <div className="contact-info-form-bottom">
                    <input
                      className="contact-input input"
                      type="email"
                      id="email"
                      placeholder="Email"
                      onChange={() => {
                        document
                          .getElementById("email")
                          .classList.remove("red-outline");
                      }}
                    />
                    <input
                      className="contact-input input"
                      type="text"
                      id="phone"
                      placeholder="Phone"
                      onChange={() => {
                        document
                          .getElementById("phone")
                          .classList.remove("red-outline");
                      }}
                    />
                  </div>
                  <div className="marketing-checkbox">
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="marketing"
                    />
                    <span className="checkbox-label" htmlFor="marketing">
                      I want to receive marketing emails
                    </span>
                  </div>
                </div>
              </div>
              <div className="checkout-form-row">
                <p className="checkout-form-row-title">Shipping</p>
                <div className="shipping-form-container">
                  <div className="checkout-form-input shipping-form">
                    <div>
                      <input
                        className="shipping-input"
                        type="radio"
                        id="pickup"
                        name="pickup"
                        value="pickup"
                        defaultChecked
                        onClick={() => {
                          document.getElementById("delivery").checked = false;
                          setAddress(false);
                          setShipping("Free");
                        }}
                      />
                      <label className="shipping-label" htmlFor="pickup">
                        Pickup in store (inmediate delivery)
                      </label>
                    </div>
                    <div>
                      <p className="shipping-price">Free</p>
                    </div>
                  </div>
                  <div className="checkout-form-input shipping-form">
                    <div>
                      <input
                        className="shipping-input"
                        type="radio"
                        id="delivery"
                        name="delivery"
                        value="delivery"
                        onClick={() => {
                          document.getElementById("pickup").checked = false;
                          setAddress(true);
                          setShipping(4.5);
                        }}
                      />
                      <label className="shipping-label" htmlFor="delivery">
                        Delivery RedServi (1-2 days)
                      </label>
                    </div>
                    <div>
                      <p className="shipping-price">Starting on $4.50</p>
                    </div>
                  </div>
                </div>
              </div>
              {address ? (
                <div className="checkout-form-row">
                  <p className="checkout-form-row-title">Address</p>
                  <div className="checkout-form-input address-form">
                    <select>
                      <option value="">Panama</option>
                    </select>
                    <input
                      className="input"
                      type="text"
                      id="address"
                      placeholder="Address"
                      onChange={() => {
                        document
                          .getElementById("address")
                          .classList.remove("red-outline");
                      }}
                    />
                    <input
                      className="input"
                      type="text"
                      id="address2"
                      placeholder="Address 2"
                      onChange={() => {
                        document
                          .getElementById("address2")
                          .classList.remove("red-outline");
                      }}
                    />
                    <div className="address-form-bottom">
                      <input
                        className="input"
                        type="text"
                        id="city"
                        placeholder="City"
                        onChange={() => {
                          document
                            .getElementById("city")
                            .classList.remove("red-outline");
                        }}
                      />
                      <select
                        id="region"
                        onChange={() => {
                          document
                            .getElementById("region")
                            .classList.remove("red-outline");
                          handleShipping();
                        }}
                      >
                        <option value="pa">Panama</option>
                        <option value="col">Colón</option>
                        <option value="chi">Chiriquí</option>
                        <option value="ver">Veraguas</option>
                        <option value="coc">Coclé</option>
                        <option value="chr">Chorrera</option>
                        <option value="her">Herrera</option>
                        <option value="san">Los Santos</option>
                        <option value="dar">Darién</option>
                        <option value="boc">Bocas del Toro</option>
                      </select>
                    </div>
                    <div className="marketing-checkbox">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id="marketing"
                      />
                      <span className="checkbox-label" htmlFor="marketing">
                        Save information for next time
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="checkout-form-buttons">
                <Button primary onClick={handlePayment}>
                  Continue to payment
                </Button>
                <Button
                  secondary
                  onClick={() => {
                    window.location.href = "/cart";
                  }}
                >
                  Return to cart
                </Button>
              </div>
            </form> */}
            <Form width="auto">
              <div className="checkout-form-row">
                <div className="checkout-form-top-text">
                  <p className="checkout-form-title">Contact information</p>
                  <div className="checkout-form-links">
                    {isLoggedIn ? null : (
                      <a href="/signup">Create an account</a>
                    )}
                    <a href="#" onClick={() => handleUseAccountInfo()}>
                      Use account information
                    </a>
                  </div>
                </div>
                <div className="checkout-form-input contact-info-form">
                  <div className="contact-info-form-top">
                    <Input type="text" id="firstName" placeholder="First name" onChange={() => {
                      document.getElementById("firstName").classList.remove("red-outline");
                    }} />
                    <Input type="text" id="lastName" placeholder="Last name" onChange={() => {
                      document.getElementById("lastName").classList.remove("red-outline");
                    }} />
                  </div>
                  <div className="contact-info-form-bottom">
                    <Input type="email" id="email" placeholder="Email" onChange={() => {
                      document.getElementById("email").classList.remove("red-outline");
                    }} />
                    <Input type="tel" id="phone" placeholder="Phone" onChange={() => {
                      document.getElementById("phone").classList.remove("red-outline");
                    }} />
                  </div>
                  <div className="marketing-checkbox">
                    <Input type="checkbox" id="marketing" />
                    <span className="checkbox-label" htmlFor="marketing">
                      I want to receive marketing emails
                    </span>
                  </div>
                </div>
              </div>
            </Form>
            <Form width="auto">
            <div className="checkout-form-row">
                <p className="checkout-form-row-title">Shipping</p>
                <div className="shipping-form-container">
                  <div className="checkout-form-input shipping-form">
                    <div>
                      <Input type="radio" id="pickup" name="pickup" value="pickup" defaultChecked onChange={() => {
                        document.getElementById("delivery").checked = false;
                        setAddress(false);
                        setShipping("Free");
                      }} />
                      <label className="shipping-label" htmlFor="pickup">
                        Pickup in store (inmediate delivery)
                      </label>
                    </div>
                    <div>
                      <p className="shipping-price">Free</p>
                    </div>
                  </div>
                  <div className="checkout-form-input shipping-form">
                    <div>
                      <Input type="radio" id="delivery" name="delivery" value="delivery" onChange={() => {
                        document.getElementById("pickup").checked = false;
                        setAddress(true);
                        setShipping("4.50");
                      }} />
                      <label className="shipping-label" htmlFor="delivery">
                        Delivery RedServi (1-2 days)
                      </label>
                    </div>
                    <div>
                      <p className="shipping-price">Starting on $4.50</p>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
            <Form width="auto">
            {address ? (
                <div className="checkout-form-row">
                  <p className="checkout-form-row-title">Address</p>
                  <div className="checkout-form-input address-form">
                    <select>
                      <option value="">Panama</option>
                    </select>
                    <Input type="text" id="address" placeholder="Address" onChange={() => {
                      document.getElementById("address").classList.remove("red-outline");
                    }} />
                    <Input type="text" id="address2" placeholder="Street, apartment, etc" onChange={() => {
                      document.getElementById("address2").classList.remove("red-outline");
                    }} />
                    <div className="address-form-bottom">
                      <Input type="text" id="city" placeholder="City" onChange={() => {
                        document.getElementById("city").classList.remove("red-outline");
                      }} />
                      <select
                        id="region"
                        onChange={() => {
                          document
                            .getElementById("region")
                            .classList.remove("red-outline");
                          handleShipping();
                        }}
                      >
                        <option value="pa">Panama</option>
                        <option value="col">Colón</option>
                        <option value="chi">Chiriquí</option>
                        <option value="ver">Veraguas</option>
                        <option value="coc">Coclé</option>
                        <option value="chr">Chorrera</option>
                        <option value="her">Herrera</option>
                        <option value="san">Los Santos</option>
                        <option value="dar">Darién</option>
                        <option value="boc">Bocas del Toro</option>
                      </select>
                    </div>
                    <div className="marketing-checkbox">
                      <Input type="checkbox" id="marketing" />
                      <span className="checkbox-label" htmlFor="marketing">
                        Save information for next time
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="checkout-form-buttons">
                <Button primary onClick={handlePayment}>
                  Continue to payment
                </Button>
                <Button
                  secondary
                  onClick={() => {
                    window.location.href = "/cart";
                  }}
                >
                  Return to cart
                </Button>
              </div>
            </Form>
          </div>
          <SummaryContainer
            cart={cart}
            subtotal={subtotal}
            tax={tax}
            total={total}
            totalWithShipping={totalWithShipping}
            shipping={shipping}
          />
        </div>
      </div>
    );
  }
};

export default CheckOut;
