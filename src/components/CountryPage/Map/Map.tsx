import React from "react";
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import "./MapStyles.scss";

/* lang=ru_RU;
lang=en_US;
lang=en_RU;
lang=ru_UA;
lang=uk_UA;
lang=tr_TR. */

function getAPILanguage(sysLang) {
  switch (sysLang) {
    case "EN":
    case "Английский":
    case "Englisch": {
      return "en_US";
    }
    case "RU":
    case "Русский":
    case "Russisch": {
      return "ru_RU";
    }
    default: {
      return "en_US";
    }
  }
}

/* "lat": 10.66668,
  "lon": -61.51889 */

function Map(props) {
  const lat = props.coord[0];
  const lon = props.coord[1];
  return (
    <YMaps
      key={props.language + props.coord}
      query={{
        lang: getAPILanguage(props.language)
      }}>
      <div>
      <h2 className="countryDetailsTitle">Location:</h2>
      <YMap
          defaultState={{ center: [lat, lon], zoom: 9 }}
          width={"100%"}
          height={"600px"}
          // onLoad={ymaps => console.log(ymaps)}
        >
          <Placemark geometry={[lat, lon]} />
        </YMap>
      </div>
    </YMaps>
  )
}

export default Map;
