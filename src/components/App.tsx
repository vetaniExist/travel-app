import React, { useState } from "react";
import "../css/app.scss";
import Footer from "./Footer";
import Countries from './Countries'
import CountryPage from "./CountryPage";

const App: React.FC = () => {

  const[] = useState();

  return (
    <>
      <header className="header">Header</header>
      <main className="main">
        <p>Slider</p>
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
