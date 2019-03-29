import React from "react";

const themes = {
  day: {
    color: "#364f6b",
    backgroundColor: "#f5f5f5"
  },
  night: {
    color: "#3fc1c9",
    backgroundColor: "#364f6b"
  }
};

const ThemeContext = React.createContext();

export { ThemeContext as default, themes };
