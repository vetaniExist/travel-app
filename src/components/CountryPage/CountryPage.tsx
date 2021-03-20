import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Slider from "../Slider/Slider";
import CountryInfo from "./CountryInfo/CountryInfo";
import Map from "./Map/Map";
import Widgets from "./Widgets/Widgets";
import Video from "./Video/Video";
import { ICountry } from "../../store.example";
import toTranslate from "../Translate";

interface CardsProps {
  countriesInfo: ICountry[];
  lang: string;
}
interface ParamTypes {
  name: string;
}

function CountryPage({ countriesInfo, lang }: CardsProps) {
  const { name } = useParams<ParamTypes>();
  const [countryCapitalCoord, setCoord] = useState([-21.13938, -175.2018]);
  const [country, setCountry] = useState(countriesInfo.find(item => item.name === name) || countriesInfo[0]);

  
  useEffect(() => {
    fetch("https://travel-app-v.herokuapp.com/api/country/" + name + "/" + lang.toLowerCase(), {
      mode: 'cors',
    })
      .then((data) => data.json())
      .then((dataJson) => {
        setCoord([dataJson.capital.lat, dataJson.capital.lon]);
        const country = {
          name: dataJson.name,
          capital: dataJson.capital.name,
          countryDescription: dataJson.description,
          countryFlagImage: dataJson.flag,
          countryImage: "https://picsum.photos/id/1018/1000/600/",
          sights: dataJson.touristAttractions,
          videoId: dataJson.videoId,
          currencyCode: dataJson.currencies[0].code,
          currencyName: dataJson.currencies[0].name,
          currencySymbol: dataJson.currencies[0].symbol,
          iso: dataJson.alpha2Code,
          alpha2Code: dataJson.alpha2Code,
          timezone: dataJson.timezones[0]
        }
        setCountry(country);
      });
  }, [lang]);

  return (
    <div className="countryPage">
      <Slider country={country} isMainPage={false} lang={lang} />
      <div className="wrapper">
        <CountryInfo country={country} lang={lang} />
        <Map
          lang={lang} 
          coord={countryCapitalCoord}
          iso={country.iso}
        />
        {country.currencyCode && <Widgets
          capital={toTranslate(country.capital, lang)}
          currencyCode={country.currencyCode}
          currencyName={toTranslate(country.currencyName, lang)}
          currencySymbol={country.currencySymbol}
          timezone={country.timezone}
          countryCode={country.iso}
          lang={lang}
        />}
       <Video videoId={country.videoId}/>
      </div>
    </div>
  );
}

export default CountryPage;
