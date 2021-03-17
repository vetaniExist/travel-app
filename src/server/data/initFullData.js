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

  };
  data[country.name.toLowerCase()] = dataObj;
});

export default data;
