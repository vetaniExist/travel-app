import React, { useContext } from "react";
import "./CountriesStyle.scss";
import Cards from "./Cards/Cards";
import Context from "../../Context";
import LanguageContext from "../../LangContext";

function Countries() {
  const [context] = useContext(Context);
  const [lang, ] = useContext(LanguageContext);

  return (
    <div className="countries">
      <h3 className="countries__header">
        {lang === "EN" ? "Countries" : lang === "RU" ? "Страны" : "Land"}
      </h3>
      <div className="countries__container">
        {/* <Cards countriesInfo={props.countriesInfo} /> */}
        {context.length === 0 ?<h3>Not Found!</h3> : <Cards countriesInfo={context} />}
      </div>
    </div>
  );
}

export default Countries;
