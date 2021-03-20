import React from "react";
import place from "../../../../assets/place.svg";

// import heartRed from '../assets/heartred.svg';
/* import heartWhite from "../../../../assets/heartwhite.svg"; */

function configurateCardStyle(country) {
  if (country.countryImage) {
    return {
      backgroundImage: `url(${country.countryImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
    };
  }

  return {};
}

export default function Card({ country }: any) {
  return (
    <div className="card card__template" style={configurateCardStyle(country)}>
      <header className="card__header">
        <span>{country.capital}</span>
        {/* <div className="card__header_favorites">
                <span>Likes</span>
                <img className="card__icon" src={heartWhite} alt="" />
              </div> */}
      </header>
      <footer className="card__footer">
        <img className="card__icon place" src={place} alt="" />
        <span>{country.name}</span>
      </footer>
    </div>
  );
}
