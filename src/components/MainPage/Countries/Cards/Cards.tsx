import React from "react";
import { Link } from "react-router-dom";
import "./CardsStyle.scss";
import { ICountry } from "../../../../store.example";
// import heartRed from '../assets/heartred.svg';
import heartWhite from "../../../../assets/heartwhite.svg";
import place from "../../../../assets/place.svg";

interface CardsProps {
  countriesInfo: ICountry[];
}

const Cards = ({ countriesInfo }: CardsProps) => (
    <>
      {countriesInfo.map((country: any) => (

        <Link to={`/country/${country.name}`} key={country.name+country.id} className="card__link">
          <div className="card card__template">
            <header className="card__header">
              <span>{country.capital}</span>
              {/*<div className="card__header_favorites">
                <span>Likes</span>
                <img className="card__icon" src={heartWhite} alt="" />
              </div>*/}
            </header>
            <footer className="card__footer">
              <img className="card__icon place" src={place} alt=""/>
              <span>{country.name}</span>
            </footer>
          </div>
        </Link>

      ))
      }
    </>
);

export default Cards;
