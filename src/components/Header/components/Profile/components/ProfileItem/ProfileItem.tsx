import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import profileIcon from "../../../../../../assets/icons/user_default_logo.svg";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    "& > *": {
      color: "#717171",
      backgroundColor: "#ffffff",
      border: "1px solid #717171",
    },
  },
}));

const ProfileItem = () => {
  const classes = useStyles();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleChangeOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChangeLogoutStatus = () => {
    setIsMenuOpen(false);
    setIsLogin(false);
  };

  const handleChangeLoginStatus = () => {
    setIsMenuOpen(false);
    setIsLogin(true);
  };

  const handleChangeOpenSignUp = () => {
    setIsMenuOpen(false);
  };

  const closeMenu = (item: any) => {
    if (item && item.target.parentElement) {
      if (item.target.parentElement.id !== "profileMenu" && item.target.id !== "profileMenu") {
        setIsMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isMenuOpen]);

  return (
      <div className="profileItemContainer">
          <div className="menu" id="profileMenu" onClick={handleChangeOpenMenu}>
            <svg className="menuIcon"></svg>
            {
              isMenuOpen
                ? <div className="menuItems">
                <ButtonGroup
                  className={classes.root}
                  orientation="vertical"
                  aria-label="vertical outlined primary button group"
                >
                    {isLogin ? <Button aria-label="menuBtn" onClick={handleChangeLogoutStatus}>Logout</Button>
                      : <Button aria-label="menuBtn" onClick={handleChangeLoginStatus}>Login</Button>}
                    {isLogin ? null : <Button aria-label="menuBtn" onClick={handleChangeOpenSignUp}>Sign up</Button>}
                </ButtonGroup>
              </div> : null
            }
          </div>
          <div className="userProfile">
            <img src={profileIcon} alt="user-logo"/>
            <div className="userName">Julia</div>
          </div>
      </div>
  );
};

export default ProfileItem;
