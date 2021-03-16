import React, {useEffect, useState} from "react";
import Weather from "./Weather/Weather";
import Date from "./Date/Date";
import Currency from "./Currency/Currency";
import "./WidgetsStyle.scss"

function Widgets({capital}) {

  const [weather, setWeather] = useState('');

  useEffect(() =>{
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=en&appid=22d4766f7d2759a9e613e180a9efc542&units=metric`;

    fetch(weatherUrl)
      .then(res => res.json())
      .then(weatherJson => {
        console.log('datalist loaded', weatherJson);
        const weather = {
          temperature: Math.round(weatherJson.main.temp),
          description: weatherJson.weather[0].description,
          humidity: Math.round(weatherJson.main.humidity),
        };
        console.log('datalist loaded', weatherJson);
        setWeather(weather);
      });

  }, []);

  return (
    <div className="widgets">
      <Weather weather={weather} />
      <Date />
      <Currency/>

    </div>

  );
}

export default Widgets;
