import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import SummaryContainer from "@containers/SummaryContainer";
import Button from "@micro-components/Button";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Form from "@micro-components/Form";
import Input from "@micro-components/Input";
import StyledCheckout from "@styles/styledCheckout";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const user = useSelector((state) => state.user);
  const shippingState = useSelector((state) => state.shipping);
  const contactState = useSelector((state) => state.contact);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading((isLoading) => !isLoading);
    };
    loadData();
  }, []);

  const [address, setAddress] = useState(false);
  const [shipping, setShipping] = useState("Gratis");
  const [discount, setDiscount] = useState(0);
  const [emptyFields, setEmptyFields] = useState(false);

  // create state for every input field to be able to validate them if they are empty or not
  const [firstName, setFirstName] = useState(contactState.firstName || "");
  const [lastName, setLastName] = useState(contactState.lastName || "");
  const [email, setEmail] = useState(contactState.email || "");
  const [phone, setPhone] = useState(contactState.phone || "");
  const [address1, setAddress1] = useState(shippingState.address1 || "");
  const [address2, setAddress2] = useState(shippingState.address2 || "");
  const [region, setRegion] = useState(shippingState.region || "");
  const [city, setCity] = useState(shippingState.city || "");

  // create state for every input to check if they are empty or not
  const [firstNameEmpty, setFirstNameEmpty] = useState(false);
  const [lastNameEmpty, setLastNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  const [address1Empty, setAddress1Empty] = useState(false);
  const [cityEmpty, setCityEmpty] = useState(false);

  const subtotal = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const tax = parseFloat(subtotal * 0.07).toFixed(2);
  const total = parseFloat(subtotal + parseFloat(tax)).toFixed(2);
  const totalWithShipping =
    shipping === "Gratis"
      ? total
      : parseFloat(Number(total) + Number(shipping)).toFixed(2);

  const handleUseAccountInfo = () => {
    // document.getElementById("firstName").value = user.name.split(" ")[0] || "";
    // document.getElementById("lastName").value = user.name.split(" ")[1] || "";
    // document.getElementById("email").value = user.email;
    // document.getElementById("phone").value = user.phone || "";

    setFirstName(user.name.split(" ")[0] || "");
    setLastName(user.name.split(" ")[1] || "");
    setEmail(user.email);
    setPhone(user.phone || "");
  };

  const handleUseShippingInfo = () => {
    // document.getElementById("address").value = user.address1;
    // document.getElementById("address2").value = user.address2;
    // document.getElementById("city").value = user.city;
    // // change region select to match user's region
    // const regionSelect = document.getElementById("region");
    // regionSelect.options.map((option) => {
    //   if (option.value === user.region) {
    //     option.selected = true;
    //   }
    // });

    setAddress1(user.address1);
    setAddress2(user.address2);
    setCity(user.city);
    setRegion(user.region);
  };

  const handlePayment = () => {
    // evaluate every single input individually and if it is empty, then return false
    // const firstName = document.getElementById("firstName").value;
    // const lastName = document.getElementById("lastName").value;
    // const email = document.getElementById("email").value;
    // const phone = document.getElementById("phone").value;

    // if (!address) {
    //   if (firstName === "" || lastName === "" || email === "" || phone === "") {
    //     setEmptyFields(true);
    //     return;
    //   } else {
    //     store.dispatch({
    //       type: "SET_SHIPPING",
    //       payload: {
    //         address1: false,
    //         address2: false,
    //         city: false,
    //         region: false,
    //       },
    //     });
    //     store.dispatch({
    //       type: "SET_CONTACT",
    //       payload: { firstName, lastName, email, phone },
    //     });
    //     store.dispatch({
    //       type: "SET_COSTS",
    //       payload: {
    //         subtotal,
    //         total,
    //         totalWithShipping,
    //         shipping,
    //         tax,
    //         discount,
    //       },
    //     });
    //     window.location.href = "/pago";
    //   }
    // } else {
    //   const address1 = document.getElementById("address").value;
    //   const address2 = document.getElementById("address2").value;
    //   const city = document.getElementById("city").value;
    //   const region = document.getElementById("region").value;

    //   console.log(address1, address2, city, region);
    //   if (
    //     firstName === "" ||
    //     lastName === "" ||
    //     email === "" ||
    //     phone === "" ||
    //     address1 === "" ||
    //     address2 === "" ||
    //     city === "" ||
    //     region === ""
    //   ) {
    //     setEmptyFields(true);
    //     return;
    //   } else {
    //     // if all input is filled, then redirect to payment page
    //     store.dispatch({
    //       type: "SET_SHIPPING",
    //       payload: {
    //         address1: address1,
    //         address2: address2,
    //         city: city,
    //         region: region,
    //       },
    //     });
    //     store.dispatch({
    //       type: "SET_CONTACT",
    //       payload: { firstName, lastName, email, phone },
    //     });
    //     store.dispatch({
    //       type: "SET_COSTS",
    //       payload: {
    //         subtotal,
    //         total,
    //         totalWithShipping,
    //         shipping,
    //         tax,
    //         discount,
    //       },
    //     });
    //     window.location.href = "/pago";
    //   }
    // }

    if (!address) {
      if (firstName === "" || lastName === "" || email === "" || phone === "") {
        setFirstNameEmpty(firstName === "");
        setLastNameEmpty(lastName === "");
        setEmailEmpty(email === "");
        setPhoneEmpty(phone === "");
        return;
      } else {
        store.dispatch({
          type: "SET_SHIPPING",
          payload: {
            address1: false,
            address2: false,
            city: false,
            region: false,
          },
        });
        store.dispatch({
          type: "SET_CONTACT",
          payload: { firstName, lastName, email, phone },
        });
        store.dispatch({
          type: "SET_COSTS",
          payload: {
            subtotal,
            total,
            totalWithShipping,
            shipping,
            tax,
            discount,
          },
        });
        window.location.href = "/pago";
      }
    } else {
      if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        phone === "" ||
        address1 === "" ||
        city === ""
      ) {
        setFirstNameEmpty(firstName === "");
        setLastNameEmpty(lastName === "");
        setEmailEmpty(email === "");
        setPhoneEmpty(phone === "");
        setAddress1Empty(address1 === "");
        setCityEmpty(city === "");
        return;
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
        store.dispatch({
          type: "SET_CONTACT",
          payload: { firstName, lastName, email, phone },
        });
        store.dispatch({
          type: "SET_COSTS",
          payload: {
            subtotal,
            total,
            totalWithShipping,
            shipping,
            tax,
            discount,
          },
        });
        window.location.href = "/pago";
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
      setShipping("Gratis");
    }
  };

  // if user goes back to the previous page, then reset the state.costs
  useEffect(() => {
    if (window.location.pathname === "/carrito") {
      store.dispatch({
        type: "RESET_COSTS",
      });
    }
  }, [cart]);

  return (
    <StyledCheckout>
      <div className="checkout-container">
        <div className="checkout-form-container">
          <Title size="xxxlarge" color="#000">
            Checkout
          </Title>
          <div className="checkout-steps">
            <SubTitle size="medium" color="#425acd">
              1. Información de contacto y envío
            </SubTitle>
            /
            <SubTitle size="medium" color="#000">
              2. Método de pago
            </SubTitle>
          </div>
          <Form width="auto">
            <div className="checkout-form-row">
              <div className="checkout-form-top-text">
                <p className="checkout-form-title">Información de contacto</p>
                <div className="checkout-form-links">
                  {isLoggedIn ? null : (
                    <a href="/registrarse">Crear una cuenta</a>
                  )}
                  {isLoggedIn ? (
                    <p
                      className="account-info"
                      onClick={() => handleUseAccountInfo()}
                    >
                      Usar información de cuenta
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="checkout-form-input contact-info-form">
                <div className="contact-info-form-top">
                  <Input
                    type="text"
                    id="firstName"
                    placeholder="Nombre"
                    defaultValue={firstName || ""}
                    onChange={() => {
                      setFirstName(document.getElementById("firstName").value);
                      setFirstNameEmpty(false);
                    }}
                    emptyFields={firstNameEmpty}
                  />
                  <Input
                    type="text"
                    id="lastName"
                    placeholder="Apellido"
                    defaultValue={lastName || ""}
                    onChange={(e) => {
                      setLastName(document.getElementById("lastName").value);
                      setLastNameEmpty(false);
                    }}
                    emptyFields={lastNameEmpty}
                  />
                </div>
                <div className="contact-info-form-bottom">
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    defaultValue={email || ""}
                    onChange={() => {
                      setEmail(document.getElementById("email").value);
                      setEmailEmpty(false);
                    }}
                    emptyFields={emailEmpty}
                  />
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="Teléfono"
                    defaultValue={phone || ""}
                    onChange={() => {
                      setPhone(document.getElementById("phone").value);
                      setPhoneEmpty(false);
                    }}
                    emptyFields={phoneEmpty}
                  />
                </div>
                {/* <div className="marketing-checkbox">
                  <Input type="checkbox" id="marketing" />
                  <span className="checkbox-label" htmlFor="marketing">
                    I want to receive marketing emails
                  </span>
                </div> */}
              </div>
            </div>
          </Form>
          <Form width="auto">
            <div className="checkout-form-row">
              <p className="checkout-form-row-title">Información de envío</p>
              <div className="shipping-form-container">
                <div className="checkout-form-input shipping-form">
                  <div>
                    <Input
                      type="radio"
                      id="pickup"
                      name="pickup"
                      value="pickup"
                      defaultChecked
                      onChange={() => {
                        document.getElementById("delivery").checked = false;
                        setAddress(false);
                        setShipping("Gratis");
                      }}
                    />
                    <label className="shipping-label" htmlFor="pickup">
                      Retirar en tienda (Entrega inmediata)
                    </label>
                  </div>
                  <div>
                    <p className="shipping-price">Gratis</p>
                  </div>
                </div>
                <div className="checkout-form-input shipping-form">
                  <div>
                    <Input
                      type="radio"
                      id="delivery"
                      name="delivery"
                      value="delivery"
                      onChange={() => {
                        document.getElementById("pickup").checked = false;
                        setAddress(true);
                        cart.some((item) => item.brand === "iRobot")
                          ? setShipping("Gratis")
                          : setShipping(4.5);
                      }}
                    />
                    <label className="shipping-label" htmlFor="delivery">
                      Envío a domicilio (Entrega en 1-2 días hábiles)
                    </label>
                  </div>
                  <div>
                    <p className="shipping-price">
                      {cart.some((item) => item.brand === "iRobot")
                        ? "Gratis"
                        : "Starting on $4.50"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Form>
          <Form width="auto">
            {address ? (
              <div className="checkout-form-row">
                <div className="checkout-form-top-text">
                  <p className="checkout-form-row-title">Dirección de envío</p>
                  {isLoggedIn ? (
                    <p
                      className="account-info"
                      onClick={() => handleUseShippingInfo()}
                    >
                      Usar información de cuenta
                    </p>
                  ) : null}
                </div>
                <div className="checkout-form-input address-form">
                  <select>
                    <option value="">Panamá</option>
                  </select>
                  <Input
                    type="text"
                    id="address"
                    placeholder="Dirección"
                    defaultValue={address1 || ""}
                    onChange={() => {
                      setAddress1(document.getElementById("address").value);
                      setAddress1Empty(false);
                    }}
                    emptyFields={address1Empty}
                  />
                  <Input
                    type="text"
                    id="address2"
                    placeholder="Apartamento, suite, etc. (opcional)"
                    defaultValue={address2 || ""}
                    onChange={() => {
                      setAddress2(document.getElementById("address2").value);
                    }}
                  />
                  <div className="address-form-bottom">
                    <Input
                      type="text"
                      id="city"
                      placeholder="Ciudad"
                      defaultValue={city || ""}
                      onChange={() => {
                        setCity(document.getElementById("city").value);
                        setCityEmpty(false);
                      }}
                      emptyFields={cityEmpty}
                    />
                    <select
                      id="region"
                      defaultValue={region || ""}
                      onChange={() => {
                        document
                          .getElementById("region")
                          .classList.remove("red-outline");
                        handleShipping();
                      }}
                    >
                      <option value="pa">Panamá</option>
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
                    <Input type="checkbox" id="save-address" />
                    <span className="checkbox-label" htmlFor="save-address">
                      Guardar esta dirección para futuras compras
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="checkout-form-buttons">
              <Button primary onClick={handlePayment}>
                Pagar
              </Button>
              <Button
                secondary
                onClick={() => {
                  window.location.href = "/carrito";
                  store.dispatch({
                    type: "SET_SHIPPING",
                    payload: {
                      address1: "",
                      address2: "",
                      city: "",
                      region: "",
                    },
                  });

                  store.dispatch({
                    type: "SET_CONTACT",
                    payload: {
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                    },
                  });

                  store.dispatch({
                    type: "RESET_COSTS",
                  });
                }}
              >
                Regresar al carrito
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
          discount={discount}
          setDiscount={setDiscount}
          codeInput
        />
      </div>
    </StyledCheckout>
  );
};

export default CheckOut;
