import React, { useState } from "react";
import axios from "axios";
import { store } from "@redux/store";
import Header from "@components/Header";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Form from "@micro-components/Form";
import Input from "@micro-components/Input";
import Button from "@micro-components/Button";
import StyledLogin from "@styles/styledLogin";
import colors from "@constants/colors";
import { env } from "@constants/env";

const Login = () => {
  const [alert, setAlert] = useState('');

  const handleLogin = (email, password) => {
    if (email && password) {
      const body = {
        email,
        password,
      }
      axios.post(`${env.API}/users/login`, body)
        .then(response => {
          store.dispatch({
            type: "LOGIN",
            payload: response.data.user,
          });
          console.log(response.data)
          window.location.href = '/';
        }).catch(error => {
          setAlert(error.response.data.message);
        })
     } else {
      setAlert("Email and password cannot be empty");
    }
  };

  return (
    <>
      <Header />
      <StyledLogin login>
        <Title size="xxxlarge" color={colors.black}>Log In</Title>
        <SubTitle size="medium" color={colors.greyDark}>
          Welcome back! Please type in your details
        </SubTitle>
        <Form width="20%">
        {alert && <p className="alert">{alert}</p>}
          <Input label type="text" id="email" name="Email" onChange={() => {setAlert('')}}/>
          <Input label type="password" id="password" name="Password" onChange={() => {setAlert('')}}/>
          <Button primary onClick={() => handleLogin(document.getElementById("email").value, document.getElementById("password").value)}>Log In</Button>
        </Form>
        <a href="/">Forgot my password</a>
        <a href="signup">Sign up</a>
      </StyledLogin>
    </>
  );
}

export default Login;