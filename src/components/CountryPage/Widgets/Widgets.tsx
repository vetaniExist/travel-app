import React from "react";
import Weather from "./Weather/Weather";
import Date from "./Date/Date";
import Currency from "./Currency/Currency";
import "./WidgetsStyle.scss"

function Widgets() {
  return (
    <div className="widgets">
      <Weather />
      <Date />
      <Currency/>

    </div>

  );
}

export default Widgets;
