import React from "react";
import { ICountry } from "../../../store.example";

interface CountryInfoProps {
  country: ICountry;
}

function CountryInfo({ country }: CountryInfoProps) {
  const { name, capital, countryDescription, countryFlagImage } = country;
  return (
    <>
      <div className="countryDetails">
        <div className="countryInfo">
          <img src={countryFlagImage} alt="country-flag" />
          <h2 className="countryDetailsSubTitle">{name}</h2>
        </div>
        <div className='countryInfo'>
          <h2 className="countryDetailsTitle">Capital:</h2>
          <h2 className="countryDetailsSubTitle">{capital}</h2>
        </div>
        <div className='countryDescription'>
          <h2 className="countryDetailsTitle">Description:</h2>
          <p>{countryDescription}</p>
        </div>
      </div>
    </>
  );
}

export default CountryInfo;
