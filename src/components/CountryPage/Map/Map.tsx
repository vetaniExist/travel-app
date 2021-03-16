import React from "react";
import { YMaps, Map as YMap } from 'react-yandex-maps';
import "./MapStyles.scss";

/* lang=ru_RU;
lang=en_US;
lang=en_RU;
lang=ru_UA;
lang=uk_UA;
lang=tr_TR. */

function Map() {
  return (
    <YMaps
      query={{
        lang: "en_US"
      }}>
      <div>
        My awesome application with maps!
      <YMap
          defaultState={{ center: [55.75, 37.57], zoom: 5 }}
          width={"100%"}
          height={"600px"}

        />
      </div>
    </YMaps>
  )
}

export default Map;
