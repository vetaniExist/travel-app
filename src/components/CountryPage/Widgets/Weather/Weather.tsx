import React, { useContext } from "react";
import "./WeatherStyle.scss"
import LanguageContext from "../../../LangContext";

const textToTranslate = {
  EN: {
    in: "in",
    temperature: "Temperature",
    humidity: "Humidity"
  },
  RU: {
    in: "в",
    temperature: "Температура",
    humidity: "Влажность"
  },
  GE: {
    in: "in",
    temperature: "Temperatur",
    humidity: "Feuchtigkeit"
  }
}

function Weather({weather, iconUrl, capital}) {
  const [lang,] = useContext(LanguageContext);
  const { mainWeather, temperature, description, humidity } = weather;

  return (
    <div className="card__template card__template_widget weather">
        <h4>
          {mainWeather} {textToTranslate[lang].in} {capital}
          <img src={iconUrl} alt={description} className="weather__icon" />
        </h4>
        <div className="widgetTextItem">{textToTranslate[lang].temperature}: {temperature}°C</div>
        <div className="widgetTextItem">{textToTranslate[lang].humidity}: {humidity}%</div>
        <div className="widgetTextItem">{description}</div>
    </div>
  );
}

export default Weather;
