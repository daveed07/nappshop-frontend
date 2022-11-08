import React from "react";
import axios from "axios";
import { store } from "@redux/store";
import Button from "@micro-components/Button";
import Input from "@micro-components/Input";
import { env } from "@constants/env";

const ProfileEdit = ({ user, setEdit, edit, setOpen, setMessage }) => {
  const handleSubmit = () => {
    const userData = {
      username: document.getElementById("username").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address1: document.getElementById("address1").value,
      address2: document.getElementById("address2").value,
      city: document.getElementById("city").value,
      province: document.getElementById("region").value,
    };
    axios
      .patch(`${env.API}/users/${user.id}`, userData)
      .then((res) => {
        store.dispatch({ type: "SET_USER", payload: res.data.user });
        setEdit(!edit);
        setOpen(true);
        setMessage(res.data.message);
      })
      .catch((err) => {
        setOpen(true);
        setMessage(err.response.data.message);
      });
  };
  return (
    <div className="profile-edit">
      <Input id="username" type="text" placeholder={user.username} />
      <Input
        id="name"
        type="text"
        placeholder={user.name ? user.name : "Full name"}
      />
      <div className="input-container">
        <Input id="email" type="email" placeholder={user.email} />
        <Input
          id="phone"
          type="text"
          placeholder={user.phone ? user.phone : "Phone"}
        />
      </div>
      <div className="input-container">
        <Input
          id="address1"
          type="text"
          placeholder={user.address1 ? user.address1 : "Address1"}
        />
        <Input
          id="address2"
          type="text"
          placeholder={user.address2 ? user.address2 : "Address2"}
        />
      </div>
      <div className="input-container">
        <Input
          id="city"
          type="text"
          placeholder={user.city ? user.city : "City"}
        />
        <Input
          id="region"
          type="text"
          placeholder={user.region ? user.region : "Province"}
        />
      </div>
      <div className="button-container">
        <Button secondary onClick={() => setEdit(!edit)}>
          Cancelar
        </Button>
        <Button primary onClick={handleSubmit}>
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default ProfileEdit;
