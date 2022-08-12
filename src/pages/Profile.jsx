import React, { useState } from "react";
import axios from "axios";
import Header from "@components/Header";
import { useSelector } from "react-redux";
import ProfileEdit from "@components/ProfileEdit";
import ProfileDetails from "@components/ProfileDetails";
import Title from "@components/micro-components/Title";
import Image from "@components/micro-components/Image";
import Input from "@components/micro-components/Input";
import Button from "@components/micro-components/Button";
import OrdersContainer from "@containers/OrdersContainer";
import Modal from "@components/Modal";
import StyledProfile from "@styles/styledProfile";
import Upload from "@components/svg-components/Upload";
import colors from "@constants/colors";
import image from "@logos/default_profile.jpg";

const API = process.env.REACT_APP_API;

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.user);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    axios
      .patch(`${API}/users/profile/${user.id}`, formData)
      .then((res) => {
        store.dispatch({ type: "SET_USER", payload: res.data.user.img });
        setOpen(true);
        setMessage(res.data.message);
      }).catch((err) => {
        setOpen(true);
        setMessage(err.response.data.message);
      }
      );
  }

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
            <Image profile nohref src={user.avatar || image} alt="avatar">
              <div className="image-overlay">
                <Input
                  id="avatar"
                  type="file"
                  name="uploadFile"
                  accept="image/*"
                  hidden
                  onChange={handleUpload}
                />
                <label htmlFor="avatar">
                  <Upload />
                </label>
              </div>
            </Image>
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
