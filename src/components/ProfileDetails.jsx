import React from "react";
import SubTitle from "@components/micro-components/SubTitle";

const ProfileDetails = ({ user }) => {
  return (
    <div className="profile-details">
      {/* <h2 className="profile-username">{user.username}</h2> */}
      <SubTitle size="xxlarge" color="black">{user.username}</SubTitle>
      {/* <p className="profile-name">{user.name}</p>
      <p className="profile-email">{user.email}</p>
      <p className="profile-password">{user.password.replace(/./g, "*")}</p>
      <p className="profile-address">{user.address}</p>
      <p className="profile-phone">{user.phone}</p> */}
      <SubTitle size="medium" color="black">{user.password.replace(/./g, "*")}</SubTitle>
      <SubTitle size="medium" color="black">{user.name}</SubTitle>
      <SubTitle size="medium" color="black">{user.address}</SubTitle>
      <SubTitle size="medium" color="black">{user.phone}</SubTitle>
      <SubTitle size="medium" color="black">{user.email}</SubTitle>
    </div>
  );
};

export default ProfileDetails;
