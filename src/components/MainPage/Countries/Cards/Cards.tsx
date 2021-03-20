import React from "react";
import { Link } from "react-router-dom";
import "./CardsStyle.scss";
import { ICountry } from "../../../../store.example";

import Card from "./Card";

interface CardsProps {
  countriesInfo: ICountry[];
}

function Cards({ countriesInfo }: CardsProps) {
  return (
    <>
      {countriesInfo.map((country: any) => (
        <Link to={`/country/${country.name}`} key={country.name + country.id} className="card__link">
          <Card country={country}></Card>
        </Link>
      ))
      }
    </>
  );
}

export default Cards;
