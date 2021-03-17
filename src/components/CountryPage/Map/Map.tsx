import React, { useRef } from "react";
import {
  YMaps,
  Map as YMap,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';
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
  const mapRef = useRef();

  // https://github.com/gribnoysup/react-yandex-maps/issues/186
  const getRegions = ymaps => {
    if (mapRef && mapRef.current) {
      const objectManager = new ymaps.ObjectManager();
      ymaps.borders.load('001').then(function (result) {
        const regions = result.features.reduce(function (acc, feature) {
          const iso = feature.properties.iso3166;
          feature.id = iso;
          feature.options = {
            fillOpacity: 0.3,
            strokeColor: "#AAA",
            strokeOpacity: 1
          };

          acc[iso] = feature;
          return acc;
        }, {});

        function paint(region) {
          region.options.fillColor = "rgba(240,52,52,1)";
        }

        paint(regions[props.iso]);

        result.features = [];
        for (let reg in regions) {
          result.features.push(regions[reg]);
        }

        objectManager.add(result);
        mapRef.current.geoObjects.add(objectManager);
      });
    }
  };


  return (
    <YMaps
      key={props.language + props.coord}
      query={{
        lang: getAPILanguage(props.language)
      }}>
      <div>
        <YMap
          instanceRef={mapRef}
          defaultState={{
            center: [lat, lon],
            zoom: 3,
          }}
          width={"100%"}
          height={"600px"}
          onLoad={ymaps => getRegions(ymaps)}
          options={{
            minZoom: 2,
            maxZoom: 10,
          }}
          modules={["borders", "ObjectManager"]}
        >
          <Placemark geometry={[lat, lon]} />
          <FullscreenControl />
          <ZoomControl options={{ float: 'right' }} />
        </YMap>
      </div>
    </YMaps >
  )
}

export default Map;
