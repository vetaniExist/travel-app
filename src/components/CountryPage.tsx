import React from 'react';
import '../css/app.scss';
import Footer from "./Footer";
// import Cards from "./Cards";
// import {storeExample} from "../store.example";

function CountryPage() {
  return (
    <div className="countryPage">
      <h3>Header</h3>
      <div>Slider</div>
      <div>
        Countries Info
        <img alt="" />
        <h3>Country name</h3>
        <h4>Capital: city</h4>
        <p>Description
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
          'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
          'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ' +
          'occaecat cupidatat non proident, ' +
          'sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

      </div>
      <div>Map
      <h3>Location</h3>
      </div>
      <div className="countryPage__widgets_container">
        <div>погода</div>
        <div>время</div>
        <div>валюта</div>
      </div>
      <div>
        Video
      </div>
      <Footer/>
    </div>
  )
}

export default CountryPage