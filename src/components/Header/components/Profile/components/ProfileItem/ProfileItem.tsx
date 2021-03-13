import React, { useState, useEffect } from 'react';
import profileIcon from '../../../../../../assets/icons/user_default_logo.svg';
import { Button, ButtonGroup }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      color: '#717171',
      backgroundColor: '#ffffff',
      border: '1px solid #717171',
    },
  },
}));

const ProfileItem = () => {
  const classes = useStyles();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleChangeOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleChangeLogoutStatus = () => {
    setIsMenuOpen(false);
    setIsLogin(false);
  }

  const handleChangeLoginStatus = () => {
    setIsMenuOpen(false);
    setIsLogin(true);
  }

  const handleChangeOpenSignUp = () => {
    setIsMenuOpen(false);
  }
  
  useEffect(() => {
    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    }
    console.log(isMenuOpen)
  }, [isMenuOpen])

  const closeMenu = (item) => {
    if (item && item.target.parentElement) {
      if (item.target.parentElement.id !== 'profileMenu' &&  item.target.id !== 'profileMenu') {
        setIsMenuOpen(false);
      }
    }
  }

  return (
      <div className='profileItemContainer'>
          <div className='menu' id='profileMenu' onClick={handleChangeOpenMenu}>
            <svg width="22" height="16" viewBox="0 0 22 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <line id='profileMenu' y1="14.7265" x2="22" y2="14.7265" stroke="white" stroke-width="2"/>
              <line id='profileMenu' y1="8.82465" x2="22" y2="8.82465" stroke="white" stroke-width="2"/>
              <line id='profileMenu' y1="1.84967" x2="22" y2="1.84967" stroke="white" stroke-width="2"/>
            </svg>
            {
              isMenuOpen ?  
              <div className='menuItems'>
                <ButtonGroup
                  className={classes.root}
                  orientation='vertical'
                  aria-label='vertical outlined primary button group'
                  >
                    {isLogin ? <Button aria-label='menuBtn' onClick={handleChangeLogoutStatus}>Logout</Button> : <Button aria-label='menuBtn' onClick={handleChangeLoginStatus}>Login</Button>}
                    {isLogin ? null : <Button aria-label='menuBtn' onClick={handleChangeOpenSignUp}>Sign up</Button>}
                  </ButtonGroup>
              </div> : null
            }
          </div>
          <div className='userProfile'>
            <img src={profileIcon} alt='user-logo'/>
            <div className='userName'>Julia</div>
          </div>
      </div>
  );
};

export default ProfileItem;
