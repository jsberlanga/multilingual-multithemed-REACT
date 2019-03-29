import React from "react";

const languages = {
  english: "EN",
  spanish: "ES"
};

const LanguageContext = React.createContext();

export { LanguageContext as default, languages };
