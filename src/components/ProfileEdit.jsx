import React from "react";
import axios from "axios";
import { store } from "@redux/store";
import Button from "@components/micro-components/Button";
import Input from "@components/micro-components/Input";

const API = process.env.REACT_APP_API;

const ProfileEdit = ({ user, setEdit, edit }) => {
  const handleSubmit = () => {
    const userData = {
      username: document.getElementById("username").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      address1: document.getElementById("address1").value,
      address2: document.getElementById("address2").value,
      city: document.getElementById("city").value,
      province: document.getElementById("region").value,
    }
    axios.patch(`${API}/users/${user.id}`, userData)
      .then((res) => {
        alert(res.data.message);
        store.dispatch({ type: "SET_USER", user: res.data.result });
        setEdit(!edit);
      })
      .catch((err) => alert(err));
  }
  return (
    <div className="profile-edit" >
      <Input id="username" type="text" placeholder={user.username} />
      <Input id="name" type="text" placeholder={user.name ? user.name : "Full name"} />
      <Input id="email" type="email" placeholder={user.email} />
      <Input id="address1" type="text" placeholder={user.address1 ? user.address1 : "Address1"} />
      <Input id="address2" type="text" placeholder={user.address2 ? user.address2 : "Address2"} />
      <Input id="city" type="text" placeholder={user.city ? user.city : "City"} />
      <Input id="region" type="text" placeholder={user.region ? user.region : "Province"} />
      <Input id="phone" type="text" placeholder={user.phone ? user.phone : "Phone"} />
      <Button primary onClick={handleSubmit}>Save</Button>
    </div>
  );
}

export default ProfileEdit;
