//rfc
//1.IMPORTACIONES
import React from "react";

//2.EXPORTACION DE FINCION
export default function Food(props) {
  const list = props.list;
  const restaurants = props.restaurants;
  return (
    //fragmentos: div sin la palabra div
    //Etiqueta padre
    //Un componente solo puede tener un elemento padre
    <>
      {/* abro llaves porque es JS
    map porque hay q recorrer un array, e-->callback
    y retorna un parrafo con cada elemento del array entre llaves porque es codigo JS{}
     */}
      {list.map((e, index) => {
        return (
          <div key={index}>
            <p>La comida es:</p>
            <p>{e}</p>
          </div>
        );
      })}
      <hr />
      {restaurants.map((e, index) => {
        return (
          <div key={index}>
            <p>
              El restaurante se llama: {e.nombre} y su platillo es:
              {e.platilloprincipal}
            </p>
          </div>
        );
      })}
    </>
  );
}
