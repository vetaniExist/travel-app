import React, {useEffect, useState} from "react";
import Weather from "./Weather/Weather";
import Date from "./Date/Date";
import Currency from "./Currency/Currency";
import "./WidgetsStyle.scss"

function Widgets({capital}) {

  const [weather, setWeather] = useState('');
  const [currency, setCurrency] = useState('');

  useEffect(() =>{
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=en&appid=22d4766f7d2759a9e613e180a9efc542&units=metric`;

    fetch(weatherUrl)
      .then(res => res.json())
      .then(weatherJson => {
        const weather = {
          name: weatherJson.name,
          mainWeather: weatherJson.weather[0].main,
          temperature: Math.round(weatherJson.main.temp),
          description: weatherJson.weather[0].description,
          humidity: Math.round(weatherJson.main.humidity),
          icon: weatherJson.weather[0].icon,
        };

        console.log('weather loaded', weatherJson);
        setWeather(weather);
      });

  }, []);
  const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";

  useEffect(() =>{
    const currencyUrl = `https://v6.exchangerate-api.com/v6/a9ef46a9e2b66f8e834cd9e8/latest/USD`;

    fetch(currencyUrl)
      .then(res => res.json())
      .then(currencyJson => {
        console.log('currency loaded', currencyJson);
        const currency = {
          AUD: currencyJson.conversion_rates.AUD,
          EUR: currencyJson.conversion_rates.EUR,
          USD: currencyJson.conversion_rates.USD,
          RUB: currencyJson.conversion_rates.RUB,
          BYN: currencyJson.conversion_rates.BYN,
          UAH: currencyJson.conversion_rates.UAH,

        };

        console.log('weather loaded', currencyJson);
        setCurrency(currency);
      });

  }, []);

  return (
    <div className="widgets">
      <Weather weather={weather} iconUrl={iconUrl} capital={capital}/>
      <Date />
      <Currency currency={currency}/>

    </div>

  );
}

export default Widgets;
