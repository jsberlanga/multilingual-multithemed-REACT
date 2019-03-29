import React, { useContext } from "react";
import ThemeContext, { themes } from "../context/ThemeContext";
import LanguageContext, { languages } from "../context/LanguageContext";

import Main from "./Main";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";

const AppContainer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div
      style={{
        ...theme,
        width: "90vw",
        minHeight: "90vh",
        margin: "0 auto",
        padding: "2rem",
        borderRadius: "1rem"
      }}
    >
      <Header>
        <button
          onClick={() =>
            setTheme(theme === themes.night ? themes.day : themes.night)
          }
        >
          {theme === themes.day ? (
            <i className="fas fa-moon" style={{ color: "#3f72af" }} />
          ) : (
            <i className="fas fa-sun" style={{ color: "#ffde7d" }} />
          )}
        </button>
        <button
          onClick={() =>
            setLanguage(() => {
              switch (language) {
                case languages.english:
                  return languages.spanish;

                case languages.spanish:
                  return languages.english;
                default:
                  return;
              }
            })
          }
        >
          {language}
        </button>
      </Header>
      <Main />
      <About />
      <Footer title={language === "EN" ? "Footer" : "Pie de pagina"} />
    </div>
  );
};

export default AppContainer;
