import React from "react";
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";

const ProfileDetails = ({ user }) => {
  return (
    <div className="profile-details">
      <Title size="xxlarge" color="black">
        {user.username}
      </Title>
      <SubTitle size="medium" color="black">
        Name: <span>{user.name}</span>
      </SubTitle>
      <SubTitle size="medium" color="black">
        Email: <span>{user.email}</span>
      </SubTitle>
      <SubTitle size="medium" color="black">
        Address:{" "}
        <span>
          {user.address1}, {user.address2}
        </span>
      </SubTitle>
      <SubTitle size="medium" color="black">
        Region:{" "}
        <span>
          {user.city}, {user.region}
        </span>
      </SubTitle>
      <SubTitle size="medium" color="black">
        Phone: <span>{user.phone}</span>
      </SubTitle>
    </div>
  );
};

export default ProfileDetails;
