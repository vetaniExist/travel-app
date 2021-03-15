import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "../css/app.scss";
import CountryPage from "./CountryPage/CountryPage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainPage from "./MainPage/MainPage";
import { storeExample } from "../store.example";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://travel-app-v.herokuapp.com/api/country", {
      mode: 'cors',
    })
      .then((data) => data.json())
      .then((dataJson) => {
        console.log(dataJson);
        setData(dataJson);
      });
  }, []);
  return (
    <>
      <Header />

      <Router>
        <Switch>
          {/* <Route path="/authorization">
            <Authorization />
          </Route>*/}
          <Route path="/country/:id">
            <CountryPage countriesInfo={storeExample} />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </>
  )
}

/* const App = (): JSX.Element => (
  <>
    <Header />

    <Router>
      <Switch>
        {<Route path="/authorization">
          <Authorization />
        </Route>}
        <Route path="/country/:id">
          <CountryPage countriesInfo={storeExample} />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>

    <Footer />
  </>
);
 */
export default App;