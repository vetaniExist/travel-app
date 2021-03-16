import React from "react";

const LANGUAGES = {
  EN: {
    en: "EN",
    ru: "RU",
    de: "GE",
  },
  RU: {
    en: "Английский",
    ru: "Русский",
    de: "Немецкий",
  },
  DE: {
    en: "Englisch",
    ru: "Russisch",
    de: "Deutsche",
  },
};

const LanguageSelect = (props) => {
  const handleChange = (value: { target: { value: any; }; }) => {
    props.setLanguage(value.target.value);
    localStorage.language = value.target.value;
  };

  return (
    <div className="dropdownContainer">
      <select
        value={props.language}
        onChange={handleChange}
        className='languageContainer'
      >
        {
          Object.values(LANGUAGES.EN).map((lang, idx) => <option key={idx} value={lang}>{lang}</option>)
        }
      </select>
    </div>
  );
};

export default LanguageSelect;
