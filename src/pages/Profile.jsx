import React, { useState } from 'react';
import Header from '@components/Header';
import { useSelector } from "react-redux";
import ProfileEdit from '@components/ProfileEdit';
import ProfileDetails from '@components/ProfileDetails';
import Title from "@components/micro-components/Title";
import SubTitle from "@components/micro-components/SubTitle";
import Image from "@components/micro-components/Image";
import Button from '@components/micro-components/Button';
import Down from '@components/svg-components/Down';
import OrdersContainer from '@containers/OrdersContainer';
import StyledProfile from '@styles/styledProfile';
import colors from '@constants/colors';

const image = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [toggle, setToggle] = useState(false);
  const user = useSelector((state) => state.user);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <Header/>
      <StyledProfile toggle={toggle}>
        <div className="profile-container">
          <Title size="xxlarge" color={colors.black}>Profile</Title>
          <Image profile src={user.avatar || image} alt="avatar" />
            {edit ? (
              <ProfileEdit user={user} setEdit={setEdit} edit={edit}/>
            ) : (
              <ProfileDetails user={user}/>
            )}
          {!edit && <Button primary onClick={handleEdit}>Edit profile</Button>}
        </div>
        <OrdersContainer/>
      </StyledProfile>
    </>
  );
}

export default Profile;