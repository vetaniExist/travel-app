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
import Context from "./Context";

const getDefaultLanguage = () => {
  const lang = localStorage.getItem("language") ? localStorage.getItem("language") : "English";
  return lang;
};

function App() {
  const [seachData, setSeachData] = useState(storeExample);
  const [data, setData] = useState(storeExample);
  const [language, setLanguage] = useState(getDefaultLanguage());

  useEffect(() => {
    fetch("https://travel-app-v.herokuapp.com/api/countriesList", {
      mode: 'cors',
    })
      .then((data) => data.json())
      .then((dataJson) => {
        setData(dataJson);
        setSeachData(dataJson);
      });
  }, []);
  return (
    <>
      <Context.Provider value={[data, setData, seachData]}>
        <Router>
          <Header />
            <Switch>
              {/* <Route path="/authorization">
              <Authorization />
            </Route>*/}
            <Route path="/country/:name">
              <CountryPage
                countriesInfo={data}
                language={language}
              />
            </Route>
            <Route path="/">
              <MainPage
                countriesInfo={data}
              />
            </Route>
            </Switch>
          <Footer />
        </Router>
      </Context.Provider>
    </>
  );
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
