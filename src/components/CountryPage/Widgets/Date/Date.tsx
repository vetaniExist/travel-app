import React, { useState, useEffect, useContext } from "react";
import "./DateStyle.scss";
import LanguageContext from "../../../LangContext";

const textToTranslate = {
  EN: "The local time in ",
  RU: "Локальное время в ",
  GE: "Ortszeit in "
}

function DateTimeWidget({capital, countryCode, timezone}) {
  const [lang,] = useContext(LanguageContext);
  const [dateNow, setDateNow] = useState("");
  const countryTimeZone = timezone ? timezone : "UTC+01:00";

  const calcTime = (offset:any) => {
    const today = new Date();
    const minToToMiliSec = 60000;
    const utc = today.getTime() + (today.getTimezoneOffset() * minToToMiliSec);
    const hourToMiliSec = 3600000;
    const newDate = new Date(utc + (hourToMiliSec*offset));
    const local = `${lang.toLocaleLowerCase()}-${countryCode ? countryCode : "US"}`;

    return newDate.toLocaleString(local);
}

  useEffect(()=> {
      const zones = countryTimeZone.toString().split("UTC")[1].split(":");
      const hoursZone = zones[0];
      const minutesZone = zones[1];

      let timer = setTimeout(()=>{
        setDateNow(calcTime(`${hoursZone}.${minutesZone}`));
      }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="card__template date">
      <h4>
        {`${textToTranslate[lang]} ${capital}`}
      </h4>
      <span>{dateNow}</span>
    </div>
  );
}

export default DateTimeWidget;
