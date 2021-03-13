import React, { useState } from 'react';
import languageIcon from '../../../../../../assets/icons/language_icon.svg';
import './LanguageSelectStyles.css';

const LANGUAGES = {
    EN: {
      en: 'EN',
      ru: 'RU',
      de: 'GE', 
    },
    RU: {
        en: 'Английский',
        ru: 'Русский',
        de: 'Немецкий', 
    },
    DE: {
        en: 'Englisch',
        ru: 'Russisch',
        de: 'Deutsche', 
    },
  }

const LanguageSelect = () => {
  const defaultLanguage = localStorage.language ? localStorage.language : 'English';
  const [language, setLanguage] = useState(defaultLanguage);

  const handleChange = (value) => {
    setLanguage(value.target.value);
    localStorage.language = value.target.value;
  }
  
  return (
    <div className="dropdownContainer">
      <select
        value={language}
        onChange={handleChange}
        className='languageContainer'
      >
        {
            Object.values(LANGUAGES.EN).map((language, idx) => {
              return <option key={idx} value={language}>{language}</option>
            })
        }
      </select>
    </div>
  );
};

export default LanguageSelect;
