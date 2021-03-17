import Widgets from "./components/CountryPage/Widgets/Widgets";
import React from "react";

export interface ICountry {
  id: string,
  name: string;
  capital: string;
  countryImage: string;
  countryDescription: string;
  countryFlagImage: string;
  sights: ISights[];
  currencyCode: string;
  currencyName: string;
  currencySymbol: any;
  // video: IVideo[];
  // map: any;
}

interface ISights {
  id: string;
  images: any;
  title: string;
  description: string;
}

// interface IVideo {
//   id: string;
//   video: any;
// }

export const storeExample: ICountry[] = [
  {
    id: "1",
    name: "Italy",
    capital: "Rome",
    countryImage: "https://picsum.photos/id/1018/1000/600/",
    countryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
    + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint "
    + "occaecat cupidatat non proident, "
    + "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countryFlagImage: "https://picsum.photos/id/384/200/150/",
    sights: []
  },
  {
    id: "2",
    name: "France",
    capital: "Paris",
    countryImage: "https://picsum.photos/id/1018/1000/600/",
    countryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
    + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint "
    + "occaecat cupidatat non proident, "
    + "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countryFlagImage: "https://picsum.photos/id/829/200/150/",
    sights: []
  },
  {
    id: "3",
    name: "France",
    capital: "Paris",
    countryImage: "https://picsum.photos/id/1018/1000/600/",
    countryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
    + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint "
    + "occaecat cupidatat non proident, "
    + "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countryFlagImage: "https://picsum.photos/id/384/200/150/",
    sights: []
  },
  {
    id: "4",
    name: "France",
    capital: "Paris",
    countryImage: "https://picsum.photos/id/1018/1000/600/",
    countryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
    + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint "
    + "occaecat cupidatat non proident, "
    + "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countryFlagImage: "https://picsum.photos/id/384/200/150/",
    sights: []
  },
  {
    id: "5",
    name: "France",
    capital: "Paris",
    countryImage: "https://picsum.photos/id/1018/1000/600/",
    countryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
    + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint "
    + "occaecat cupidatat non proident, "
    + "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countryFlagImage: "https://picsum.photos/id/384/200/150/",
    sights: []
  },
  {
    id: "6",
    name: "France",
    capital: "Paris",
    countryImage: "https://picsum.photos/id/1018/1000/600/",
    countryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
    + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint "
    + "occaecat cupidatat non proident, "
    + "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countryFlagImage: "https://picsum.photos/id/384/200/150/",
    sights: []
  },
  {
    id: "7",
    name: "France",
    capital: "Paris",
    countryImage: "https://picsum.photos/id/1018/1000/600/",
    countryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
    + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint "
    + "occaecat cupidatat non proident, "
    + "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countryFlagImage: "https://picsum.photos/id/384/200/150/",
    sights: []
  },
  {
    id: "8",
    name: "France",
    capital: "Paris",
    countryImage: "https://picsum.photos/id/1018/1000/600/",
    countryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
    + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint "
    + "occaecat cupidatat non proident, "
    + "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countryFlagImage: "https://picsum.photos/id/384/200/150/",
    sights: []
  },
  {
    id: "9",
    name: "France",
    capital: "Paris",
    countryImage: "https://picsum.photos/id/1018/1000/600/",
    countryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
    + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint "
    + "occaecat cupidatat non proident, "
    + "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countryFlagImage: "https://picsum.photos/id/384/200/150/",
    sights: []
  },
  {
    id: "10",
    name: "France",
    capital: "Paris",
    countryImage: "https://picsum.photos/id/1018/1000/600/",
    countryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
    + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint "
    + "occaecat cupidatat non proident, "
    + "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countryFlagImage: "https://picsum.photos/id/384/200/150/",
    sights: []
  },
  {
    id: "11",
    name: "France",
    capital: "Paris",
    countryImage: "https://picsum.photos/id/1018/1000/600/",
    countryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
    + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint "
    + "occaecat cupidatat non proident, "
    + "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countryFlagImage: "https://picsum.photos/id/384/200/150/",
    sights: []
  },
  {
    id: "12",
    name: "France",
    capital: "Paris",
    countryImage: "https://picsum.photos/id/1018/1000/600/",
    countryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
    + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint "
    + "occaecat cupidatat non proident, "
    + "sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countryFlagImage: "https://picsum.photos/id/384/200/150/",
    sights: []
  },
];
