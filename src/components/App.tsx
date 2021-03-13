
import Header from './Header/Header';
import React from "react";
import "../css/app.scss";
import Footer from "./Footer";
import Countries from './Countries'

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <main className="main">
        <p>Slider</p>
        <Countries />
      </main>

      <footer >
        <Footer/>
      </footer>
    </>
  );
};

export default App;
