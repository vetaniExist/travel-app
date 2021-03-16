import React from "react";
import "./CountriesStyle.scss";
import Cards from "./Cards/Cards";
import { storeExample } from "../../../store.example";

function Countries(props) {
  return (
    <div className="countries">
      <h3 className="countries__header">
        Countries
      </h3>
      <div className="countries__container">
        <Cards countriesInfo={props.countriesInfo} />
      </div>
    </div>
  );
}

export default Countries;
