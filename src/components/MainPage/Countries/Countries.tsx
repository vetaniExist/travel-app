import React, { useContext } from "react";
import "./CountriesStyle.scss";
import Cards from "./Cards/Cards";
import Context from "../../Context";

function Countries() {
  const [context] = useContext(Context);
  return (
    <div className="countries">
      <h3 className="countries__header">
        Countries
      </h3>
      <div className="countries__container">
        {/* <Cards countriesInfo={props.countriesInfo} /> */}
        {context.length === 0 ?<h3>Not Found!</h3> : <Cards countriesInfo={context} />}
        
      </div>
    </div>
  );
}

export default Countries;
