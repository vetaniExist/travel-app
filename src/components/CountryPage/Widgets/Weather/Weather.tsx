import React from "react";
import "./WeatherStyle.scss"

function Weather({weather, iconUrl, capital}) {

  const { mainWeather, temperature, description, humidity } = weather;


  return (
    <div className="card__template weather">
      <div>
        <h4>
          {mainWeather} in {capital}
          <img src={iconUrl} alt={description} className="weather__icon" />
        </h4>
        <div>Temperature: {temperature}°C</div>
        <div>Humidity: {humidity}%</div>
        <div>{description}</div>

      </div>

    </div>
  );
}

export default Weather;
