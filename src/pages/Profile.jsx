import React, { useState } from "react";
import Header from "@components/Header";
import { useSelector } from "react-redux";
import ProfileEdit from "@components/ProfileEdit";
import ProfileDetails from "@components/ProfileDetails";
import Title from "@components/micro-components/Title";
import Image from "@components/micro-components/Image";
import Button from "@components/micro-components/Button";
import OrdersContainer from "@containers/OrdersContainer";
import Modal from "@components/Modal";
import StyledProfile from "@styles/styledProfile";
import colors from "@constants/colors";

const image =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.user);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <Header />
      <StyledProfile>
        <Modal open={open} setOpen={setOpen}>
          <p>{message}</p>
        </Modal>
        <div className="wrapper">
          <div className="profile-container">
            <Title size="xxlarge" color={colors.black}>
              Profile
            </Title>
            <Image profile src={user.avatar || image} alt="avatar" />
            {edit ? (
              <ProfileEdit
                user={user}
                setEdit={setEdit}
                edit={edit}
                open={open}
                setOpen={setOpen}
                setMessage={setMessage}
              />
            ) : (
              <ProfileDetails user={user} />
            )}
            {!edit && (
              <Button primary onClick={handleEdit}>
                Edit profile
              </Button>
            )}
          </div>
          <OrdersContainer />
        </div>
      </StyledProfile>
    </>
  );
};

export default Profile;
