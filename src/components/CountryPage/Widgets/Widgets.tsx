import React from 'react';
import Weather from "./Weather/Weather";
import Date from "./Date/Date";
import Currency from "./Currency/Currency";


function Widgets() {
  return (
    <>
      <h3>Widgets</h3>
      <Weather/>
      <Date />
      <Currency/>

    </>


  );
}

export default Widgets;
