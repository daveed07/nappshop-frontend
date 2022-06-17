import React from 'react';
import { store } from "@redux/store";
import Header from '@components/Header';
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Form from "@components/micro-components/Form";
import Input from "@components/micro-components/Input";
import Button from '@components/micro-components/Button';

const Signup = () => {
  const [alert, setAlert] = React.useState('');

  const handleSignUp = (email, username, password, rePassword) => {
    if (email && username && password) {
      if (email.includes('@') && email.includes('.')) {
        if (password.length >= 8) {
          if (password === rePassword) {
            store.dispatch({ type: "SIGN_UP", payload: { email, username, password } });
            window.location.href = "/";
          } else {
            setAlert("Passwords do not match");
          }
        } else {
          setAlert("Password must be at least 8 characters");
        }
      } else {
        setAlert("Email is invalid");
      }
    } else {
      setAlert("Email, name and password cannot be empty");
    }
  };
  return (
    <>
      <Header />
      <div className="signup">
        <Title size="xxxlarge" color="#000">Sign Up</Title>
        <SubTitle size="medium" color="#90949f">
          Welcome! Please type in your details
        </SubTitle>
        <Form width="20%">
          {alert && <p className="alert">{alert}</p>}
          <Input label type="text" id="email" name="Email" onChange={() => {setAlert('')}}/>
          <Input label type="text" id="username" name="Username" onChange={() => {setAlert('')}}/>
          <Input label type="password" id="password" name="Password" onChange={() => {setAlert('')}}/>
          <Input label type="password" id="re-password" name="Verify Password" onChange={() => {setAlert('')}}/>
          <Button primary onClick={() => {
            handleSignUp(
              document.getElementById('email').value,
              document.getElementById('username').value,
              document.getElementById('password').value,
              document.getElementById('re-password').value)
          }}>Sign up</Button>
        </Form>
        <a href="/login">Log in</a>
      </div>
    </>
  );
}

export default Signup;