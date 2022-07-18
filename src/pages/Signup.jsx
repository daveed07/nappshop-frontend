import React from 'react';
import { store } from "@redux/store";
import Header from '@components/Header';
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Form from "@components/micro-components/Form";
import Input from "@components/micro-components/Input";
import Button from '@components/micro-components/Button';
import StyledLogin from '@styles/styledLogin';
import colors from "@constants/colors";
import usePostUser from '../hooks/usePostUser';

const API = `${process.env.REACT_APP_API}/users`;

const Signup = () => {
  const [alert, setAlert] = React.useState('');

  const handleSignUp = (email, username, password, rePassword) => {
    if (email && username && password) {
      if (email.includes('@') && email.includes('.')) {
        if (password.length >= 8) {
          if (password === rePassword) {
            const body = {
              email,
              username,
              password,
            }
            usePostUser(API, body);
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
      <StyledLogin signup>
        <Title size="xxxlarge" color={colors.black}>Sign Up</Title>
        <SubTitle size="medium" color={colors.greyDark}>
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
      </StyledLogin>
    </>
  );
}

export default Signup;