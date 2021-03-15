import React from "react";
import "../css/app.scss";
import CountryPage from "./CountryPage/CountryPage";
import Header from "./Header/Header";
import Footer from "./Footer";
// import MainPage from "./MainPage/MainPage";
import { storeExample } from "../store.example";

const App: React.FC = () => (
    <>
      <Header/>
      {/* <MainPage/> */}
      <CountryPage countriesInfo={storeExample}/>
      <Footer/>
    </>
);

export default App;
