import React, { useState, useEffect, CSSProperties } from "react";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";

const Header = (props) => {
  const topHeaderPosition: CSSProperties = {
    width: "100%",
    position: "absolute",
    backgroundColor: "rgb(34 34 34 / 0%)",
  };

  const scrollHeaderPosition: CSSProperties = {
    position: "sticky",
    backgroundColor: "#222222",
  };

  const [headerStyle, setHeaderStyle] = useState(topHeaderPosition);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log("preconditional", window.pageYOffset > 0);
      if (window.pageYOffset > 0) {
        setHeaderStyle(scrollHeaderPosition);
      } else if (window.pageYOffset === 0) {
        setHeaderStyle(topHeaderPosition);
      }

      // console.log(window.pageYOffset, headerStyle);
    });
  }, []);

  return (
    <header className='header' style={headerStyle}>
      <div className='wrapper'>
        <div className='headerContainer'>
          <Logo />
          {/* remove search for country page */}
          <Search />
          <Profile
            language={props.language}
            setLanguage={props.setLanguage}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
