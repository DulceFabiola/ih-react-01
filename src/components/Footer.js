//1.IMPORTACIONES
import React from "react";
//2.FUNCION

function Footer(props) {
  return (
    <div>
      <p>Soy el Footer {props.email}</p>
      <p>
        Desde el footer, Hola {props.nombre} {props.apellido}{" "}
      </p>
    </div>
  );
}

//3.EXPORTACION
export default Footer;
