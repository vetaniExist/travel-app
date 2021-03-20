import React from "react";

const LanguageContext = React.createContext<"en" | "ru" | "de">("en");

export default LanguageContext;