import React from 'react';
import LanguageSelect from './components/LanguageSelect/LaguageSelect';
import ProfileItem from './components/ProfileItem/ProfileItem';

const Profile = () => {
  return (
    <div className='profileContainer'>
        <LanguageSelect />
        <ProfileItem />
    </div>
  );
};

export default Profile;
