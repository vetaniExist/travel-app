import React from "react";
// import {storeExample} from "../store.example";
import Video from "./Video/Video";
import Map from "./Map/Map";
import Widgets from "./Widgets/Widgets";
import CountryInfo from "./CountryInfo/CountryInfo";
import Slider from "../Slider/Slider";
import { ICountry } from "../../store.example";

interface CardsProps {
  countriesInfo: ICountry[];
}

function CountryPage({ countriesInfo }: CardsProps) {
  return (
    <div className="countryPage">
      <Slider />
      <CountryInfo
        id={countriesInfo[1].id}
        name={countriesInfo[1].name}
        capital={countriesInfo[1].capital}
        countryDescription={countriesInfo[1].countryDescription}
        countryFlagImage={countriesInfo[1].countryFlagImage}
      />
      <Map />
      <Widgets />
      <Video />
    </div>
  );
}

export default CountryPage;
