import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../Slider/Slider";
import CountryInfo from "./CountryInfo/CountryInfo";
import Map from "./Map/Map";
import Widgets from "./Widgets/Widgets";
import Video from "./Video/Video";
import { ICountry } from "../../store.example";

interface CardsProps {
  countriesInfo: ICountry[];
  language: string;
}
interface ParamTypes {
  name: string;
}

function CountryPage({ countriesInfo, language }: CardsProps) {
  // Tonga
  /* "lat": -21.13938,
  "lon": -175.2018 */
  const { name } = useParams<ParamTypes>();
  const [countryCapitalCoord, setCoord] = useState([-21.13938, -175.2018]);
  const [country, setCountry] = useState(countriesInfo.find(item => item.name === name) || countriesInfo[0]);

  
  useEffect(() => {
    fetch("https://travel-app-v.herokuapp.com/api/country/" + name, {
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
        }

        setCountry(country);
      });
  }, []);

  return (
    <div className="countryPage">
      <Slider country={country} isMainPage={false} />
      <div className="wrapper">
        <CountryInfo country={country} />
        <Map
          language={language}
          coord={countryCapitalCoord}
          iso={country.iso}
        />
        {country.currencyCode && <Widgets
          capital={country.capital}
          currencyCode={country.currencyCode}
          currencyName={country.currencyName}
          currencySymbol={country.currencySymbol}
        />}
       <Video videoId={country.videoId}/>
      </div>
    </div>
  );
}

export default CountryPage;
