import React from 'react';
import '../css/app.scss';

function Cards() {

  return (
    <div className="card">
      <header className="card__header">
        <span>City</span>
        <div>
          <span>Likes</span>
          <span>hearts</span>
        </div>
      </header>
      <footer className="card__footer">
        <img alt=""/>
        <span>Country</span>
      </footer>

    </div>
  )
}

export default Cards