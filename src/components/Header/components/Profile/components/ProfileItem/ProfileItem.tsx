import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Autorization from "../Authpage/Autorization";
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
  const [isSignUp, setIsSignUp] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleRegistrationOpen = () => {
    setIsSignUp(true);
    setIsRegistrationOpen(true);
  };

  const handleRegistrationClose = () => {
    setIsRegistrationOpen(false);
  };

  const handleChangeOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChangeLogoutStatus = () => {
    setIsMenuOpen(false);
    setIsLogin(false);
  };

  const handleChangeLoginStatus = () => {
    setIsRegistrationOpen(true);
    setIsMenuOpen(false);
    setIsSignUp(false);
    setIsLogin(true);
  };

  const handleChangeOpenSignUp = () => {
    setIsRegistrationOpen(true);
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
                {isLogin ? null : <Button aria-label="menuBtn" onClick={handleRegistrationOpen}>Sign up</Button>}
              </ButtonGroup>
            </div> : null
        }
      </div>
      <div className="userProfile">
        <img src={profileIcon} alt="user-logo" />
        <div className="userName">Julia</div>
      </div>
      <Dialog open={isRegistrationOpen} onClose={handleRegistrationClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="customized-dialog-title" onClose={handleRegistrationClose}>
        {isLogin ? "Login" : "SignUp"}
        </DialogTitle>
        <DialogContent>
          <Autorization login={isLogin} register={isSignUp} />
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default ProfileItem;
