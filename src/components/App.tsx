import React from "react";
import "../css/app.scss";
import CountryPage from "./CountryPage/CountryPage";
import Header from "./Header/Header";
import Footer from "./Footer";
import MainPage from "./MainPage/MainPage";

const App: React.FC = () => (
    <>
      <Header/>
      <MainPage/>
      <CountryPage />

      <Footer/>
    </>
);

export default App;
