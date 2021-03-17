import React from "react";
import Countries from "./Countries/Countries";
import Slider from "../Slider/Slider";

const MainPage = (props) => (
  <main className="main">
    <Slider country={props.countriesInfo} isMainPage={true}/>
    <Countries
      countriesInfo={props.countriesInfo}
    />
  </main>
);

export default MainPage;
