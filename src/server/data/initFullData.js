import fullData from "./fullData.json";

export const en_data = [];
export const ru_data = [];
export const de_data = [];

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
    timezones: country.timezones,

  };

  en_data[country.name.toLowerCase()] = { ...dataObj };
  ru_data[country.name.toLowerCase()] = { ...dataObj };
  de_data[country.name.toLowerCase()] = { ...dataObj };

  en_data[country.name.toLowerCase()].description = en_data[country.name.toLowerCase()].description.en;
  ru_data[country.name.toLowerCase()].description = ru_data[country.name.toLowerCase()].description.ru;
  de_data[country.name.toLowerCase()].description = de_data[country.name.toLowerCase()].description.de;
});

export default en_data;
