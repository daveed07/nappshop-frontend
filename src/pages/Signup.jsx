import React from "react";
import { store } from "@redux/store";
import axios from "axios";
import Header from "@components/Header";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Form from "@micro-components/Form";
import Input from "@micro-components/Input";
import Button from "@micro-components/Button";
import StyledLogin from "@styles/styledLogin";
import colors from "@constants/colors";
import { env } from "@constants/env";

const Signup = () => {
  const [alert, setAlert] = React.useState("");

  const handleSignUp = (email, username, password, rePassword) => {
    if (email && username && password) {
      if (email.includes("@") && email.includes(".")) {
        if (password.length >= 8) {
          if (password === rePassword) {
            const body = {
              email,
              username,
              password,
              role: "user",
            };
            axios
              .post(`${env.API}/users`, body)
              .then((response) => {
                store.dispatch({
                  type: "SIGN_UP",
                  payload: {
                    id: response.data.user_id,
                    username: response.data.user_name,
                    name: response.data.name,
                    email: response.data.email,
                    password: response.data.password,
                    role: response.data.role,
                  },
                });
                window.location.href = "/";
              })
              .catch((error) => {
                setAlert(error.response.data.message);
              });
          } else {
            setAlert("Las contraseñas no coinciden");
          }
        } else {
          setAlert("La contraseña debe tener al menos 8 caracteres");
        }
      } else {
        setAlert("El correo electrónico no es válido");
      }
    } else {
      setAlert("Todos los campos son obligatorios");
    }
  };
  return (
    <>
      <Header />
      <StyledLogin signup>
        <Title size="xxxlarge" color={colors.black}>
          Regístrate
        </Title>
        <SubTitle size="medium" color={colors.greyDark}>
          Bienvenido a la mejor tienda de tecnología
        </SubTitle>
        <Form width="20%">
          {alert && <p className="alert">{alert}</p>}
          <Input
            label
            type="text"
            id="email"
            name="Email"
            onChange={() => {
              setAlert("");
            }}
          />
          <Input
            label
            type="text"
            id="username"
            name="Nombre de usuario"
            onChange={() => {
              setAlert("");
            }}
          />
          <Input
            label
            type="password"
            id="password"
            name="Contraseña"
            onChange={() => {
              setAlert("");
            }}
          />
          <Input
            label
            type="password"
            id="re-password"
            name="Repetir contraseña"
            onChange={() => {
              setAlert("");
            }}
          />
          <Button
            primary
            onClick={() => {
              handleSignUp(
                document.getElementById("email").value,
                document.getElementById("username").value,
                document.getElementById("password").value,
                document.getElementById("re-password").value
              );
            }}
          >
            Registrarse
          </Button>
        </Form>
        <a href="/iniciar-sesion">
          ¿Ya tienes una cuenta? Inicia sesión
        </a>
      </StyledLogin>
    </>
  );
};

export default Signup;
