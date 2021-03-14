
import React, { useState } from "react";
import "../css/app.scss";
import CountryPage from "./CountryPage/CountryPage";
import Header from './Header/Header';
import Footer from "./Footer";
import Countries from './Countries';
import Slider from './Slider/Slider';


const App: React.FC = () => {

  const[] = useState();

  return (
    <>
      <Header/>
      <main className="main">
        <Slider />
        <Countries />
      </main>

      <CountryPage />

      <footer >
        <Footer/>
      </footer>
    </>
  );
};

export default App;
