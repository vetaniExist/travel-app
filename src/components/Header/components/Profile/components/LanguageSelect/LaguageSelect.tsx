import React, { useContext } from "react";
import LanguageCntext from "../../../../../LangContext";

const LANGUAGES = {    
  en: "EN",
  ru: "RU",
  de: "GE"
}

const LanguageSelect = () => {
  const [lang, setLang] = useContext(LanguageCntext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLang(e.target.value);
    localStorage.language = e.target.value;
  };

  return (
    <div className="dropdownContainer">
      <select
        value={lang}
        onChange={handleChange}
        className='languageContainer'
      >
        {
          Object.values(LANGUAGES).map((lang, idx) => <option key={idx} value={lang}>{lang}</option>)
        }
      </select>
    </div>
  );
};

export default LanguageSelect;
