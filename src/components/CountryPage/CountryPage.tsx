import React from 'react';
import '../../css/app.scss';
// import Cards from "./Cards";
// import {storeExample} from "../store.example";
import Video from './Video/Video';
import Map from './Map/Map';
import Widgets from './Widgets/Widgets';
import CountryInfo from "./CountryInfo/CountryInfo";

function CountryPage() {
  return (
    <div className="countryPage">

      <CountryInfo/>
      <Map />
      <Widgets />
      <Video />
    </div>
  )
}

export default CountryPage