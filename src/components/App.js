import React, { useState } from "react";
import ThemeContext, { themes } from "../context/ThemeContext";
import LanguageContext, { languages } from "../context/LanguageContext";

import AppContainer from "./AppContainer";

const App = props => {
  const [theme, setTheme] = useState(themes.day);
  const [language, setLanguage] = useState(languages.english);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }} style={theme}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <AppContainer>{props.children}</AppContainer>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
