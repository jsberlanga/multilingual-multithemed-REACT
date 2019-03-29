import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const text = {
  ES: {
    title: "Principal",
    body:
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
  },
  EN: {
    title: "Main",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
};

const Main = () => {
  const { language } = useContext(LanguageContext);

  if (language === "EN") {
    return (
      <>
        <h1>{text.EN.title}</h1>
        <p>{text.EN.body}</p>
      </>
    );
  }
  if (language === "ES") {
    return (
      <>
        <h1>{text.ES.title}</h1>
        <p>{text.ES.body}</p>
      </>
    );
  }
};

export default Main;
