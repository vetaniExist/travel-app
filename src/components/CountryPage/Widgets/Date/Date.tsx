import React, { useState, useEffect } from "react";
import "./DateStyle.scss";

function DateTimeWidget({capital, countryCode, timezone}) {

  const [dateNow, setDateNow] = useState("");
  const countryTimeZone = timezone ? timezone : "UTC+01:00";

  const calcTime = (offset:any) => {
    const today = new Date();
    const utc = today.getTime() + (today.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000*offset));
    const local = `en-${countryCode ? countryCode : "US"}`;

    return nd.toLocaleString(local);
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
      The local time in {capital}
      </h4>
      <span>{dateNow}</span>
    </div>
  );
}

export default DateTimeWidget;
