import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import "../css/app.scss";
import CountryPage from "./CountryPage/CountryPage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainPage from "./MainPage/MainPage";
import { storeExample } from "../store.example";

const App: React.FC = () => (
    <>
      <Header/>

      <Router>
        <Switch>
          <Route path="/country">
            <CountryPage countriesInfo={storeExample}/>
          </Route>
          <Route path="/">
            <Link to="/country">Country</Link>
            <MainPage/>
          </Route>
        </Switch>
      </Router>

      <Footer/>
    </>
);

export default App;
