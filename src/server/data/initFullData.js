import fullData from "./fullData.json";

const data = [];

fullData.forEach((country) => {
  const dataObj = {
    name: country.name,
    description: country.description,
    nativeName: country.nativeName,
    capital: country.capital,
    flag: country.flag,
    name_de: country.name_de,
    touristAttractions: country.touristAttractions,

    countryImage: country.countryImage,
    videoId: country.videoId,
    alpha2Code: country.alpha2Code,
    currencies: country.currencies,

  };
  data[country.name.toLowerCase()] = dataObj;
});

export default data;
