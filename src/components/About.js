import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const text = {
  ES: {
    title: "Acerca de nosotros",
    body:
      'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).'
  },
  EN: {
    title: "About Us",
    body:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  }
};

const About = props => {
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

export default About;
