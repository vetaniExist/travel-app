import React from "react";
import "./WeatherStyle.scss"

function Weather({weather}) {

  const { temperature, description, humidity } = weather;


  return (
    <div className="card__template weather">
      <div>
        <h4>Weather</h4>
        <div>Temperature: {temperature}°C</div>
        <div>Humidity: {humidity}%</div>
        <div>{description}</div>

      </div>

    </div>
  );
}

export default Weather;
