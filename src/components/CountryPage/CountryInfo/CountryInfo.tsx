import React, { useContext } from "react";
import { ICountry } from "../../../store.example";
import LanguageContext from "../../LangContext";

interface CountryInfoProps {
  country: ICountry;
}

function CountryInfo({ country }: CountryInfoProps) {

  if (!country) {
    return (
      <div>Loading...</div>
    );
  }
  const [lang,] = useContext(LanguageContext);
  const { name, capital, countryDescription, countryFlagImage } = country;

  return (
    <>
      <div className="countryDetails">
        <div className="countryInfo">
          <img src={countryFlagImage} alt="country-flag" />
          <h2 className="countryDetailsSubTitle">{name}</h2>
        </div>
        <div className='countryInfo'>
          <h2 className="countryDetailsTitle">{lang === "EN" ? "Capital:" : lang === "RU" ? "Столица:" : "Hauptstadt:"}</h2>
          <h2 className="countryDetailsSubTitle">{capital}</h2>
        </div>
        <div className='countryDescription'>
          <h2 className="countryDetailsTitle">{lang === "EN" ? "Description:" : lang === "RU" ? "Описание:" : "Beschreibung:"}</h2>
          <p>{countryDescription}</p>
        </div>
      </div>
    </>
  );
}

export default CountryInfo;
