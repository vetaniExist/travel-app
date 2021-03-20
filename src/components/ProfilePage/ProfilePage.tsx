import React from "react";
import "./ProfilePageStyles.scss";
// import Header from "../Header/Header";
import Statistics from "./Statistics/Statistics";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function ProfilePage() {
  return (
    <div>
      <div>Profile page is here</div>
      <div className="profilePage">
        <ProfileInfo/>
        <Statistics/>
      </div>
    </div>
  );
}

export default ProfilePage;
