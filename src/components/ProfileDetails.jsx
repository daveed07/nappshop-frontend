import React from "react";
import SubTitle from "@components/micro-components/SubTitle";

const ProfileDetails = ({ user }) => {
  return (
    <div className="profile-details">
      <SubTitle size="xxlarge" color="black">{user.username}</SubTitle>
      <SubTitle size="medium" color="black">{user.name}</SubTitle>
      <SubTitle size="medium" color="black">{user.address1}</SubTitle>
      <SubTitle size="medium" color="black">{user.address2}</SubTitle>
      <SubTitle size="medium" color="black">{user.city}</SubTitle>
      <SubTitle size="medium" color="black">{user.region}</SubTitle>
      <SubTitle size="medium" color="black">{user.phone}</SubTitle>
      <SubTitle size="medium" color="black">{user.email}</SubTitle>
    </div>
  );
};

export default ProfileDetails;
