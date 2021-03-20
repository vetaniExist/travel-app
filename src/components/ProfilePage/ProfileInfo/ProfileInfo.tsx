import React from "react";
import profileIcon from "../../../assets/icons/user_default_logo.svg";

function ProfileInfo() {
  return (
    <div className="profilePage__caption">
      <img src={profileIcon} alt="user-logo" />
      <div className="userName">Julia</div>
    </div>
  );
}

export default ProfileInfo;
