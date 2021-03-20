import React, { useContext, useEffect, useState } from "react";
import "./WeatherStyle.scss"
import LanguageContext from "../../../LangContext";
import toTranslate from "../../../Translate";

const textToTranslate = {
  EN: {
    in: " in",
    temperature: "Temperature",
    humidity: "Humidity"
  },
  RU: {
    in: " в",
    temperature: "Температура",
    humidity: "Влажность"
  },
  DE: {
    in: " in",
    temperature: "Temperatur",
    humidity: "Feuchtigkeit"
  }
}

function Weather({weather, iconUrl, capital}) {
  const [lang,] = useContext(LanguageContext);
  const { mainWeather, temperature, description, humidity } = weather;
  const [mainWeatherTranslate, setMainWeatherTranslate] = useState(mainWeather);
  const [descriptionTranslate, setDescriptionTranslate] = useState(description);
  
  useEffect(()=> {
    console.log(toTranslate(mainWeather, lang));
    setMainWeatherTranslate(toTranslate(mainWeather, lang));
    setDescriptionTranslate(toTranslate(description, lang))
  })

  return (
    <div className="card__template card__template_widget weather">
        <h4>
          {mainWeatherTranslate}
          {textToTranslate[lang].in} {capital}
          <img src={iconUrl} alt={description} className="weather__icon" />
        </h4>
        <div className="widgetTextItem">{textToTranslate[lang].temperature}: {temperature}°C</div>
        <div className="widgetTextItem">{textToTranslate[lang].humidity}: {humidity}%</div>
        <div className="widgetTextItem">
          {descriptionTranslate}
        </div>
    </div>
  );
}

export default Weather;
