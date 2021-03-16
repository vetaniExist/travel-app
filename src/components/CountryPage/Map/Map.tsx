import React from "react";
import { YMaps, Map as YMap } from 'react-yandex-maps';
import "./MapStyles.scss";

/* lang=ru_RU;
lang=en_US;
lang=en_RU;
lang=ru_UA;
lang=uk_UA;
lang=tr_TR. */

function getAPILanguage(sysLang) {
  // console.log(sysLang)
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

function Map(props) {
  return (
    <YMaps
      key={props.language}
      query={{
        lang: getAPILanguage(props.language)
      }}>
      <div>
        My awesome application with maps!
      <YMap
          defaultState={{ center: [55.75, 37.57], zoom: 5 }}
          width={"100%"}
          height={"600px"}
          onLoad={ymaps => console.log(ymaps)}
        />
      </div>
    </YMaps>
  )
}

export default Map;
