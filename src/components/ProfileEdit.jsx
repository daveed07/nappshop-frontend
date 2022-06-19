import React from "react";
import { store } from "@redux/store";
import Button from "@components/micro-components/Button";

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
      <input className="profile-username-edit" id="username" type="text" placeholder={user.username} />
      <input className="profile-name-edit" id="name" type="text" placeholder={user.name ? user.name : "Full name"} />
      <input className="profile-email-edit" id="email" type="text" placeholder={user.email} />
      <input className="profile-password-edit" id="password" type="text" placeholder={user.password} />
      <input className="profile-address-edit" id="address" type="text" placeholder={user.address ? user.address : "Address"} />
      <input className="profile-phone-edit" id="phone" type="text" placeholder={user.phone ? user.phone : "Phone"} />
      <Button primary onClick={handleSubmit}>Save</Button>
    </div>
  );
}

export default ProfileEdit;
