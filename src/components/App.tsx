import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "../css/app.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { storeExample } from "../store.example";
import Context from "./Context";
import LandContext from "./LangContext";
import LanguageContext from "./LangContext";

const CountryPage = React.lazy(() => import("./CountryPage/CountryPage"));
const MainPage = React.lazy(() => import("./MainPage/MainPage"));

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
        <LanguageContext.Provider value={[language, setLanguage]}>
        <Router>
          <Header />
            <Switch>
              {/* <Route path="/authorization">
              <Authorization />
            </Route>*/}
            <Route path="/country/:name">
            <React.Suspense fallback={<div>Load...</div>}>
              <CountryPage
                countriesInfo={data}
                language={language}
              />
              </React.Suspense>
            </Route>
            <Route path="/">
            <React.Suspense fallback={<div>Load...</div>}>
              <MainPage
                countriesInfo={data}
              />
              </React.Suspense>
            </Route>
          </Switch>
        </Router>

        <Footer />
        </LanguageContext.Provider>
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
