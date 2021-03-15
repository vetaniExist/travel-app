import React from "react";
import { useParams } from "react-router-dom";
import Slider from "../Slider/Slider";
import CountryInfo from "./CountryInfo/CountryInfo";
import Map from "./Map/Map";
import Widgets from "./Widgets/Widgets";
import Video from "./Video/Video";
import { ICountry } from "../../store.example";

interface CardsProps {
  countriesInfo: ICountry[];
}
interface ParamTypes {
  id: string;
}

function CountryPage({ countriesInfo }: CardsProps) {
  const { id } = useParams<ParamTypes>();
  const country: ICountry = countriesInfo.filter(item => item.id === id)[0];

  return (
    <div className="countryPage">
      <Slider />
      <div className="wrapper">
        <CountryInfo country={country}/>
        <Map />
        <Widgets />
        <Video />
      </div>
    </div>

  );
}

export default CountryPage;
