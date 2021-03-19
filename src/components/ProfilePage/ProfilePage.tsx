import React from "react";
import "./ProfilePage.scss";
import Header from "../Header/Header";
import Statistics from "./Statistics/Statistics";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function ProfilePage() {
  return (
    <div>
      <Header />
      <div className="profilePage">
        <ProfileInfo/>
        <Statistics/>
      </div>
    </div>
  )
}

export default ProfilePage