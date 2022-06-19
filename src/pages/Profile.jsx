import React, { useState } from 'react';
import Header from '@components/Header';
import { useSelector } from "react-redux";
import ProfileEdit from '@components/ProfileEdit';
import ProfileDetails from '@components/ProfileDetails';
import Title from "@components/micro-components/Title";
import Button from '@components/micro-components/Button';
import "@styles/profile.scss";
import colors from '@constants/colors';

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const user = useSelector((state) => state.user);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <Header/>
      <div className="profile">
        <Title size="xxxlarge" color={colors.black}>Profile</Title>
        <div className="profile-container">
          <picture className="profile-picture">
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
          </picture>
            {edit ? (
              <ProfileEdit user={user} setEdit={setEdit} edit={edit}/>
            ) : (
              <ProfileDetails user={user}/>
            )}
          {!edit && <Button primary onClick={handleEdit}>Edit profile</Button>}
        </div>
      </div>
    </>
  );
}

export default Profile;