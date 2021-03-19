import React, { useContext } from "react";
import "./CountriesStyle.scss";
import Cards from "./Cards/Cards";
import Context from "../../Context";
import LanguageContext from "../../LangContext";

const textToTranslate = {
  EN: {
    countryTitle: "Countries",
    notFound: "Not Found"
  },
  RU: {
    countryTitle: "Страны",
    notFound: "Не найдено"
  },
  GE: {
    countryTitle: "Land",
    notFound: "Nicht gefunden"
  }
}

function Countries() {
  const [context] = useContext(Context);
  const [lang, ] = useContext(LanguageContext);

  return (
    <div className="countries">
      <h3 className="countries__header">
        {textToTranslate[lang].countryTitle}:
      </h3>
      <div className="countries__container">
        {/* <Cards countriesInfo={props.countriesInfo} /> */}
        {context.length === 0 ?<h3>{textToTranslate[lang].notFound}!</h3> : <Cards countriesInfo={context} />}
      </div>
    </div>
  );
}

export default Countries;
