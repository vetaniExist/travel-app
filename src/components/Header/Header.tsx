import React from 'react';
import './HeaderStyles.css';
import Logo from './components/Logo/Logo';
import Search from './components/Search/Search';
import Profile from './components/Profile/Profile';

const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='headerContainer'>
          <Logo />
          {/* remove for country page */}
          <Search /> 
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;
