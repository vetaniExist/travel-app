import React from "react";
import { ICountry } from "../../../store.example";
interface CountryInfoProps {
  country: ICountry;
  lang: string;
}

const headerToTranslate = {
  EN: {
    capital: "Capital",
    description: "Description",
    loading: "Loading"
  },
  RU: {
    capital: "Столица",
    description: "Описание",
    loading: "Загрузка"
  },
  DE: {
    capital: "Hauptstadt",
    description: "Beschreibung",
    loading: "Beladung"
  }
}

function CountryInfo({ country, lang }: CountryInfoProps) {

  if (!country) {
    return (
      <div>{ headerToTranslate[lang].loading }...</div>
    );
  }
  const { name, capital, countryDescription, countryFlagImage } = country;

  return (
    <>
      <div className="countryDetails">
        <div className="countryInfo">
          <img src={countryFlagImage} alt="country-flag" />
          <h2 className="countryDetailsSubTitle">{name}</h2>
        </div>
        <div className='countryInfo'>
          <h2 className="countryDetailsTitle">{ headerToTranslate[lang].capital }:</h2>
          <h2 className="countryDetailsSubTitle">{capital}</h2>
        </div>
        <div className='countryDescription'>
          <h2 className="countryDetailsTitle">{ headerToTranslate[lang].description }:</h2>
          <p>{countryDescription}</p>
        </div>
      </div>
    </>
  );
}

export default CountryInfo;
