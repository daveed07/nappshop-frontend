import React, { useState } from "react";
import { useSelector } from "react-redux";
import { store } from "@redux/store";
import Header from "@components/Header";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Form from "@components/micro-components/Form";
import Input from "@components/micro-components/Input";
import Button from "@components/micro-components/Button";
import "@styles/login.scss";
import colors from "@constants/colors";

const Login = () => {
  const [alert, setAlert] = useState('');

  const userEmail = useSelector((state) => state.user.email);
  const userPassword = useSelector((state) => state.user.password);

  const handleLogin = (email, password) => {
    if (email && password) {
      if (email === userEmail && password === userPassword) {
        store.dispatch({ type: "LOGIN", payload: { email, password } });
        window.location.href = "/";
      } else {
        setAlert("Email or password is incorrect");
      }
    } else {
      setAlert("Email and password cannot be empty");
    }
  };

  return (
    <>
      <Header />
      <div className="login">
      <Title size="xxxlarge" color={colors.black}>Log In</Title>
        <SubTitle size="medium" color={colors.greyDark}>
          Welcome back! Please type in your details
        </SubTitle>
        <Form width="20%">
        {alert && <p className="alert">{alert}</p>}
          <Input label type="text" id="email" name="Email" onChange={() => {setAlert('')}}/>
          <Input label type="password" id="password" name="Password" onChange={() => {setAlert('')}}/>
          <Button primary onClick={() => handleLogin(userEmail, userPassword)}>Log in</Button>
        </Form>
        <a href="/">Forgot my password</a>
        <a href="signup">Sign up</a>
      </div>
    </>
  );
}

export default Login;