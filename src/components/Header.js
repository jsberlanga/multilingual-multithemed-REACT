import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const text = {
  ES: {
    title: "Mi página web",
    about: "Acerca de",
    contact: "Contacto",
    signin: "Ingresar",
    signup: "Registrarse"
  },
  EN: {
    title: "My Website",
    about: "About",
    contact: "Contact",
    signin: "SignIn",
    signup: "SingUp"
  }
};

const Header = props => {
  const { language } = useContext(LanguageContext);

  if (language === "EN") {
    return (
      <div className="header">
        <h1>{text.EN.title}</h1>
        <a href="#oobar">{text.EN.about}</a>
        <a href="#oobar">{text.EN.contact}</a>
        <a href="#oobar">{text.EN.signin}</a>
        <a href="#oobar">{text.EN.signup}</a>
        <div className="theme-icon">{props.children}</div>
      </div>
    );
  }
  if (language === "ES") {
    return (
      <div className="header">
        <h1>{text.ES.title}</h1>
        <a href="#oobar">{text.ES.about}</a>
        <a href="#oobar">{text.ES.contact}</a>
        <a href="#oobar">{text.ES.signin}</a>
        <a href="#oobar">{text.ES.signup}</a>
        <div className="theme-icon">{props.children}</div>
      </div>
    );
  }
};

export default Header;
