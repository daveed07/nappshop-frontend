import React from "react";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProfileDetails = (props) => {
  return (
    <div className="profile-details">
      <Title size="xxlarge" color="black">
        {props.loading && <Skeleton width={200} height={30} />}
        {!props.loading && props.user.name}
      </Title>
      <SubTitle size="medium" color="black">
        {props.loading && <Skeleton width="100%" height={18} />}
        {!props.loading && (
          <>
            Name: <span>{props.user.name}</span>
          </>
        )}
      </SubTitle>
      <SubTitle size="medium" color="black">
        {props.loading && <Skeleton width="100%" height={18} />}
        {!props.loading && (
          <>
            Email: <span>{props.user.email}</span>
          </>
        )}
      </SubTitle>
      <SubTitle size="medium" color="black">
        {props.loading && (
          <div className="skeleton-container">
            <Skeleton width="100%" height={18} count={2} />
          </div>
        )}
        {!props.loading && (
          <>
            Address:{" "}
            <span>
              {props.user.address1}, {props.user.address2}
            </span>
          </>
        )}
      </SubTitle>
      <SubTitle size="medium" color="black">
        {props.loading && (
          <div className="skeleton-container">
            <Skeleton width="100%" height={18} count={2} />
          </div>
        )}
        {!props.loading && (
          <>
            Region:{" "}
            <span>
              {props.user.city}, {props.user.region}
            </span>
          </>
        )}
      </SubTitle>
      <SubTitle size="medium" color="black">
        {props.loading && <Skeleton height={18} />}
        {!props.loading && (
          <>
            Phone: <span>{props.user.phone}</span>
          </>
        )}
      </SubTitle>
    </div>
  );
};

export default ProfileDetails;
