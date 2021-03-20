import React from "react";
import LanguageSelect from "./components/LanguageSelect/LaguageSelect";
import ProfileItem from "./components/ProfileItem/ProfileItem";

const Profile = (props) => (
  <div className='profileContainer'>
    <LanguageSelect
      language={props.language}
      setLanguage={props.setLanguage}
    />
    <ProfileItem />
  </div>
);

export default Profile;
