import React from 'react';
import '../css/app.scss';
import { ICountry } from '../store.example';
// import heartRed from '../assets/heartred.svg';
import heartWhite from '../assets/heartwhite.svg'
import place from '../assets/place.svg'


interface CardsProps {
  countriesInfo: ICountry[];
}

function handleClick() {
  console.log('click!');
}

const Cards = ({countriesInfo}: CardsProps) => {

  return (
    <>
      {countriesInfo.map((country: any, index: number) => (
          <div className="card" key={index} onClick={handleClick}>
            <header className="card__header">
              <span>{country.capital}</span>
              <div className="card__header_favorites">
                <span>Likes</span>
                <img className="card__icon" src={heartWhite} alt="" />
              </div>
            </header>
            <footer className="card__footer">
              <img className="card__icon place" src={place} alt=""/>
              <span>{country.name}</span>
            </footer>
          </div>
        ))
      }
    </>
  )
};

export default Cards