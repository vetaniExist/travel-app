import React from "react";
import "./CurrencyStyle.scss";

function Currency({currencyRates, currencyName, currencySymbol}) {
  const { EUR, USD, RUB, BYN, UAH } = currencyRates;

  return (
    <div className="card__template card__template_widget currency">

      <h4> {currencyName} {currencySymbol}</h4>

      <div className="widgetTextItem">EUR {EUR}</div>
      <div className="widgetTextItem">USD {USD}</div>
      <div className="widgetTextItem">RUB {RUB}</div>
      <div className="widgetTextItem">BYN {BYN}</div>
      <div className="widgetTextItem">UAH {UAH}</div>

    </div>
  );
}

export default Currency;
