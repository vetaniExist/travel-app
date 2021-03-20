// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Convert = ({ text, language }) => {
//   const [convertedText, setConvertedText] = useState('');

//   useEffect(() => {
//     const response = axios
//       .post(
//         'https://translation.googleapis.com/language/translate/v2',
//         {},
//         {
//           params: {
//             q: text,
//             target: language,
//             key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
//           }
//         }
//       )
//       .then((response) => {
//         setConvertedText(response.data.data.translations[0].translatedText);
//       })
//       .catch((err) => {
//         console.log('rest api error', err);
//       });
//   }, [text, language]);

//   return <span>{convertedText}</span>;
// };

// export default Convert;

import axios from 'axios';
export default function toTranslate(text:string, language:string) {
    let textTranslate = text;
    axios.post('https://translation.googleapis.com/language/translate/v2',
    {},
    {
        params: {
        q: text,
        target: language,
        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
    }
    )
    .then((response) => {
        console.log(text,  response.data.data.translations[0].translatedText)
        textTranslate = response.data.data.translations[0].translatedText;
    })
    .catch((err) => {
        console.log('rest api error', err);
    });
    console.log("textTranslate", textTranslate)
    return textTranslate;
}