import React from "react";
import { store } from "@redux/store";
import Button from "@components/micro-components/Button";
import Input from "@components/micro-components/Input";

const ProfileEdit = ({ user, setEdit, edit }) => {
  const handleSubmit = () => {
    store.dispatch({ type: "EDIT_PROFILE", payload: {
      username: document.getElementById("username").value ? document.getElementById("username").value : user.username,
      name: document.getElementById("name").value ? document.getElementById("name").value : user.name,
      email: document.getElementById("email").value ? document.getElementById("email").value : user.email,
      password: document.getElementById("password").value ? document.getElementById("password").value : user.password,
      address: document.getElementById("address").value ? document.getElementById("address").value : user.address,
      phone: document.getElementById("phone").value ? document.getElementById("phone").value : user.phone,
    } });
    setEdit(!edit);
  }
  return (
    <div className="profile-edit" >
      <Input id="username" type="text" placeholder={user.username} />
      <Input id="name" type="text" placeholder={user.name ? user.name : "Full name"} />
      <Input id="email" type="email" placeholder={user.email} />
      <Input id="password" type="password" placeholder={user.password} />
      <Input id="address" type="text" placeholder={user.address ? user.address : "Address"} />
      <Input id="phone" type="text" placeholder={user.phone ? user.phone : "Phone"} />
      <Button primary onClick={handleSubmit}>Save</Button>
    </div>
  );
}

export default ProfileEdit;
