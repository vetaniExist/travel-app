import React from "react";
import "./WeatherStyle.scss"

function Weather({weather, iconUrl, capital}) {

  const { mainWeather, temperature, description, humidity } = weather;

  return (
    <div className="card__template card__template_widget weather">
        <h4>
          {mainWeather} in {capital}
          <img src={iconUrl} alt={description} className="weather__icon" />
        </h4>
        <div className="widgetTextItem">Temperature: {temperature}°C</div>
        <div className="widgetTextItem">Humidity: {humidity}%</div>
        <div className="widgetTextItem">{description}</div>
    </div>
  );
}

export default Weather;
