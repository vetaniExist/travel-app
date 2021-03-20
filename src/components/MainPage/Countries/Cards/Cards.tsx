import React from "react";
import { Link } from "react-router-dom";
import "./CardsStyle.scss";
import { ICountry } from "../../../../store.example";
// import heartRed from '../assets/heartred.svg';
import heartWhite from "../../../../assets/heartwhite.svg";
import place from "../../../../assets/place.svg";
import toTranslate from "../../../Translate";

interface CardsProps {
  countriesInfo: ICountry[];
  lang: string;
}

const Cards = ({ countriesInfo, lang }: CardsProps) => (
    <>
      {countriesInfo.map((country: any) => (

        <Link to={`/country/${country.name}`} key={country.name+country.id} className="card__link">
          <div className="card card__template">
            <header className="card__header">
              <span>{toTranslate(country.capital, lang)}</span>
              <div className="card__header_favorites">
                <span>Likes</span>
                <img className="card__icon" src={heartWhite} alt="" />
              </div>
            </header>
            <footer className="card__footer">
              <img className="card__icon place" src={place} alt=""/>
              <span>{toTranslate(country.name, lang)}</span>
            </footer>
          </div>
        </Link>

      ))
      }
    </>
);

export default Cards;
