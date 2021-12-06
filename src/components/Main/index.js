//index.js es la representacion del archivo principal de Main
//1.IMPORTACIONES
import React from "react";
import Food from "./Food";
import Movies from "./Movies";

//2.FUNCIONES
function Main() {
  const foodList = ["tamales", "tortas", "tacos"];
  const restaurantsList = [
    {
      nombre: "McDonalds",
      platilloprincipal: "Hamburguesas",
    },
    {
      nombre: "Pizza Hut",
      platilloprincipal: "Pizza",
    },
    {
      nombre: "La casa de Toño",
      platilloprincipal: "Taquitos de cochinita",
    },
  ];
  const moviesList = [
    {
      nombre: "El aro",
      genero: "Terror",
    },
    {
      nombre: "El padrino",
      genero: "Mafia",
    },
    {
      nombre: "Titanes del pacifico",
      genero: "Ciencia ficción",
    },
  ];
  return (
    <>
      <Food list={foodList} restaurants={restaurantsList} />
      <hr />
      <Movies movies={moviesList} />
    </>
  );
}

//3.EXPORTACIONES
export default Main;
