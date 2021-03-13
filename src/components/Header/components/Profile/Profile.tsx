import React from 'react';
import LanguageSelect from './components/LanguageSelect/LaguageSelect';
import ProfileItem from './components/ProfileItem/ProfileItem';
import './ProfileStyles.css';

const Profile = () => {
  return (
    <div className='profileContainer'>
        <LanguageSelect />
        <ProfileItem />
    </div>
  );
};

export default Profile;
