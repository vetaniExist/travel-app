import React from "react";

type CountryInfoProps = {
  id: number,
  name: string,
  capital: string,
  countryDescription: string,
  countryFlagImage: string
}

function CountryInfo({id, name, capital, countryDescription, countryFlagImage}: CountryInfoProps) {
  return (
    <div className="wrapper">
      <div className="countryDetails">
      <div className="countryInfo">
        <img src={countryFlagImage} alt="country-flag"/>
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
    </div>
  );
}

export default CountryInfo;
