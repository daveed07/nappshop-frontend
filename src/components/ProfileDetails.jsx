import React from "react";

const ProfileDetails = ({ user }) => {
  return (
    <div className="profile-details">
      <h2 className="profile-username">{user.username}</h2>
      <p className="profile-name">{user.name}</p>
      <p className="profile-email">{user.email}</p>
      <p className="profile-password">{user.password.replace(/./g, "*")}</p>
      <p className="profile-address">{user.address}</p>
      <p className="profile-phone">{user.phone}</p>
    </div>
  );
};

export default ProfileDetails;
