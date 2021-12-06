//rfc
import React from "react";

export default function Movies(props) {
  const movies = props.movies;
  return (
    <>
      {movies.map((e, index) => {
        return (
          //ocupar un div, un ul, section, article, dependiendo de lo que estes renderizando
          <article key={index}>
            <h1> La peli es: {e.nombre} </h1>
            <p>El género es {e.genero}</p>
          </article>
        );
      })}
    </>
  );
}
