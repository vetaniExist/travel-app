import React from "react";
import "./CurrencyStyle.scss";

function Currency({currency}) {

  const{ EUR, USD, RUB, BYN, UAH } = currency;

  return (
    <div className="card__template card__template_widget currency">

      <h4>Currency exchange</h4>

      <div className="widgetTextItem">EUR {EUR}</div>
      <div className="widgetTextItem">USD {USD}</div>
      <div className="widgetTextItem">RUB {RUB}</div>
      <div className="widgetTextItem">BYN {BYN}</div>
      <div className="widgetTextItem">UAH {UAH}</div>

    </div>
  );
}

export default Currency;
