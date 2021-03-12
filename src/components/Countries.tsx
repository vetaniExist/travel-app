import React from 'react';
import '../css/app.scss';
import Cards from "./Cards";

function Countries() {
  return (
    <div className="countries">
      <h3 className="countries__header">
        Countries
      </h3>
      <div className="countries__container">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
    </div>
  )
}

export default Countries