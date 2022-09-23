import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "@components/Header";
import { useSelector } from "react-redux";
import ProfileEdit from "@components/ProfileEdit";
import ProfileDetails from "@components/ProfileDetails";
import Title from "@micro-components/Title";
import Image from "@micro-components/Image";
import Input from "@micro-components/Input";
import Button from "@micro-components/Button";
import OrdersContainer from "@containers/OrdersContainer";
import Modal from "@components/Modal";
import StyledProfile from "@styles/styledProfile";
import Upload from "@svg-components/Upload";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "@constants/colors";
import { assets } from "@constants/assets";

const API = process.env.REACT_APP_API;

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, [user]);

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
      })
      .catch((err) => {
        setOpen(true);
        setMessage(err.response.data.message);
      });
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
              {loading && <Skeleton width={100} height={30} />}
              {!loading && "Profile"}
            </Title>
            <Image
              loading={loading}
              circle
              profile
              nohref
              src={user.avatar || assets.default_profile}
              alt="avatar"
            >
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
                loading={loading}
              />
            ) : (
              <ProfileDetails user={user} loading={loading} />
            )}
            {!edit && loading ? (
              <div className="button-skeleton-container">
                <Skeleton width={200} height={48} />
              </div>
            ) : (
              <Button primary onClick={handleEdit}>
                Edit profile
              </Button>
            )}
          </div>
          <OrdersContainer loading={loading} />
        </div>
      </StyledProfile>
    </>
  );
};

export default Profile;
